Blockly.Blocks['setintervalwithcount'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Repeat ")
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "COUNT")
            .appendField("times every")
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.01), "INTERVAL")
            .appendField("seconds");
        this.appendStatementInput("STATEMENTS")
            .setCheck(null);
        this.appendStatementInput("AFTER_LOOP")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EB984E");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['setintervalwithcondition'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField("Repeat every")
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.01), "INTERVAL")
            .appendField("seconds, until");
        this.appendStatementInput("STATEMENTS")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EB984E");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};