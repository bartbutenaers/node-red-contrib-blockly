Blockly.Blocks['node_log'] = {
    init: function() {
        var log_levels = [
            ["log"    , "LOG"   ], 
            ["warning", "WARN"  ], 
            ["error"  , "ERR"   ], 
            ["debug"  , "DEBUG" ], 
            ["trace"  , "TRACE" ]
        ];
        this.appendValueInput("LOG_MESSAGE_INPUT")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('log')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('text');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("with")
            .appendField(new Blockly.FieldDropdown(log_levels), 'LOG_LEVEL')
            .appendField("level");            
        this.setInputsInline(true);
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#BB8FCE");
        this.setTooltip('Logging via the Node-Red function API');
    }
};

Blockly.Blocks['node_msg'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("msg");                           
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Get the Node-Red input message');
    }
};

Blockly.Blocks['node_send'] = {
    init: function() {
        this.appendValueInput("MESSAGE_INPUT")
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('send');        
        this.appendValueInput("OUT_NR_INPUT")
            .setCheck('Number')
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('to output');       
        this.setInputsInline(true);
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#BB8FCE");
        this.setTooltip('Send output message via the Node-Red function API');
    }
};

Blockly.Blocks['node_clone'] = {
    init: function() {
        this.appendValueInput("OBJECT_INPUT")
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("clone");                          
        this.setInputsInline(true);
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Clone the message via the Node-Red function API');
    }
};

Blockly.Blocks['node_properties'] = {
    init: function() {
        var properties = [
            ["identifier", "ID"  ], 
            ["name"      , "NAME"  ]
        ];
        
        this.appendDummyInput()
            .appendField("Get node")  
            .appendField(new Blockly.FieldDropdown(properties), 'PROPERTY_NAME'); 
        this.setOutput(true, 'String');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Get the specified node property via the Node-Red function API');
    }
};

Blockly.Blocks['node_status'] = {
    init: function() {        
        var shapes = [
            ["ring", "RING" ], 
            ["dot" , "DOT"  ]
        ];
        
        // Set the allowed status colours (red, green, orange, blue, grey).    
        var colourField = new Blockly.FieldColour('#00f');
        colourField.setColours(['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#888888']).setColumns(3);
        
        this.appendValueInput("TEXT_INPUT")
            .setCheck('String')
            .appendField("Set node status")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("to text");
        this.appendDummyInput()
            .appendField("with color")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(colourField, 'COLOUR');
        this.appendDummyInput()    
            .appendField("and shape")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(shapes), 'SHAPE'); 
        this.setInputsInline(true);
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#BB8FCE");
        this.setTooltip('Set the node status via the Node-Red function API');
    }
};

Blockly.Blocks['node_remove_status'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Remove node status");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#BB8FCE");
        this.setTooltip("Remove the node status via the Node-Red function API");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['node_close'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("On node closed");
        this.appendStatementInput("STATEMENTS")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#BB8FCE");
        this.setTooltip("Statements that should be executed when the node is being closed");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['node_return'] = {
    init: function() {
        this.appendValueInput("MESSAGE_INPUT")
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('return');               
        this.setInputsInline(true);
        this.setOutput(false);
        this.setNextStatement(false);
        this.setPreviousStatement(true);
        this.setColour("#BB8FCE");
        this.setTooltip('Send output message and return to stop processing');
    }
};

Blockly.Blocks['node_flow_memory'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("flow");                           
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Access the data in the Node-Red flow memory');
    }
};

Blockly.Blocks['node_context_memory'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("(node)context");                           
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Access the data in the Node-Red (node)context memory');
    }
};

Blockly.Blocks['node_global_memory'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("global");                           
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Access the data in the Node-Red global memory');
    }
};
