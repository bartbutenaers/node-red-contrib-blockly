/*
* Copyright: ioBroker/ioBroker.javascript is licensed under the MIT license.
* This code has been copied from https://github.com/ioBroker/ioBroker.javascript/blob/master/admin/google-blockly/own/blocks_timeout.js.
* See their MIT license for more information: https://github.com/ioBroker/ioBroker.javascript/blob/master/LICENSE
*/
Blockly.JavaScript['set_timeout'] = function(block) {
    var delay = block.getFieldValue('DELAY');
    var name  = block.getFieldValue('NAME');
    var unit  = block.getFieldValue('UNIT');
    
    switch(unit) {
        case 'min':
            delay *= 60000;
            break;
        case 'sec':
            delay *= 1000;
            break;
    }
    
    var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENT');

    // The code should store the timeout timer id in the node context, in order to be able to clear it when the next input message arrives.
    // see https://discourse.nodered.org/t/cancelling-a-javascript-countdown-in-function/15790/5?u=bartbutenaers
    var code = 'var ' + name + ' = setTimeout(function() {\n' + statements + '}, ' + delay + ');\ncontext.set("' + name + '", ' + name + ');';
    return code;
};

Blockly.JavaScript['set_interval'] = function(block) {
    var delay = block.getFieldValue('INTERVAL');
    var name  = block.getFieldValue('NAME');
    var unit  = block.getFieldValue('UNIT');

    switch(unit) {
        case 'min':
            delay *= 60000;
            break;
        case 'sec':
            delay *= 1000;
            break;
    }

    var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENT');

    // The code should store the interval timer id in the node context, in order to be able to clear it when the next input message arrives.
    // see https://discourse.nodered.org/t/cancelling-a-javascript-countdown-in-function/15790/5?u=bartbutenaers
    var code = 'var ' + name + ' = setInterval(function() {\n' + statements + '}, ' + delay + ');\ncontext.set("' + name + '", ' + name + ');';
    return code;
};

Blockly.JavaScript['clear_timeout'] = function(block) {
    // Get the selected text label in the dropdown, instead of the selected value (because that is the set_interval block id)
    var name = block.getField('NAME').getText_();

    return 'if (context.get("' + name + '")) {\n  clearTimeout(context.get("' + name + '"));\n  context.set("' + name + '", undefined);\n}\n';
};

Blockly.JavaScript['clear_interval'] = function(block) {
    // Get the selected text label in the dropdown, instead of the selected value (because that is the set_interval block id)
    var name = block.getField('NAME').getText_();

    return 'if (context.get("' + name + '")) {\n  clearInterval(context.get("' + name + '"));\n  context.set("' + name + '", undefined);\n}\n';
};