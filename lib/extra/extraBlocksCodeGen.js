Blockly.JavaScript['setintervalwithcount'] = function(block) {
    var count = block.getFieldValue('COUNT');
    var interval = block.getFieldValue('INTERVAL') * 1000; // milliseconds
    var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  
    // Generate unique variable names
    var i = 'i_' + Math.random().toString(36).substr(2, 16);
    var timerId = 'timerId_' + Math.random().toString(36).substr(2, 16);
  
    var code = `var ${i} = 0;\nvar ${timerId} = setInterval(function() {\n ${statements}\n\tif(++${i} === ${count}) {\n\t\tclearInterval(${timerId});\n\t}\n}, ${interval});\n`;
    return code;
};

Blockly.JavaScript['setintervalwithcondition'] = function(block) {
    var interval = block.getFieldValue('INTERVAL') * 1000; // milliseconds
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
    var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS') || '';
  
    // Generate unique variable name
    var timerId = 'timerId_' + Math.random().toString(36).substr(2, 16);
  
    var code = `var ${timerId} = setInterval(function() {\n ${statements}\n\tif(${condition}) {\n\t\tclearInterval(${timerId});\n\t}\n}, ${interval});\n`;
    return code;
};