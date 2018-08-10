Blockly.Blocks['buffer_from_string'] = {
    init: function() {
        // Available string encodings in NodeJs (default is utf8)
        var encodings = [
            ["UTF8"   , "utf8"   ], 
            ["ASCII"  , "ascii"  ], 
            ["UTF161E", "utf16le"], 
            ["UCS2"   , "ucs2"   ], 
            ["BASE64" , "base64" ],
            ["LATIN1" , "latin1" ],
            ["HEX"    , "hex"    ]            
        ];
        this.appendValueInput("STRING_INPUT")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('generate buffer from string');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("with encoding")
            .appendField(new Blockly.FieldDropdown(encodings), 'ENCODING'); 
        this.setInputsInline(false);            
        this.setOutput(true, 'Buffer');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#DF6C06");
        this.setTooltip('Generate a buffer from a string');
    }
};

Blockly.Blocks['buffer_to_string'] = {
    init: function() {
        // Available string encodings in NodeJs (default is utf8)
        var encodings = [
            ["UTF8"   , "utf8"   ], 
            ["ASCII"  , "ascii"  ], 
            ["UTF161E", "utf16le"], 
            ["UCS2"   , "ucs2"   ], 
            ["BASE64" , "base64" ],
            ["LATIN1" , "latin1" ],
            ["HEX"    , "hex"    ]             
        ];
        this.appendValueInput("BUFFER_INPUT")
            .setCheck("Buffer")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('generate string from buffer');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("with encoding")
            .appendField(new Blockly.FieldDropdown(encodings), 'ENCODING');   
        this.setInputsInline(false);            
        this.setOutput(true, 'String');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#DF6C06");
        this.setTooltip('Convert a buffer to a string');
    }
};

Blockly.Blocks['buffer_length'] = {
    init: function() {
        this.appendValueInput("BUFFER_INPUT")
            .setCheck("Buffer")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('get length of buffer');   
        this.setInputsInline(false);            
        this.setOutput(true, 'Number');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#DF6C06");
        this.setTooltip('Get the buffer length in bytes');
    }
};

Blockly.Blocks['buffer_alloc'] = {
    init: function() {
        this.appendValueInput("LENGTH")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('create buffer with length');   
        this.setInputsInline(false);            
        this.setOutput(true, 'Buffer');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#DF6C06");
        this.setTooltip('Create a buffer with the specified length');
    }
};

Blockly.Blocks['buffer_fill'] = {
    init: function() {
        this.appendValueInput("BUFFER_INPUT")
            .setCheck("Buffer")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('fill buffer');
        this.appendValueInput("FILL_VALUE")
            .setCheck(["String", "Buffer", "Number"])
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('with value');   
        this.setInputsInline(false);            
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#DF6C06");
        this.setTooltip('Create a buffer with the specified length');
    }
};

Blockly.Blocks['buffer_check'] = {
    init: function() {
        this.appendValueInput("INPUT")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('check if buffer'); 
        this.setInputsInline(false);            
        this.setOutput(true, 'Boolean');
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#DF6C06");
        this.setTooltip('Check if the input value is a buffer');
    }
};

Blockly.Blocks['buffer_copy'] = {
    init: function() {
        this.appendValueInput("BUFFER_SOURCE")
            .setCheck("Buffer")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField('copy from buffer'); 
        this.appendValueInput("BUFFER_DESTINATION")
            .setCheck("Buffer")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('to buffer');
        this.setInputsInline(false);            
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#DF6C06");
        this.setTooltip('Copy from the first buffer to the second buffer');
    }
};

Blockly.Blocks['buffer_set_index'] = {
    init: function() {
        this.appendValueInput('INDEX')
            .setCheck('Number')
            .appendField("set byte at index")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('BUFFER')
            .setCheck('Buffer')
            .appendField("of buffer")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("VALUE")
            .setCheck(null)  // TODO type check for any byte.  How ???
            .appendField("to value")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(false);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#DF6C06");
        this.setTooltip('Set the byte value of the specified buffer index');
    }
};

Blockly.Blocks['buffer_get_index'] = {
    init: function() {
        this.appendValueInput('INDEX')
            .setCheck('Number')
            .appendField("get byte at index")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('BUFFER')
            .setCheck('Buffer')
            .appendField("of buffer")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setColour("#DF6C06");
        this.setTooltip('Get the byte value of the specified buffer index');
    }
};
