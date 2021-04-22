// =====================================================================================
// Blocks for the 'BAS Control' category
// =====================================================================================

Blockly.Blocks['bas_misc_comment'] = {
    // Text value.
    init: function() {
        this.jsonInit({
            "type": "misc_comment",
            "message0": Blockly.Msg.MISC_COMMENT,
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#88A705",
            "tooltip": Blockly.Msg.MISC_COMMENT_TOOLTIP,
            "helpUrl": ""
        });
    }
};

Blockly.Blocks['bas_javascript'] = {
    // Text value.
    init: function() {
        this.jsonInit({
            "type": "bas_javascript",
            "message0": Blockly.Msg.MISC_JAVASCRIPT,
            "args0": [
                {
                    "type": "input_value",
                    "name": "STATEMENT"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#88A705",
            "tooltip": Blockly.Msg.MISC_JAVASCRIPT_TOOLTIP,
            "helpUrl": ""
        });
    }
};

Blockly.Blocks['bas_jsexpress'] = {
    // Text value.
    init: function() {
        this.jsonInit({
            "type": "bas_jsexpress",
            "message0": Blockly.Msg.MISC_JSEXPRESS,
            "args0": [
                {
                    "type": "input_value",
                    "name": "STATEMENT"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": "#88A705",
            "tooltip": Blockly.Msg.MISC_JSEXPRESS_TOOLTIP,
            "helpUrl": ""
        });
    }
};


