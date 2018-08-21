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

Blockly.JavaScript['object_get'] = function(block) {
    const value_field_name = Blockly.JavaScript.valueToCode(block, 'field_name', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    const value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC); 
    var code;
  
    // When a Node-Red memory area is applied, we will get the property from that memory.
    // Otherwise we will read the property from the Javascript object.
    switch(value_object) {
        case 'context':
            code = 'context.get(' + value_field_name + ')';
            break;
        case 'flow':
            code = 'flow.get(' + value_field_name + ')';
            break;
        case 'global':
            code = 'global.get(' + value_field_name + ')';
            break;
        default:
            code = value_object + '[' + value_field_name + ']';
    }
  
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_set'] = function(block) {
    const value_field_name = Blockly.JavaScript.valueToCode(block, 'field_name', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    const value_object_field = Blockly.JavaScript.valueToCode(block, 'object_field', Blockly.JavaScript.ORDER_ATOMIC);
    const value_value_field = Blockly.JavaScript.valueToCode(block, 'value_field', Blockly.JavaScript.ORDER_ATOMIC);
    var code;

    // When a Node-Red memory area is applied, we will set the property to that memory.
    // Otherwise we will write the property to the Javascript object.  
    switch(value_object_field) {
        case 'context':
            code = 'context.set(' + value_field_name + ', ' + value_value_field + ');\n';
            break;
        case 'flow':
            code = 'flow.set(' + value_field_name + ', ' + value_value_field + ');\n';
            break;
        case 'global':
            code = 'global.set(' + value_field_name + ', ' + value_value_field + ');\n';
            break;
        default:
            code = value_object_field + '[' + value_field_name + '] = ' + value_value_field + ';\n';
    }
    
    return code;
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
    const code = value_object + '.keys()';
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
