// =====================================================================================
// Blocks for the 'varia' category
// =====================================================================================

Blockly.JavaScript['bas_javascript'] = function(block) {
    var statement = Blockly.JavaScript.valueToCode(block, 'STATEMENT', Blockly.JavaScript.ORDER_ATOMIC);

    // Remove the quotes at the start and the end of the fieldName
    statement = statement.replace(/^'(.*)'$/, '$1');

    // When the Javascript code contains a ' that will be escaped automatically by \'
    // Unescape the ' again by removing the \ before the '
    statement = statement.replace(/\\'/g, "'");

    const code = statement + ';' + "\n";
    return code;
};

Blockly.JavaScript['bas_jsexpress'] = function(block) {
    // Created for creating flexible input block with JS expressions
    var jse = Blockly.JavaScript.valueToCode(block, 'STATEMENT', Blockly.JavaScript.ORDER_ATOMIC);

    // Remove the quotes at the start and the end of the fieldName
    jse = jse.replace(/^'(.*)'$/, '$1');

    // When the Javascript code contains a ' that will be escaped automatically by \'
    // Unescape the ' again by removing the \ before the '
    jse = jse.replace(/\\'/g, "'");

    // Removed ';' + "\n"
    const code = jse;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

