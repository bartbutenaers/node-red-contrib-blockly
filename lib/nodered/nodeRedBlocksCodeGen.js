Blockly.JavaScript['node_log'] = function(block) {
    var code;

    // Get the input string
    var inputValue = Blockly.JavaScript.valueToCode(block, 'LOG_MESSAGE_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    
    // The 'warn' and 'error' also get sent to the flow editor debug tab (in contradiction to 'log').
    // For finer grained logging 'trace' and 'debug' are only visible, when a logger is configured to show those levels.
   switch(block.getFieldValue('LOG_LEVEL')) {
        case 'LOG':
            code = `node.log(${inputValue});\n`;
            break;
        case 'WARN':
            code = `node.warn(${inputValue});\n`;
            break;
        case 'ERR':
            code = `node.error(${inputValue});\n`;
            break;
        case 'DEBUG':
            code = `node.debug(${inputValue});\n`;
            break;
        case 'TRACE':
            code = `node.trace(${inputValue});\n`;                           
            break;
    }
    
    return code;
};

Blockly.JavaScript['node_msg'] = function(block) {
    var code = `msg`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_send'] = function(block) {
    // Get the input output-port-number
    var outputNumber = Blockly.JavaScript.valueToCode(block, 'OUT_NR_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || 1;
    
    if (!Blockly.nodeOutputs || outputNumber > Blockly.nodeOutputs) {
        console.log("Cannot generate javascript code for the node_send block, due to unexisting output number");
        // When an unexisting output number is specified, don't send anything
        return `node.error("Cannot send to output ${outputNumber}, since only ${Blockly.nodeOutputs} outputs available");\n`;
    }

    // Get the input object
    var inputValue = Blockly.JavaScript.valueToCode(block, 'MESSAGE_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    var code = `node.send([`;
    
    // Send the message only to the specified output number, and null to all other outputs.
    // TODO We could create a node_send node with as much inputs as node outputs.
    for (var i = 1; i <= Blockly.nodeOutputs; i++) {
        if (i > 1) {
            code += `, `;
        }
        
        if (i == outputNumber) {
            code += `${inputValue}`;
        }
        else {
            code += `null`;
        }
    }
    
    code += `]);\n`;
    
    return code;
};

Blockly.JavaScript['node_clone'] = function(block) {
    // Get the input object
    var inputValue = Blockly.JavaScript.valueToCode(block, 'OBJECT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    var code = `RED.util.cloneMessage(${inputValue})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['node_properties'] = function(block) {
    var code;

    // node.id and node.name will become available in the sandbox, starting from node-red version 0.19
    switch(block.getFieldValue('PROPERTY_NAME')) {
        case 'ID':
            code = `node.id`;
            break;
        case 'NAME':
            code = `node.name`;
            break;
    }
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC]; 
};

Blockly.JavaScript['node_status'] = function(block) {
    var code, colourName;
    
    // Convert the hex colour value to colour name
    switch(block.getFieldValue('COLOUR')) {
        case '#ff0000':
            colourName = 'red';
            break;
        case '#00ff00':
            colourName = 'green';
            break;
        case '#ffaa00':
            colourName = 'yellow';
            break;
        case '#0000ff':
            colourName = 'blue';
            break;
        case '#888888':
            colourName = 'grey';
            break;
        default:
            colourName = 'blue';
    }
    
    var shape = block.getFieldValue('SHAPE').toLowerCase();
    
    // Get the input string
    var inputValue = Blockly.JavaScript.valueToCode(block, 'OBJECT_INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    
    // Remark: the ${inputValue} already contains quotes
    if(!inputValue || inputValue === '\'\'') {
        // When the status text is empty (i.e. contains only ''), an error text will be displayed as node status by Node-RED.
        // Therefore we will consider that an empty status text, means that the node doesn't need a status.
        code = `node.status({});\n`;
    }
    else {        
        code = `node.status({fill:'${colourName}', shape:'${shape}', text:${inputValue}});\n`;
    }
    
    return code;
};

Blockly.JavaScript['node_close'] = function(block) {
    var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS') || '';

    var code = `node.on('close', function() {\n ${statements}});\n`;
    return code;
};

Blockly.JavaScript['node_return'] = function(block) {
    // Get the input object
    var inputValue = Blockly.JavaScript.valueToCode(block, 'MESSAGE_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    var code = `return ${inputValue};\n`;
    
    return code;
};

Blockly.JavaScript['node_global_memory'] = function(block) {
    var code = `global`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_flow_memory'] = function(block) {
    var code = `flow`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_context_memory'] = function(block) {
    var code = `context`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
