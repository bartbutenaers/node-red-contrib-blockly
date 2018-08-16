// =====================================================================================
// This EXTRA library contains blocks that I wanted to add to existing Blockly 
// categories (offered by Google).  This way we can upgrade Blockly to a new
// version, without loosing our changes.
// =====================================================================================

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
        //this.appendStatementInput("AFTER_LOOP")
        //    .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EB984E");
        this.setTooltip("Is this tooltip sufficient for Julian Knight ???");
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

// =====================================================================================
// The code for the SWITCH block has been copied from the Blockly forum.
// See https://groups.google.com/forum/#!topic/blockly/djhO2jUb0Xs
// Changed some minor things:
// - Changed the text 'the case is' to 'input value'.
// =====================================================================================

Blockly.Blocks['switch_case'] = {
  init: function() {
    this.setColour("#5C81A6");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendValueInput('CONDITION')
        .appendField('input value');
    this.appendValueInput('CASECONDITION0')
        .appendField('in case of');
    this.appendStatementInput('CASE0')
        .appendField('do');
    this.setMutator(new Blockly.Mutator(['case_incaseof','case_default']));
    this.setTooltip('Does something if the condition is true. If there isn\'t a matching case the default function will be executed.');
    this.caseCount_ = 0;
    this.defaultCount_ = 0;
  },

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
            .appendField('in case of');
        this.appendStatementInput('CASE' + x)
            .appendField('do');
    }
    if (this.defaultCount_) {
        this.appendStatementInput('ONDEFAULT')
            .appendField('default');
    }
  },

  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'control_case');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 1; x <= this.caseCount_; x++) {
        var caseBlock = Blockly.Block.obtain(workspace, 'case_incaseof');
        caseBlock.initSvg();
        connection.connect(caseBlock.previousConnection);
        connection = caseBlock.nextConnection;
    }
    if(this.defaultCount_) {
        var defaultBlock = Blockly.Block.obtain(workspace, 'case_default');
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
                                             .appendField('in case of');   
                var caseInput = this.appendStatementInput('CASE' + this.caseCount_)
                                    .appendField('do');
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
                                       .appendField('default');
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

Blockly.Blocks['control_case'] = {
  init: function() {
    this.setColour("#5C81A6");
    this.appendDummyInput()
        .appendField('the case is');
    this.appendStatementInput('STACK');
    this.setTooltip('--Placeholder--');
    this.contextMenu = false;
  }
};

Blockly.Blocks['case_incaseof'] = {
  init: function() {
    this.setColour("#5C81A6");
    this.appendDummyInput()
        .appendField('in case of');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('--Placeholder--');
    this.contextMenu = false;
  }
};

Blockly.Blocks['case_default'] = {
  init: function() {
      this.setColour(180);
      this.appendDummyInput()
          .appendField('default');
      this.setPreviousStatement(true);
      this.setNextStatement(false);
      this.setTooltip('This function will run if there aren\'t any matching cases.');
      this.contextMenu = false;
  }
};
