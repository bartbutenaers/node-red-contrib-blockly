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
        node.ini = n.initialize ? n.initialize.trim() : "";
        node.fin = n.finalize ? n.finalize.trim() : "";
        node.libs = n.libs || [];

        if (RED.settings.functionExternalModules !== true && node.libs.length > 0) {
            throw new Error(RED._("function.error.externalModuleNotAllowed"));
        }

        var handleNodeDoneCall = true;

        // Check to see if the Function appears to call `node.done()`. If so,
        // we will assume it is well written and does actually call node.done().
        // Otherwise, we will call node.done() after the function returns regardless.
        if (/node\.done\s*\(\s*\)/.test(node.func)) {
            handleNodeDoneCall = false;
        }

        var functionText = "var results = null;"+
            "results = (async function(msg,__send__,__done__){ "+
                "var __msgid__ = msg._msgid;"+
                "var node = {"+
                    "id:__node__.id,"+
                    "name:__node__.name,"+
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
                    try {
                        var spec = module.module;
                        if (spec && (spec !== "")) {
                            var lib = RED.require(module.module);
                            sandbox[vname] = lib;
                        }
                    } catch (e) {
                        //TODO: NLS error message
                        node.error(RED._("function.error.moduleLoadError",{module:module.spec, error:e.toString()}))
                        moduleErrors = true;
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
            }
            node.script = vm.createScript(functionText, createVMOpt(node, ""));
            if (node.fin && (node.fin !== "")) {
                var finText = `(function () {
                    var node = {
                        id:__node__.id,
                        name:__node__.name,
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
    }
    
    RED.nodes.registerType("Blockly",BlocklyNode);
    RED.library.register("blockly_functions");
     
    // -------------------------------------------------------------------------------------------------
    // Determining the path to the files in the dependent blockly module once.
    // See https://discourse.nodered.org/t/use-files-from-dependent-npm-module/17978/5?u=bartbutenaers
    // -------------------------------------------------------------------------------------------------
    var blocklyModulePath = require.resolve("blockly");
    
    // For example suppose the require.resolved results in blocklyModulePath = /home/pi/.node-red/node_modules/blockly/index.js
    // All the requested libraries will be located in the same folder as the index.js file.
    blocklyModulePath = blocklyModulePath.replace("index.js", "");

    if (!fs.existsSync(blocklyModulePath)) {
        console.log("The blockly npm library path " + blocklyModulePath + " does not exist");
        blocklyModulePath = null;
    }
    
    // -------------------------------------------------------------------------------------------------
    // Determining the path to the files in the dependent @blockly/field-date module once.
    // See https://discourse.nodered.org/t/use-files-from-dependent-npm-module/17978/5?u=bartbutenaers
    // -------------------------------------------------------------------------------------------------
    // The date picker widget is inside a separate npm package
    // The require.resolve wiill result in fieldDataModulePath = /home/pi/.node-red/node_modules/@blockly/field-date/dist/date_compressed.js
    var fieldDataModulePath = require.resolve("@blockly/field-date");

    if (!fs.existsSync(fieldDataModulePath)) {
        console.log("The blockly npm library path " + fieldDataModulePath + " does not exist");
        fieldDataModulePath = null;
    } 
     
    // Make all the static resources from this node public available (i.e. files from the blockly npm package).
    RED.httpAdmin.get('/blocky/js/*', function(req, res) {
        var requestedFilePath;
        
        res.set('Cache-Control', 'public, max-age=31557600, s-maxage=31557600'); // 1 year
        
        if (req.params[0].startsWith("npm2")) {
            requestedFilePath = fieldDataModulePath;
        }
        else if (req.params[0].startsWith("npm")) {
            var requestedFileName = req.params[0].replace("npm", "");
            requestedFilePath = path.join(blocklyModulePath, requestedFileName);
        }
        else {
            requestedFilePath = path.join(__dirname, req.params[0]);
        }
       
        // Send the requested file to the client
        res.sendFile(requestedFilePath)
    });
}
