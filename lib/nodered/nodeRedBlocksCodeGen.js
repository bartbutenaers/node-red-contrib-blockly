Blockly.JavaScript['node_log'] = function(block) {
    var code;

    // Get the input string
    var inputValue = Blockly.JavaScript.valueToCode(block, 'LOG_MESSAGE_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    
    // The 'warn' and 'error' also get sent to the flow editor debug tab (in contradiction to 'log').
    // For finer grained logging 'trace' and 'debug' are only visible, when a logger is configured to show those levels.
   switch(block.getFieldValue('LOG_LEVEL')) {
        case 'LOG':
            code = `node.log(${inputValue});`;
            break;
        case 'WARN':
            code = `node.warn(${inputValue});`;
            break;
        case 'ERR':
            code = `node.error(${inputValue});`;
            break;
        case 'DEBUG':
            code = `node.debug(${inputValue});`;
            break;
        case 'TRACE':
            code = `node.trace(${inputValue});`;                           
            break;
    }
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['node_msg'] = function(block) {
    var code = `msg`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_send'] = function(block) {
    var outputNumber = block.getFieldValue('OUTPUT_NR') || 1;
    
    if (!Blockly.nodeOutputs || outputNumber > Blockly.nodeOutputs) {
        console.log("Cannot generate javascript code for the node_send block, due to unexisting output number");
        // When an unexisting output number is specified, don't send anything
        return [ ``, Blockly.JavaScript.ORDER_NONE];
    }

    // Get the input object
    var inputValue = Blockly.JavaScript.valueToCode(block, 'MESSAGE_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    var code = `node.send(`;
    
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
    
    code += `);`;
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['node_clone'] = function(block) {
    // Get the input object
    var inputValue = Blockly.JavaScript.valueToCode(block, 'OBJECT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    var code = `RED.util.cloneMessage(${inputValue});`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_context_get'] = function(block) {
    var code;
    
    var fieldName = block.getFieldValue('FIELD_NAME');
    
    switch(block.getFieldValue('CONTEXT')) {
        case 'NODE':
            code = `context.get('${fieldName}');`;
            break;
        case 'FLOW':
            code = `flow.get('${fieldName}');`;
            break;
        case 'GLOBAL':
            code = `global.get('${fieldName}');`;
            break;
    }
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['node_context_set'] = function(block) {
    var code;
    
    var fieldName = block.getFieldValue('FIELD_NAME');
    
    // Get the input object
    var inputValue = Blockly.JavaScript.valueToCode(block, 'OBJECT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
    
    switch(block.getFieldValue('CONTEXT')) {
        case 'NODE':
            code = `context.set('${fieldName}', '${inputValue}');`;
            break;
        case 'FLOW':
            code = `flow.set('${fieldName}', '${inputValue}');`;
            break;
        case 'GLOBAL':
            code = `global.get('${fieldName}', '${inputValue}'});`;
            break;
    }
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['node_context_keys'] = function(block) {
    var code;
    
    switch(block.getFieldValue('CONTEXT')) {
        case 'NODE':
            code = `context.keys();`;
            break;
        case 'FLOW':
            code = `flow.keys();`;
            break;
        case 'GLOBAL':
            code = `global.keys();`;
            break;
    }
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
            colourName = 'orange';
            break;
        case '#0000ff':
            colourName = 'blue';
            break;
        case '#888888':
            colourName = 'grey';
            break;
    }
    
    var shape = block.getFieldValue('SHAPE').toLowerCase();
    
    // Get the input string
    var inputValue = Blockly.JavaScript.valueToCode(block, 'OBJECT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    
    // Remark: the ${inputValue} already contains quotes
    code = `node.status({fill:'${colourName}', shape:'${shape}', text:${inputValue}});`;  
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};