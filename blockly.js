/**
 * Copyright 2018 Bart Butenaers
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
 
// This code is copied from Node-Red's function node.
// See https://github.com/node-red/node-red/blob/master/nodes/core/core/80-function.js
// This means the code should be copied again, each time the function node changes.
// That can be the case e.g. when the function node's API changes.
// Some changes made to the original 80-function.js file:
// - At the top, the 'path' and 'fs' npm libraries have been required.
// - At the end of this file, a section has been added about RED.httpAdmin.get.
// - At the end of this file, a blockly functions library has been specified.
// - The function name is changed to BlocklyNode.
// - The node is registered as RED.nodes.registerType("Blockly",BlocklyNode);
// - The variable node.ini will be an empty string because currently this node does only support the function node's "on message" tabsheet
// - The variable node.fin will be an empty string because currently this node does only support the function node's "on message" tabsheet
// - The variable node.libs will be an empty array because currently this node does not support the function node's external dependencies

module.exports = function(RED) {
    var util = require("util");
    var vm = require("vm");
    var acorn = require("acorn");
    var acornWalk = require("acorn-walk");
    var path = require("path");
    var fs = require("fs");
    
    function sendResults(node,send,_msgid,msgs,cloneFirstMessage) {
        if (msgs == null) {
            return;
        } else if (!util.isArray(msgs)) {
            msgs = [msgs];
        }
        var msgCount = 0;
        for (var m=0; m<msgs.length; m++) {
            if (msgs[m]) {
                if (!util.isArray(msgs[m])) {
                    msgs[m] = [msgs[m]];
                }
                for (var n=0; n < msgs[m].length; n++) {
                    var msg = msgs[m][n];
                    if (msg !== null && msg !== undefined) {
                        if (typeof msg === 'object' && !Buffer.isBuffer(msg) && !util.isArray(msg)) {
                            if (msgCount === 0 && cloneFirstMessage !== false) {
                                msgs[m][n] = RED.util.cloneMessage(msgs[m][n]);
                                msg = msgs[m][n];
                            }
                            msg._msgid = _msgid;
                            msgCount++;
                        } else {
                            var type = typeof msg;
                            if (type === 'object') {
                                type = Buffer.isBuffer(msg)?'Buffer':(util.isArray(msg)?'Array':'Date');
                            }
                            node.error(RED._("function.error.non-message-returned",{ type: type }));
                        }
                    }
                }
            }
        }
        if (msgCount>0) {
            send(msgs);
        }
    }

    function createVMOpt(node, kind) {
        var opt = {
            filename: 'Function node'+kind+':'+node.id+(node.name?' ['+node.name+']':''), // filename for stack traces
            displayErrors: true
            // Using the following options causes node 4/6 to not include the line number
            // in the stack output. So don't use them.
            // lineOffset: -11, // line number offset to be used for stack traces
            // columnOffset: 0, // column number offset to be used for stack traces
        };
        return opt;
    }

    function updateErrorInfo(err) {
        if (err.stack) {
            var stack = err.stack.toString();
            var m = /^([^:]+):([^:]+):(\d+).*/.exec(stack);
            if (m) {
                var line = parseInt(m[3]) -1;
                var kind = "body:";
                if (/setup/.exec(m[1])) {
                    kind = "setup:";
                }
                if (/cleanup/.exec(m[1])) {
                    kind = "cleanup:";
                }
                err.message += " ("+kind+"line "+line+")";
            }
        }
    }

    function BlocklyNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        node.name = n.name;
        node.func = n.func;
        node.outputs = n.outputs;
        node.timeout = (n.timeout | 0)*1000;
        if(node.timeout>0){
            node.timeoutOptions = {
                timeout:node.timeout,
                breakOnSigint:true
            }
        }
        node.ini = n.initialize ? n.initialize.trim() : "";
        node.fin = n.finalize ? n.finalize.trim() : "";
        node.libs = n.libs || [];

        if (RED.settings.functionExternalModules !== true && node.libs.length > 0) {
            throw new Error(RED._("function.error.externalModuleNotAllowed"));
        }

        var functionText = "var results = null;"+
            "results = (async function(msg,__send__,__done__){ "+
                "var __msgid__ = msg._msgid;"+
                "var node = {"+
                    "id:__node__.id,"+
                    "name:__node__.name,"+
                    "path:__node__.path,"+
                    "outputCount:__node__.outputCount,"+
                    "log:__node__.log,"+
                    "error:__node__.error,"+
                    "warn:__node__.warn,"+
                    "debug:__node__.debug,"+
                    "trace:__node__.trace,"+
                    "on:__node__.on,"+
                    "status:__node__.status,"+
                    "send:function(msgs,cloneMsg){ __node__.send(__send__,__msgid__,msgs,cloneMsg);},"+
                    "done:__done__"+
                "};\n"+
                node.func+"\n"+
            "})(msg,__send__,__done__);";
        
        var handleNodeDoneCall = true;

        // Check to see if the Function appears to call `node.done()`. If so,
        // we will assume it is well written and does actually call node.done().
        // Otherwise, we will call node.done() after the function returns regardless.
        if (/node\.done\s*\(\s*\)/.test(functionText)) {
            // We have spotted the code contains `node.done`. It could be in a comment
            // so need to do the extra work to parse the AST and examine it properly.
            acornWalk.simple(acorn.parse(functionText,{ecmaVersion: "latest"} ), {
                CallExpression(astNode) {
                    if (astNode.callee && astNode.callee.object) {
                        if (astNode.callee.object.name === "node" && astNode.callee.property.name === "done") {
                            handleNodeDoneCall = false;
                        }
                    }
                }
            })
        }

        var finScript = null;
        var finOpt = null;
        node.topic = n.topic;
        node.outstandingTimers = [];
        node.outstandingIntervals = [];
        node.clearStatus = false;

        var sandbox = {
            console:console,
            util:util,
            Buffer:Buffer,
            Date: Date,
            RED: {
                util: RED.util
            },
            __node__: {
                id: node.id,
                name: node.name,
                path: node._path,
                outputCount: node.outputs,
                log: function() {
                    node.log.apply(node, arguments);
                },
                error: function() {
                    node.error.apply(node, arguments);
                },
                warn: function() {
                    node.warn.apply(node, arguments);
                },
                debug: function() {
                    node.debug.apply(node, arguments);
                },
                trace: function() {
                    node.trace.apply(node, arguments);
                },
                send: function(send, id, msgs, cloneMsg) {
                    sendResults(node, send, id, msgs, cloneMsg);
                },
                on: function() {
                    if (arguments[0] === "input") {
                        throw new Error(RED._("function.error.inputListener"));
                    }
                    node.on.apply(node, arguments);
                },
                status: function() {
                    node.clearStatus = true;
                    node.status.apply(node, arguments);
                }
            },
            context: {
                set: function() {
                    node.context().set.apply(node,arguments);
                },
                get: function() {
                    return node.context().get.apply(node,arguments);
                },
                keys: function() {
                    return node.context().keys.apply(node,arguments);
                },
                get global() {
                    return node.context().global;
                },
                get flow() {
                    return node.context().flow;
                }
            },
            flow: {
                set: function() {
                    node.context().flow.set.apply(node,arguments);
                },
                get: function() {
                    return node.context().flow.get.apply(node,arguments);
                },
                keys: function() {
                    return node.context().flow.keys.apply(node,arguments);
                }
            },
            global: {
                set: function() {
                    node.context().global.set.apply(node,arguments);
                },
                get: function() {
                    return node.context().global.get.apply(node,arguments);
                },
                keys: function() {
                    return node.context().global.keys.apply(node,arguments);
                }
            },
            env: {
                get: function(envVar) {
                    var flow = node._flow;
                    return flow.getSetting(envVar);
                }
            },
            setTimeout: function () {
                var func = arguments[0];
                var timerId;
                arguments[0] = function() {
                    sandbox.clearTimeout(timerId);
                    try {
                        func.apply(node,arguments);
                    } catch(err) {
                        node.error(err,{});
                    }
                };
                timerId = setTimeout.apply(node,arguments);
                node.outstandingTimers.push(timerId);
                return timerId;
            },
            clearTimeout: function(id) {
                clearTimeout(id);
                var index = node.outstandingTimers.indexOf(id);
                if (index > -1) {
                    node.outstandingTimers.splice(index,1);
                }
            },
            setInterval: function() {
                var func = arguments[0];
                var timerId;
                arguments[0] = function() {
                    try {
                        func.apply(node,arguments);
                    } catch(err) {
                        node.error(err,{});
                    }
                };
                timerId = setInterval.apply(node,arguments);
                node.outstandingIntervals.push(timerId);
                return timerId;
            },
            clearInterval: function(id) {
                clearInterval(id);
                var index = node.outstandingIntervals.indexOf(id);
                if (index > -1) {
                    node.outstandingIntervals.splice(index,1);
                }
            }
        };
        if (util.hasOwnProperty('promisify')) {
            sandbox.setTimeout[util.promisify.custom] = function(after, value) {
                return new Promise(function(resolve, reject) {
                    sandbox.setTimeout(function(){ resolve(value); }, after);
                });
            };
            sandbox.promisify = util.promisify;
        }

        const moduleLoadPromises = [];

        if (node.hasOwnProperty("libs")) {
            let moduleErrors = false;
            var modules = node.libs;
            modules.forEach(module => {
                var vname = module.hasOwnProperty("var") ? module.var : null;
                if (vname && (vname !== "")) {
                    if (sandbox.hasOwnProperty(vname) || vname === 'node') {
                        node.error(RED._("function.error.moduleNameError",{name:vname}))
                        moduleErrors = true;
                        return;
                    }
                    sandbox[vname] = null;
                    var spec = module.module;
                    if (spec && (spec !== "")) {
                        moduleLoadPromises.push(RED.import(module.module).then(lib => {
                            sandbox[vname] = lib.default;
                        }).catch(err => {
                            node.error(RED._("function.error.moduleLoadError",{module:module.spec, error:err.toString()}))
                            throw err;
                        }));
                    }
                }
            });
            if (moduleErrors) {
                throw new Error(RED._("function.error.externalModuleLoadError"));
            }
        }


        const RESOLVING = 0;
        const RESOLVED = 1;
        const ERROR = 2;
        var state = RESOLVING;
        var messages = [];
        var processMessage = (() => {});

        node.on("input", function(msg,send,done) {
            if(state === RESOLVING) {
                messages.push({msg:msg, send:send, done:done});
            }
            else if(state === RESOLVED) {
                processMessage(msg, send, done);
            }
        });
        Promise.all(moduleLoadPromises).then(() => {
            var context = vm.createContext(sandbox);
            try {
                var iniScript = null;
                var iniOpt = null;
                if (node.ini && (node.ini !== "")) {
                    var iniText = `
                    (async function(__send__) {
                        var node = {
                            id:__node__.id,
                            name:__node__.name,
                            path:__node__.path,
                            outputCount:__node__.outputCount,
                            log:__node__.log,
                            error:__node__.error,
                            warn:__node__.warn,
                            debug:__node__.debug,
                            trace:__node__.trace,
                            status:__node__.status,
                            send: function(msgs, cloneMsg) {
                                __node__.send(__send__, RED.util.generateId(), msgs, cloneMsg);
                            }
                        };
                        `+ node.ini +`
                    })(__initSend__);`;
                    iniOpt = createVMOpt(node, " setup");
                    iniScript = new vm.Script(iniText, iniOpt);
                    if(node.timeout>0){
                        iniOpt.timeout = node.timeout;
                        iniOpt.breakOnSigint = true;
                    }
                }
                node.script = vm.createScript(functionText, createVMOpt(node, ""));
                if (node.fin && (node.fin !== "")) {
                    var finText = `(function () {
                        var node = {
                            id:__node__.id,
                            name:__node__.name,
                            path:__node__.path,
                            outputCount:__node__.outputCount,
                            log:__node__.log,
                            error:__node__.error,
                            warn:__node__.warn,
                            debug:__node__.debug,
                            trace:__node__.trace,
                            status:__node__.status,
                            send: function(msgs, cloneMsg) {
                                __node__.error("Cannot send from close function");
                            }
                        };
                        `+node.fin +`
                    })();`;
                    finOpt = createVMOpt(node, " cleanup");
                    finScript = new vm.Script(finText, finOpt);
                    if(node.timeout>0){
                        finOpt.timeout = node.timeout;
                        finOpt.breakOnSigint = true;
                    }
                }
                var promise = Promise.resolve();
                if (iniScript) {
                    context.__initSend__ = function(msgs) { node.send(msgs); };
                    promise = iniScript.runInContext(context, iniOpt);
                }

                processMessage = function (msg, send, done) {
                    var start = process.hrtime();
                    context.msg = msg;
                    context.__send__ = send;
                    context.__done__ = done;
                    var opts = {};
                    if (node.timeout>0){
                        opts = node.timeoutOptions;
                    }
                    node.script.runInContext(context);
                    context.results.then(function(results) {
                        sendResults(node,send,msg._msgid,results,false);
                        if (handleNodeDoneCall) {
                            done();
                        }

                        var duration = process.hrtime(start);
                        var converted = Math.floor((duration[0] * 1e9 + duration[1])/10000)/100;
                        node.metric("duration", msg, converted);
                        if (process.env.NODE_RED_FUNCTION_TIME) {
                            node.status({fill:"yellow",shape:"dot",text:""+converted});
                        }
                    }).catch(err => {
                        if ((typeof err === "object") && err.hasOwnProperty("stack")) {
                            //remove unwanted part
                            var index = err.stack.search(/\n\s*at ContextifyScript.Script.runInContext/);
                            err.stack = err.stack.slice(0, index).split('\n').slice(0,-1).join('\n');
                            var stack = err.stack.split(/\r?\n/);

                            //store the error in msg to be used in flows
                            msg.error = err;

                            var line = 0;
                            var errorMessage;
                            if (stack.length > 0) {
                                while (line < stack.length && stack[line].indexOf("ReferenceError") !== 0) {
                                    line++;
                                }

                                if (line < stack.length) {
                                    errorMessage = stack[line];
                                    var m = /:(\d+):(\d+)$/.exec(stack[line+1]);
                                    if (m) {
                                        var lineno = Number(m[1])-1;
                                        var cha = m[2];
                                        errorMessage += " (line "+lineno+", col "+cha+")";
                                    }
                                }
                            }
                            if (!errorMessage) {
                                errorMessage = err.toString();
                            }
                            done(errorMessage);
                        }
                        else if (typeof err === "string") {
                            done(err);
                        }
                        else {
                            done(JSON.stringify(err));
                        }
                    });
                }

                node.on("close", function() {
                    if (finScript) {
                        try {
                            finScript.runInContext(context, finOpt);
                        }
                        catch (err) {
                            node.error(err);
                        }
                    }
                    while (node.outstandingTimers.length > 0) {
                        clearTimeout(node.outstandingTimers.pop());
                    }
                    while (node.outstandingIntervals.length > 0) {
                        clearInterval(node.outstandingIntervals.pop());
                    }
                    if (node.clearStatus) {
                        node.status({});
                    }
                });

                promise.then(function (v) {
                    var msgs = messages;
                    messages = [];
                    while (msgs.length > 0) {
                        msgs.forEach(function (s) {
                            processMessage(s.msg, s.send, s.done);
                        });
                        msgs = messages;
                        messages = [];
                    }
                    state = RESOLVED;
                }).catch((error) => {
                    messages = [];
                    state = ERROR;
                    node.error(error);
                });

            }
            catch(err) {
                // eg SyntaxError - which v8 doesn't include line number information
                // so we can't do better than this
                updateErrorInfo(err);
                node.error(err);
            }
        }).catch(err => {
            node.error(RED._("function.error.externalModuleLoadError"));
        });
    }
    
    RED.nodes.registerType("Blockly",BlocklyNode, {
        dynamicModuleList: "libs"
    });
    RED.library.register("blockly_functions");

    var blocklyNpmPaths = new Map();

    // Make all the static NPM modules resources from this node public available
    RED.httpAdmin.get('/blockly-contrib/npm/:package/*', function(req, res) {
        var requestedFilePath;
        
        // When the npm package name contains a path separator (e.g. @blockly/plugin-workspace-search) then the frontend will
        // have replaced that separator by the string "___SEPARATOR___".  So we need to replace "___SEPARATOR___" here again by 
        // the path separator (which depends on the OS this node is running on).
        // See https://github.com/bartbutenaers/node-red-contrib-blockly/issues/101
        req.params.package = req.params.package.replace("___SEPARATOR___", path.sep);

        // Try to get the npm package path from the cache
        var npmPackagePath = blocklyNpmPaths.get(req.params.package);
        
        if (!npmPackagePath) {
            try {
                // Try to find the path of the installed NPM package.
                // Note that this only works for modules that have an entrypoint (main) in their package.json file...
                // See https://github.com/nodejs/node/issues/29549#issuecomment-531411955
                npmPackagePath = require.resolve(req.params.package);
            }
            catch(err) {
                // Do nothing: error logged below ...
            }
            
            // TODO add a "main" entrypoint in the blockly node package.json file, and remove this fix !!!!!!!!!!!!!
            if (req.params.package == "node-red-contrib-blockly") {
                npmPackagePath = __dirname;
            }
            else {
                if (npmPackagePath) {
                    // Note that the req.params.package can contain a slash (e.g. the NPM package @blockly/field-date), which need
                    // to be replaced by the path separator of the current OS.                    
                    var packageName = req.params.package.replace("/", path.sep);
                    
                    // Make sure the packageName refers to the root folder of the package, because all paths in the config node 
                    // editable list are relative to that root path.  Indeed require.resolve sometimes e.g. contains the path to an 
                    // index.js or some other entry point in the package package.json file.  So remove that last part ...
                    packageName = path.sep + packageName + path.sep;
                    npmPackagePath = npmPackagePath.split(packageName)[0] + path.sep + packageName;

                    // Cache the NPM package path
                    blocklyNpmPaths.set(req.params.package, npmPackagePath);
                }
                else {
                    console.log("The npm package " + req.params.package + " is not installed (but required via the Blockly config node)");
                    res.writeHead(404);
                    return res.end("NPM package not found.");
                }
            }
        }
        
        // The wildcard * can contain multiple path levels (e.g. a/b/c/d), which represents the relate file path (in the NPM package folder)
        var relativePath = req.params[0];
        
        var requestedFilePath = path.join(npmPackagePath, relativePath);

        if (!fs.existsSync(requestedFilePath)) {
            console.log("The NPM file path " + requestedFilePath + " does not exist");
            res.writeHead(404);
            return res.end("NPM file not found.");
        }
        
        // Send the requested file to the client
        res.sendFile(requestedFilePath)
    });
    
    // Make all the static local filesystem resources from this node public available
    RED.httpAdmin.get('/blockly-contrib/file/*', function(req, res) {
        // The wildcard * can contain multiple path levels (e.g. a/b/c/d), which represents the absolute file path (in the filesystem)
        var absolutePath = req.params[0];
        
        if (!fs.existsSync(absolutePath)) {
            console.log("The local file path " + absolutePath + " does not exist");
            res.writeHead(404);
            return res.end("Local file not found.");
        }
        
        // Send the requested file to the client
        res.sendFile(absolutePath)
    });
}
