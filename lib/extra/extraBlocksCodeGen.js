Blockly.JavaScript['setintervalwithcount'] = function(block) {
    var count = block.getFieldValue('COUNT');
    var interval = block.getFieldValue('INTERVAL') * 1000; // milliseconds
    var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  
    // Generate unique variable names
    var i = 'i_' + Math.random().toString(36).substr(2, 16);
    var timerId = 'timerId_' + Math.random().toString(36).substr(2, 16);
  
    var code = `var ${i} = 0;\nvar ${timerId} = setInterval(function() {\n ${statements}\n\tif(++${i} === ${count}) {\n\t\tclearInterval(${timerId});\n\t}\n}, ${interval});`;
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

// =====================================================================================
// The code for the switch block has been copied from the Blockly forum.
// See https://groups.google.com/forum/#!topic/blockly/djhO2jUb0Xs
// Changed some minor things:
// - Removed the variable name test, because e.g. msg is not allowed otherwise.
// - The /t before 'case' and 'default' is replaced by two tabs.
// - The \n\t\t before 'break' is replaced by four tabs.
// - Two spaces are added before the do_0 and do_n (which already contain two spaces)
// =====================================================================================

Blockly.JavaScript['switch_case'] = function(block) {
	var code = '';
	var do_n;
	var case_n;

	var switchVariable = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || null;
	if (switchVariable){
        code = '\nswitch (' + switchVariable + '){\n';
        var case_0 = Blockly.JavaScript.valueToCode(block, 'CASECONDITION0', Blockly.JavaScript.ORDER_NONE) || null;
        var do_0 = Blockly.JavaScript.statementToCode(block, 'CASE0');
        code += '  case ' + case_0 + ':\n  ' + do_0 + '    break;\n';
        
        for (var n = 1; n <= block.caseCount_; n++) {
            case_n = Blockly.JavaScript.valueToCode(block, 'CASECONDITION' + n,
                Blockly.JavaScript.ORDER_NONE) || null;
            if (case_n){
                do_n = Blockly.JavaScript.statementToCode(block, 'CASE' + n);
                code += '  case ' + case_n + ':\n  ' + do_n + '    break;\n';
            }
        }
        if (block.defaultCount_) {
            do_n = Blockly.JavaScript.statementToCode(block, 'ONDEFAULT');
            code += '  default:\n  ' + do_n + '    break;\n';
        }
        code += '}\n';
	}
	return code;
};
