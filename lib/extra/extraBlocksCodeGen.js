// =====================================================================================
// The timer blocks will NOT be public available yet in version 1.0.0
// =====================================================================================
Blockly.JavaScript['timer_counting'] = function(block) {
    const count = block.getFieldValue('COUNT');
    const interval = block.getFieldValue('INTERVAL') * 1000; // milliseconds
    const statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  
    // Generate unique variable names
    var i = 'i_' + Math.random().toString(36).substr(2, 16);
    var timerId = 'timerId_' + Math.random().toString(36).substr(2, 16);
  
    var code = 'var ' + i + ' = 0;\nvar ' + timerId + ' = setInterval(function() {\n' + statements + '\n  if(++' + i + ' === ' + count + ') {\n    clearInterval(' + timerId + ');\n  }\n}, ' + interval + ');';
    return code;
};

Blockly.JavaScript['timer_conditional'] = function(block) {
    const interval = block.getFieldValue('INTERVAL') * 1000; // milliseconds
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS') || '';
  
    // Generate unique variable name
    var timerId = 'timerId_' + Math.random().toString(36).substr(2, 16);
  
    var code = 'var ' + timerId + ' = setInterval(function() {\n' + statements + '\n  if(' + condition + ') {\n    clearInterval(' + timerId + ');\n  }\n}, ' + interval + ');\n';
    return code;
};

Blockly.JavaScript['list_push'] = function(block) {
    var code;

    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '\'\'';
    const list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_MEMBER) || '[]';
    
    code = list + '.push(' + value + ');\n';   
    return code;
};

Blockly.JavaScript['list_pop'] = function(block) {
    var code;

    const list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_MEMBER) || '[]';
    
    code = list + '.pop();\n';   
    return code;
};

// =====================================================================================
// The code for the SWITCH block has been copied from the Blockly forum.
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

	const switchVariable = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || null;
    
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
