// =====================================================================================
// This EXTRA library contains blocks that needs to be added to existing Blockly 
// categories (offered by Google).  This way we can upgrade Blockly to a new
// version, without loosing our changes.
// =====================================================================================

Blockly.Blocks['timer_counting'] = {
    init: function () {
        this.jsonInit({
            "type": "timer_counting",
            "message0": Blockly.Msg.TIMER_CONDITIONAL,
            "args0": [
                {
                    "type": "field_number",
                    "name": "COUNT",
                    "value": 0,
                    "min": 0,
                    "precision": 1
                },
                {
                    "type": "field_number",
                    "name": "INTERVAL",
                    "value": 0,
                    "min": 0,
                    "precision": 0.01
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "STATEMENTS"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#EB984E",
            "tooltip": Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP,
            "helpUrl": ""
        });
    }
};

Blockly.Blocks['timer_conditional'] = {
    init: function () {
        this.jsonInit({
            "type": "timer_conditional",
            "message0": Blockly.Msg.TIMER_CONDITIONAL,
            "args0": [
                {
                    "type": "field_number",
                    "name": "INTERVAL",
                    "value": 0,
                    "min": 0,
                    "precision": 0.01
                },
                {
                    "type": "input_value",
                    "name": "CONDITION",
                    "check": "Boolean"
                },
                {
                    "type": "input_statement",
                    "name": "STATEMENTS"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#EB984E",
            "tooltip": Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP,
            "helpUrl": ""
        });
    }
};

// =====================================================================================
// Blocks for the 'text' category
// =====================================================================================

// See https://groups.google.com/forum/#!topic/blockly/1g2rfcgm-aM
Blockly.Blocks['text_special_character'] = {
    init: function () {
        this.jsonInit({
            "type": "text_special_character",
            "message0": Blockly.Msg.TEXT_SPECIAL_CHARACTER,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "CHARACTER",
                    "options": [[Blockly.Msg.TEXT_SPECIAL_CHARACTER_LF  , "\\n"   ],
                                [Blockly.Msg.TEXT_SPECIAL_CHARACTER_CR  , "\\r"   ],
                                [Blockly.Msg.TEXT_SPECIAL_CHARACTER_CRLF, "\\r\\n"],
                                [Blockly.Msg.TEXT_SPECIAL_CHARACTER_TAB , "\\t"   ]] 
                }
            ],
            "output": "String",
            "colour": "#5CA68D",
            "tooltip": Blockly.Msg.TEXT_SPECIAL_CHARACTER_TOOLTIP,
            "helpUrl": ""
        });
    }
};

// =====================================================================================
// Blocks for the 'varia' category
// =====================================================================================

Blockly.Blocks['misc_comment'] = {
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

Blockly.Blocks['misc_javascript'] = {
    // Text value.
    init: function() {
        this.jsonInit({
            "type": "misc_javascript",
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

Blockly.Blocks['misc_jsmultiline'] = {
    // Text value.
    init: function() {
        this.jsonInit({
            "type": "misc_jsmultiline",
            "message0": Blockly.Msg.MISC_JSMULTILINE,
            "args0": [
                {
                    "type": "field_multilinetext",
                    "name": "STATEMENT",
                    "text": "",
                    "spellcheck": false
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#88A705",
            "tooltip": Blockly.Msg.MISC_JSMULTILINE_TOOLTIP,
            "helpUrl": ""
        });
    }
};

Blockly.Blocks['misc_jsexpress'] = {
    // Text value.
    init: function() {
        this.jsonInit({
            "type": "misc_jsexpress",
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

// =====================================================================================
// The code for the SWITCH block has been copied from the Blockly forum and changed.
// See https://groups.google.com/forum/#!topic/blockly/djhO2jUb0Xs
// =====================================================================================

Blockly.Blocks['switch_case'] = {
    init: function() {
        
        this.jsonInit({
            "type": "switch_case",
            "message0": Blockly.Msg.SWITCH,
            "args0": [
                {
                    "type": "input_value",
                    "name": "CONDITION"
                },
                {
                    "type": "input_value",
                    "name": "CASECONDITION0"
                },
                {
                    "type": "input_statement",
                    "name": "CASE0"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "mutator": "switch_case_mutator", 
            "colour": "#5C81A6",
            "tooltip": Blockly.Msg.SWITCH_TOOLTIP,
            "helpUrl": null
        });
            
        this.caseCount_ = 0;
        this.defaultCount_ = 0;
    }
};

var switchCaseMutator = {
  mutationToDom: function() {
    if(!this.caseCount_ && !this.defaultCount_) {
        return null;
    }
    var container = document.createElement('mutation');
    if (this.caseCount_) {
        container.setAttribute('case', this.caseCount_);
    }
    if (this.defaultCount_) {
        container.setAttribute('default', 1);
    }
    return container;
  },

  domToMutation: function(xmlElement) {
    this.caseCount_ = parseInt(xmlElement.getAttribute('case'), 10);
    this.defaultCount_ = parseInt(xmlElement.getAttribute('default'), 10);
    for (var x = 1; x <= this.caseCount_; x++) {
        this.appendValueInput('CASECONDITION' + x)
            .appendField(Blockly.Msg.SWITCH_CASE_LIST);
        this.appendStatementInput('CASE' + x)
            .appendField(Blockly.Msg.SWITCH_DO);
    }
    if (this.defaultCount_) {
        this.appendStatementInput('ONDEFAULT')
            .appendField(Blockly.Msg.SWITCH_DEFAULT);
    }
  },

  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('control_case');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 1; x <= this.caseCount_; x++) {
        var caseBlock = workspace.newBlock('case_incaseof');
        caseBlock.initSvg();
        connection.connect(caseBlock.previousConnection);
        connection = caseBlock.nextConnection;
    }
    if(this.defaultCount_) {
        var defaultBlock = workspace.newBlock('case_default');
        defaultBlock.initSvg();
        connection.connect(defaultBlock.previousConnection);
    }
    return containerBlock;
  },

  compose: function(containerBlock) {
    //Disconnect all input blocks and remove all inputs.
    if (this.defaultCount_) {
        this.removeInput('ONDEFAULT');
    }
    this.defaultCount_ = 0;
    for (var x = this.caseCount_; x > 0; x--) {
        this.removeInput('CASECONDITION' + x);
        this.removeInput('CASE' + x);
    }
    this.caseCount_ = 0;
    var caseBlock = containerBlock.getInputTargetBlock('STACK');
    while (caseBlock) {
        switch(caseBlock.type) {
            case 'case_incaseof':
                this.caseCount_++;
                var caseconditionInput = this.appendValueInput('CASECONDITION' + this.caseCount_)
                                             .appendField(Blockly.Msg.SWITCH_CASE_LIST);   
                var caseInput = this.appendStatementInput('CASE' + this.caseCount_)
                                    .appendField(Blockly.Msg.SWITCH_DO);
                if (caseBlock.valueConnection_) {
                    caseconditionInput.connection.connect(caseBlock.valueConnection_);
                }
                if (caseBlock.statementConnection_) {
                    caseInput.connection.connect(caseBlock.statementConnection_);
                }
                break;
            case 'case_default':
                this.defaultCount_++;
                var defaultInput = this.appendStatementInput('ONDEFAULT')
                                       .appendField(Blockly.Msg.SWITCH_DEFAULT);
                if(caseBlock.statementConnection_) {
                    defaultInput.connection.connect(caseBlock.statementConnection_);
                }
                break;
            default:
                throw 'Unknown block type.';
        }
        caseBlock = caseBlock.nextConnection &&
                  caseBlock.nextConnection.targetBlock();
    }
  },

  saveConnections: function(containerBlock) {
    var caseBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 1;
    while (caseBlock) {
        switch (caseBlock.type) {
            case'case_incaseof':
                var caseconditionInput = this.getInput('CASECONDITION' + x);  
                var caseInput = this.getInput('CASE' + x);
                caseBlock.valueConnection_ = caseconditionInput && caseconditionInput.connection.targetConnection;
                caseBlock.statementConnection_ = caseInput && caseInput.connection.targetConnection;
                x++;
                break;
            case'case_default':
                var defaultInput = this.getInput('ONDEFAULT');
                caseBlock.satementConnection_ = defaultInput && defaultInput.connection.targetConnection;
                break;
            default:
                throw 'Unknown block type';
        }
        caseBlock = caseBlock.nextConnection &&
                    caseBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Extensions.registerMutator('switch_case_mutator', switchCaseMutator, null, ['case_incaseof', 'case_default']);

// Internally used in SWITCH_CASE block mutator (so not available in the toolbox)
Blockly.Blocks['control_case'] = {
    init: function () {
        this.jsonInit({
            "type": "control_case",
            "message0": Blockly.Msg.SWITCH_CASE,
            "args0": [
                {
                    "type": "input_statement",
                    "name": "STACK"
                }
            ],
            "colour": "#5C81A6",
            "tooltip": Blockly.Msg.SWITCH_CASE_TOOLTIP,
            "helpUrl": ""
        });
        this.contextMenu = false;
    }
};

// Internally used in SWITCH_CASE block mutator (so not available in the toolbox)
Blockly.Blocks['case_incaseof'] = {
    init: function () {
        this.jsonInit({
            "type": "case_incaseof",
            "message0": Blockly.Msg.SWITCH_CASE_LIST,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#5C81A6",
            "tooltip": Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP,
            "helpUrl": ""
        });
        this.contextMenu = false;
    }
};

// Internally used in SWITCH_CASE block mutator (so not available in the toolbox)
Blockly.Blocks['case_default'] = {
    init: function () {
        this.jsonInit({
            "type": "case_default",
            "message0": Blockly.Msg.SWITCH_DEFAULT,
            "previousStatement": null,
            "colour": "#5C81A6",
            "tooltip": Blockly.Msg.SWITCH_DEFAULT_TOOLTIP,
            "helpUrl": ""
        });
        this.contextMenu = false;
    }
};
