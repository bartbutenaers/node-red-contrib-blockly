Blockly.JavaScript['node_object_get'] = function(block) {
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

Blockly.JavaScript['node_object_set'] = function(block) {
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

Blockly.JavaScript['node_log'] = function(block) {
   var code;

   const inputValue = Blockly.JavaScript.valueToCode(block, 'LOG_MESSAGE_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    
   // The 'warn' and 'error' also get sent to the flow editor debug tab (in contradiction to 'log').
   // For finer grained logging 'trace' and 'debug' are only visible, when a logger is configured to show those levels.
   switch(block.getFieldValue('LOG_LEVEL')) {
        case 'LOG':
            code = 'node.log(' + inputValue + ');\n';
            break;
        case 'WARN':
            code = 'node.warn(' + inputValue + ');\n';
            break;
        case 'ERR':
            code = 'node.error(' + inputValue + ');\n';
            break;
        case 'DEBUG':
            code = 'node.debug(' + inputValue + ');\n';
            break;
        case 'TRACE':
            code = 'node.trace(' + inputValue + ');\n';                           
            break;
    }
    
    return code;
};

Blockly.JavaScript['node_msg'] = function(block) {
    var code = 'msg';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_send'] = function(block) {
    const outputNumber = block.getFieldValue('OUTPUT_NR') || 1;
    const inputValue = Blockly.JavaScript.valueToCode(block, 'MESSAGE_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    if (!Blockly.nodeOutputs || outputNumber > Blockly.nodeOutputs) {
        // When an unexisting output number is specified, don't send anything
        return 'node.error("Cannot send to output ' + outputNumber + ', since only ' + Blockly.nodeOutputs + ' outputs available");\n';
    }
    
    var code = 'node.send([';
    
    // Send the message only to the specified output number, and null to all other outputs.
    for (var i = 1; i <= Blockly.nodeOutputs; i++) {
        if (i > 1) {
            code += ', ';
        }
        
        if (i == outputNumber) {
            code += inputValue;
        }
        else {
            code += 'null';
        }
    }
    
    code += ']);\n';
    
    return code;
};

Blockly.JavaScript['node_return_message'] = function(block) {
    const outputNumber = block.getFieldValue('OUTPUT_NR') || 1;
    const inputValue = Blockly.JavaScript.valueToCode(block, 'MESSAGE_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    if (!Blockly.nodeOutputs || outputNumber > Blockly.nodeOutputs) {
        // When an unexisting output number is specified, don't return anything
        return 'node.error("Cannot return to output ' + outputNumber + ', since only ' + Blockly.nodeOutputs + ' outputs available");\nreturn\n';
    }
    
    var code = 'return ';
    
    if (Blockly.nodeOutputs > 1) {
        code += '[';
    }
    
    // Return the message only to the specified output number, and null to all other outputs.
    for (var i = 1; i <= Blockly.nodeOutputs; i++) {
        if (i > 1) {
            code += ', ';
        }
        
        if (i == outputNumber) {
            code += inputValue;
        }
        else {
            code += 'null';
        }
    }
    
    if (Blockly.nodeOutputs > 1) {
        code += ']';
    }
    
    code += ';\n';
    
    return code;
};

Blockly.JavaScript['node_return'] = function(block) {
    var code = 'return;\n';
    return code;
};

Blockly.JavaScript['node_clone'] = function(block) {
    const inputValue = Blockly.JavaScript.valueToCode(block, 'OBJECT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    var code = 'RED.util.cloneMessage(' + inputValue + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_properties'] = function(block) {
    var code;

    // node.id and node.name will become available in the sandbox, starting from node-red version 0.19
    switch(block.getFieldValue('PROPERTY_NAME')) {
        case 'ID':
            code = 'node.id';
            break;
        case 'NAME':
            code = 'node.name';
            break;
    }
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC]; 
};

Blockly.JavaScript['node_status'] = function(block) {
    var code, colourName;
    
    // Convert the hex colour value to colour name
    switch(block.getFieldValue('COLOUR').toUpperCase()) {
        case '#FF0000':
            colourName = 'red';
            break;
        case '#00FF00':
            colourName = 'green';
            break;
        case '#FFFF00':
            colourName = 'yellow';
            break;
        case '#0000FF':
            colourName = 'blue';
            break;
        case '#888888':
            colourName = 'grey';
            break;
        default:
            colourName = 'blue';
    }
    
    const shape = block.getFieldValue('SHAPE').toLowerCase();
    const textValue = Blockly.JavaScript.valueToCode(block, 'TEXT_INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    
    // Remark: the ${textValue} already contains quotes
    if(!textValue || textValue === '\'\'') {
        // When the status text is empty (i.e. contains only ''), an error text will be displayed as node status by Node-RED.
        // Therefore we will consider that an empty status text, means that the node doesn't need a status.
        code = 'node.status({});\n';
    }
    else {        
        code = 'node.status({fill:"' + colourName + '", shape:"' + shape + '", text:' + textValue + '});\n';
    }
    
    return code;
};

Blockly.JavaScript['node_remove_status'] = function(block) {
    var code = 'node.status({});\n';
    return code;
};

Blockly.JavaScript['node_close'] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS') || '';

    var code = 'node.on("close", function() {\n ' + statements + '});\n';
    return code;
};

Blockly.JavaScript['node_global_memory'] = function(block) {
    var code = 'global';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_flow_memory'] = function(block) {
    var code = 'flow';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_context_memory'] = function(block) {
    var code = 'context';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
