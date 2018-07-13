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
        this.setColour(320);
        this.setTooltip('Logging via the Node-Red function API');
    }
};

Blockly.Blocks['node_msg'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("input message");;                            
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour(320);
        this.setTooltip('get the Node-Red input message');
    }
};

Blockly.Blocks['node_send'] = {
    init: function() {
        this.appendValueInput("MESSAGE_INPUT")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('send')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('message');        
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('to output')
            .appendField(new Blockly.FieldNumber('1'), 'OUTPUT_NR');        
        this.setInputsInline(false);
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour(320);
        this.setTooltip('Send output message via the Node-Red function API');
    }
};

Blockly.Blocks['node_clone'] = {
    init: function() {
        this.appendValueInput("OBJECT_INPUT")
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("clone")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("msg");                          
        this.setInputsInline(false);
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour(320);
        this.setTooltip('Clone the message via the Node-Red function API');
    }
};

Blockly.Blocks['node_context_get'] = {
    init: function() {
        var contexts = [
            ["node"  , "NODE"  ], 
            ["flow"  , "FLOW"  ], 
            ["global", "GLOBAL"]
        ];
        
        this.appendDummyInput()
            .appendField("get value of")
            .appendField(new Blockly.FieldTextInput('default'), 'FIELD_NAME');
        this.appendDummyInput()
            .appendField("on")
            .appendField(new Blockly.FieldDropdown(contexts), 'CONTEXT')
            .appendField("memory");
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour(320);
        this.setTooltip('Get data from the node/flow/global context via the Node-Red function API');
    }
};

Blockly.Blocks['node_context_set'] = {
    init: function() {
        var contexts = [
            ["node"  , "NODE"  ], 
            ["flow"  , "FLOW"  ], 
            ["global", "GLOBAL"]
        ];
        
        this.appendDummyInput()
            .appendField("Set value of")  
            .appendField(new Blockly.FieldTextInput('default'), 'FIELD_NAME');
         this.appendDummyInput()
            .appendField("on")
            .appendField(new Blockly.FieldDropdown(contexts), 'CONTEXT')
            .appendField("memory");
        this.appendValueInput("OBJECT_INPUT")
            .setCheck(null)
            .appendField("to")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour(320);
        this.setTooltip('Set data to the node/flow/global context via the Node-Red function API');
    }
};

Blockly.Blocks['node_context_keys'] = {
    init: function() {
        var contexts = [
            ["node"  , "NODE"  ], 
            ["flow"  , "FLOW"  ], 
            ["global", "GLOBAL"]
        ];
        
        this.appendDummyInput()
            .appendField("Get keys from")  
            .appendField(new Blockly.FieldDropdown(contexts), 'CONTEXT')
            .appendField("memory"); 
        this.setOutput(true, 'Object');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour(320);
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
            .appendField("Get node property")  
            .appendField(new Blockly.FieldDropdown(properties), 'PROPERTY_NAME'); 
        this.setOutput(true, 'String');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour(320);
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
        this.setColour(320);
        this.setTooltip('Set the node status via the Node-Red function API');
    }
};
