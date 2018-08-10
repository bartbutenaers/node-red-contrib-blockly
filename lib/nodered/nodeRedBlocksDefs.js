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
            .appendField("with level")
            .appendField(new Blockly.FieldDropdown(log_levels), 'LOG_LEVEL');                          
        this.setInputsInline(false);
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
            .appendField("msg");;                            
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('get the Node-Red input message');
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
        this.setInputsInline(false);
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
        this.setInputsInline(false);
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Clone the message via the Node-Red function API');
    }
};

Blockly.Blocks['node_context_get'] = {
    init: function() {
        var contexts = [
            ["(node)context", "NODE"  ], 
            ["flow"         , "FLOW"  ], 
            ["global"       , "GLOBAL"]
        ];
        
        this.appendValueInput('PROPERTY')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("get value of")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("property");
        this.appendDummyInput()
            .appendField("on")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField(new Blockly.FieldDropdown(contexts), 'CONTEXT')
            .appendField("memory");
        this.setInputsInline(false);
        this.setOutput(true, null);  // Any type (i.e. null) can be stored on memory
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Get data from the node/flow/global context via the Node-Red function API');
    }
};

Blockly.Blocks['node_context_set'] = {
    init: function() {
        var contexts = [
            ["(node)context", "NODE"  ], 
            ["flow"         , "FLOW"  ], 
            ["global"       , "GLOBAL"]
        ];
        
        this.appendValueInput('PROPERTY')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("set value of")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("property");
        this.appendDummyInput()
            .appendField("on")
            .appendField(new Blockly.FieldDropdown(contexts), 'CONTEXT')
            .appendField("memory");
        this.appendValueInput("OBJECT_INPUT")
            .setCheck(null)  // Any type (i.e. null) can be stored on memory
            .appendField("to")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#BB8FCE");
        this.setTooltip('Set data to the node/flow/global context via the Node-Red function API');
    }
};

Blockly.Blocks['node_context_keys'] = {
    init: function() {
        var contexts = [
            ["(node)context"  , "NODE"  ], 
            ["flow"           , "FLOW"  ], 
            ["global"         , "GLOBAL"]
        ];
        
        this.appendDummyInput()
            .appendField("Get keys from")  
            .appendField(new Blockly.FieldDropdown(contexts), 'CONTEXT')
            .appendField("memory"); 
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#BB8FCE");
        this.setTooltip('Get all keys from the node/flow/global context via the Node-Red function API');
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
        colourField.setColours(['#ff0000', '#00ff00', '#ffaa00', '#0000ff', '#888888']).setColumns(3);
        
        this.appendValueInput("OBJECT_INPUT")
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
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#BB8FCE");
        this.setTooltip('Set the node status via the Node-Red function API');
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
            .appendField('return and send');               
        this.setInputsInline(false);
        this.setOutput(false);
        this.setNextStatement(false);
        this.setPreviousStatement(true);
        this.setColour("#BB8FCE");
        this.setTooltip('Send output message and return to stop processing');
    }
};
