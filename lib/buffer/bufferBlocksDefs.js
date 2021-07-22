Blockly.Blocks['buffer_from_string'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_from_string",
            "message0": Blockly.Msg.BUFFER_FROM_STRING,
            "args0": [
                {
                    "type": "input_value",
                    "name": "STRING_INPUT",
                    "check": "String"
                },
                {
                    "type": "field_dropdown",
                    "name": "ENCODING",
                    "options": [["UTF8"   , "utf8"   ], 
                                ["ASCII"  , "ascii"  ], 
                                ["UTF161E", "utf16le"], 
                                ["UCS2"   , "ucs2"   ], 
                                ["BASE64" , "base64" ],
                                ["LATIN1" , "latin1" ],
                                ["HEX"    , "hex"    ]]
                }
            ],
            "inputsInline": true,
            "output": 'Buffer',
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_to_string'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_to_string",
            "message0": Blockly.Msg.BUFFER_TO_STRING,
            "args0": [
                {
                    "type": "input_value",
                    "name": "BUFFER_INPUT",
                    "check": "Buffer"
                },
                {
                    "type": "field_dropdown",
                    "name": "ENCODING",
                    "options": [["UTF8"   , "utf8"   ], 
                                ["ASCII"  , "ascii"  ], 
                                ["UTF161E", "utf16le"], 
                                ["UCS2"   , "ucs2"   ], 
                                ["BASE64" , "base64" ],
                                ["LATIN1" , "latin1" ],
                                ["HEX"    , "hex"    ]]
                }
            ],
            "inputsInline": true,
            "output": 'String',
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_TO_STRING_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_length'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_length",
            "message0": Blockly.Msg.BUFFER_LENGTH,
            "args0": [
                {
                    "type": "input_value",
                    "name": "BUFFER_INPUT",
                    "check": "Buffer"
                }
            ],
            "inputsInline": true,
            "output": 'Number',
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_LENGTH_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_alloc'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_alloc",
            "message0": Blockly.Msg.BUFFER_ALLOC,
            "args0": [
                {
                    "type": "input_value",
                    "name": "LENGTH",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": 'Buffer',
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_ALLOC_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_fill'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_fill",
            "message0": Blockly.Msg.BUFFER_FILL,
            "args0": [
                {
                    "type": "input_value",
                    "name": "BUFFER_INPUT",
                    "check": "Buffer"
                },
                {
                    "type": "input_value",
                    "name": "FILL_VALUE",
                    "check": ["String", "Buffer", "Number"]
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_FILL_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_check'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_check",
            "message0": Blockly.Msg.BUFFER_CHECK,
            "args0": [
                {
                    "type": "input_value",
                    "name": "INPUT"
                }
            ],
            "inputsInline": true,
            "output": 'Boolean',
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_CHECK_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_copy'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_copy",
            "message0": Blockly.Msg.BUFFER_COPY,
            "args0": [
                {
                    "type": "input_value",
                    "name": "BUFFER_SOURCE",
                    "check": "Buffer"
                },
                {
                    "type": "input_value",
                    "name": "BUFFER_DESTINATION",
                    "check": "Buffer"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_COPY_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_concatenate'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_concatenate",
            "message0": Blockly.Msg.BUFFER_CONCATENATE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "BUFFER_FIRST",
                    "check": "Buffer"
                },
                {
                    "type": "input_value",
                    "name": "BUFFER_SECOND",
                    "check": "Buffer"
                }
            ],
            "inputsInline": true,
            "output": 'Buffer',
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_CONCATENATE_TOOLTIP,
            "helpUrl": null
        });
    }
};

// TODO check in generator if byte value is between 0 and 255
Blockly.Blocks['buffer_set_index'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_set_index",
            "message0": Blockly.Msg.BUFFER_SET_INDEX,
            "args0": [
                {
                    "type": "input_value",
                    "name": "INDEX",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "BUFFER",
                    "check": "Buffer"
                },
                {
                    "type": "input_value",
                    "name": "VALUE",
                    "check": ["Number", "String", "Buffer"]
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_SET_INDEX_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_get_index'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_get_index",
            "message0": Blockly.Msg.BUFFER_GET_INDEX,
            "args0": [
                {
                    "type": "input_value",
                    "name": "INDEX",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "BUFFER",
                    "check": "Buffer"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_byte'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_byte",
            "message0": Blockly.Msg.BUFFER_BYTE,
            "args0": [
                {
                    "type": "field_number",
                    "name": "BYTE_VALUE",
                    "precision": 1,
                    "min": 0,
                    "max": 255
                }
            ],
            "inputsInline": true,
            "output": 'Buffer',
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_BYTE_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['buffer_empty'] = {
    init: function () {
        this.jsonInit({
            "type": "buffer_empty",
            "message0": Blockly.Msg.BUFFER_EMPTY,
            "output": 'Buffer',
            "colour": "#DF6C06",
            "tooltip": Blockly.Msg.BUFFER_EMPTY_TOOLTIP,
            "helpUrl": null
        });
    }
};
