// Downloaded from https://gist.github.com/mark-friedman/48f43a9b62b1c8ad029a75d4b4e61f31
// - And removed first line const Blockly = window.Blockly;
// - Added support for Node-Red memory

Blockly.JavaScript['object_from_json'] = function(block) {
    const value_json = Blockly.JavaScript.valueToCode(block, 'JSON', Blockly.JavaScript.ORDER_ATOMIC);
    const code = 'JSON.parse(' + value_json + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_to_json'] = function(block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    const code = 'JSON.stringify(' + value_object + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_create'] = function(block) {
    if (!block.numFields) {
        return ['{}', Blockly.JavaScript.ORDER_NONE];
    }
    
    var fieldInitCode = '';
    for (var i = 1; i <= block.numFields; i++) {
        if (i > 1) { 
            fieldInitCode += ', '; 
        }
        
        const fieldName = block.getFieldValue('field' + i);
        const fieldValue = Blockly.JavaScript.valueToCode(block, 'field_input' + i, Blockly.JavaScript.ORDER_ATOMIC);
        fieldInitCode += '"' + fieldName + '": ' + fieldValue;
    }
    var code = '{ ' + fieldInitCode + ' }';
  
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_keys'] = function(block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'object_input', Blockly.JavaScript.ORDER_ATOMIC);
    var code;
    
    switch(value_object) {
        case 'context':
            code = 'context.keys()';
            break;
        case 'flow':
            code = 'flow.keys()';
            break;
        case 'global':
            code = 'global.keys()';
            break;
        default: // normal object (i.e. no Node-RED specific memory)
            code = 'Object.keys(' + value_object + ')';
    }
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
