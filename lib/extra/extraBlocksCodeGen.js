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

// =====================================================================================
// Blocks for the 'text' category
// =====================================================================================

// See https://groups.google.com/forum/#!topic/blockly/1g2rfcgm-aM
Blockly.JavaScript['text_special_character'] = function(block) {
    const character = block.getFieldValue('CHARACTER') || '';
    
    var code = '\'' + character + '\'';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

// =====================================================================================
// Blocks for the 'varia' category
// =====================================================================================

Blockly.JavaScript['misc_comment'] = function(block) {
    var comment_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  
    // Remove the quotes at the start and the end of the fieldName
    comment_text = comment_text.replace(/^'(.*)'$/, '$1');
    
    const code = '// ' + comment_text + '\n';
    return code;
};

Blockly.JavaScript['misc_javascript'] = function(block) {
    var statement = Blockly.JavaScript.valueToCode(block, 'STATEMENT', Blockly.JavaScript.ORDER_ATOMIC);
    
    // Remove the quotes at the start and the end of the fieldName
    statement = statement.replace(/^'(.*)'$/, '$1');
	
    // When the Javascript code contains a ' that will be escaped automatically by \' 
    // Unescape the ' again by removing the \ before the '
    statement = statement.replace(/\\'/g, "'");
    
    const code = statement + ';' + "\n";
    return code;
};

Blockly.JavaScript['misc_jsmultiline'] = function(block) {
    var statement = block.getFieldValue('STATEMENT');
    const code = statement + "\n";
    return code;
};


Blockly.JavaScript['misc_jsexpress'] = function(block) {
    var jse = Blockly.JavaScript.valueToCode(block, 'STATEMENT', Blockly.JavaScript.ORDER_ATOMIC);
    
    // Remove the quotes at the start and the end of the fieldName
    jse = jse.replace(/^'(.*)'$/, '$1');
	
    // When the Javascript code contains a ' that will be escaped automatically by \' 
    // Unescape the ' again by removing the \ before the '
    jse = jse.replace(/\\'/g, "'");
    
    const code = jse;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
