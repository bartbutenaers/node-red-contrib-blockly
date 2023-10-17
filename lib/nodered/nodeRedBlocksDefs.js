Blockly.Blocks['node_object_get'] = {
    init: function () {
        this.jsonInit({
            "type": "node_object_get",
            "message0": Blockly.Msg.NODE_OBJECT_GET_JSON,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "action",
                    "options": [[Blockly.Msg.NODE_OBJECT_GET_JSON_GET   , "GET"   ],
                                [Blockly.Msg.NODE_OBJECT_GET_JSON_HAS   , "HAS"   ],
                                [Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE, "REMOVE"]]
                },
                {
                    "type": "input_value",
                    "name": "object",
                    "check": "Object",
                    "align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "field_name",
                    "check": "String",
                    "align": "RIGHT"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": '#BB8FCE',
            "helpUrl": ""
        });
        
        // Assign 'this' to a variable for use in both callback functions below.
        var thisBlock = this;
        
        // Create a dynamic tooltip that depends on the selected action
        this.setTooltip(function() {
            const action = thisBlock.getFieldValue('action');
      
            switch (action) {
                case 'REMOVE':
                    return Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE_TOOLTIP;
                case 'HAS':
                    return Blockly.Msg.NODE_OBJECT_GET_JSON_HAS_TOOLTIP;
                default: // GET
                    return Blockly.Msg.NODE_OBJECT_GET_JSON_GET_TOOLTIP;
            }
        });
        
        // When another 'action' in the dropdown is selected, the shape of this block will need to be changed:
        // - action = 'remove' : The block should be displayed as a statement
        // - action = 'get' : The block should be displayed as a value
        this.getField('action').setValidator(function(action) {
            // Only update the shape of the block if we switch from input to statement (or the other way around).
            // Don't do the unplug if the shape doesn't need to change, otherwise Blockly will automatically detach 
            // this (value) block from any other block it was attached to.  It would also be visually moved away in the editor...
            // When the node' config screen is opened, the block shape should be immediately correct (thisBlock.previousAction is undefined).
            if (thisBlock.previousAction !== action) {
                if(thisBlock.previousAction) {
                    thisBlock.unplug(true, true);
                }
                
                switch (action) {
                    case 'REMOVE': 
                        // statement block
                        thisBlock.setOutput(false);
                        thisBlock.setPreviousStatement(true);
                        thisBlock.setNextStatement(true);
                        break;
                    case 'HAS':
                        // value block
                        thisBlock.setPreviousStatement(false);
                        thisBlock.setNextStatement(false);
                        thisBlock.setOutput(true, 'Boolean');
                        break;
                    default: // GET
                        thisBlock.setPreviousStatement(false);
                        thisBlock.setNextStatement(false);
                        thisBlock.setOutput(true); // Any type
                        break;
                }
            }
            
            thisBlock.previousAction = action;
        });
    },
    mutationToDom: function() {
        const actionDropdown = this.getField('action');
        const action = actionDropdown.getValue();

        // Store the action in a mutation element (otherwise the domToMutation is never called afterwards)
        var container = document.createElement('mutation');
        container.setAttribute('action', action);
        return container;
    },
    domToMutation: function(xmlElement) {
        const actionDropdown = this.getField('action');
        
        // Get the stored action from the mutator container element
        const action = xmlElement.getAttribute('action');
        
        // When the initial 'action' value (from the workspace XML) will be loaded into the dropdown, the 
        // dropdown validator will NOT be triggered!  So we need to call the validator ourselves for the initial value.
        // Otherwise the block shape will not be correct when the node's config screen is opened.
        actionDropdown.getValidator().call(this, action);
    },
    onchange: function() {
        if(!this.workspace.isDragging || this.workspace.isDragging()) {
            return;  // Don't change state at the start of a drag.
        }

        // Show a warning if the input is not a string literal (but e.g. a variable)
        if (this.getInputTargetBlock('field_name').type !== "text") {
            this.setWarningText(Blockly.Msg.NODE_OBJECT_GET_WARNING);
        } 
        else {
            this.setWarningText(null);
        }
    }
};

// This block has external inputs, unlike the other blocks (request of Simon Walters)
Blockly.Blocks['node_object_set'] = {
    init: function () {
        this.jsonInit({
            "type": "node_object_set",
            "message0": Blockly.Msg.NODE_OBJECT_SET_JSON,
            "args0": [
                {
                    "type": "input_value",
                    "name": "object_field",
                    "check": "Object",
                    "align": "RIGHT"
                },    
                {
                    "type": "input_value",
                    "name": "field_name",
                    "check": "String",
                    "align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "value_field",
                    "align": "RIGHT"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": '#BB8FCE',
            "tooltip": Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP,
            "helpUrl": ""
        });
    },
    onchange: function() {
        if(!this.workspace.isDragging || this.workspace.isDragging()) {
            return;  // Don't change state at the start of a drag.
        }
        
        // Show a warning if the input is not a string literal (but e.g. a variable)
        if (this.getInputTargetBlock('field_name').type !== "text") {
            this.setWarningText(Blockly.Msg.NODE_OBJECT_GET_WARNING);
        } 
        else {
            this.setWarningText(null);
        }
    }
};  

Blockly.Blocks['node_log'] = {
    init: function () {
        this.jsonInit({
            "type": "node_log",
            "message0": Blockly.Msg.NODE_LOG,
            "args0": [
                {
                    "type": "input_value",
                    "name": "LOG_MESSAGE_INPUT",
                    "check": "String"
                },
                {
                    "type": "field_dropdown",
                    "name": "LOG_LEVEL",
                    "options": [[Blockly.Msg.NODE_LOG_LOG    , "LOG"   ], 
                                [Blockly.Msg.NODE_LOG_WARNING, "WARN"  ], 
                                [Blockly.Msg.NODE_LOG_ERROR  , "ERR"   ], 
                                [Blockly.Msg.NODE_LOG_DEBUG  , "DEBUG" ], 
                                [Blockly.Msg.NODE_LOG_TRACE  , "TRACE" ]]
                }
            ],
            "inputsInline": true,
            "previousStatement": true,
            "nextStatement": true,
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_LOG_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_msg'] = {
    init: function () {
        this.jsonInit({
            "type": "node_msg",
            "message0": Blockly.Msg.NODE_MSG,
            "output": 'Object',
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_MSG_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_send'] = {
    init: function () {
        this.jsonInit({
            "type": "node_send",
            "message0": Blockly.Msg.NODE_SEND,
            "args0": [
                {
                    "type": "input_value",
                    "name": "MESSAGE_INPUT",
                    "check": "Object"
                },
                {
                    "type": "input_dummy",
                    "name": "OUTPUT_NR_PLACEHOLDER",
                },
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_SEND_TOOLTIP,
            "helpUrl": null,
            "extensions": ["output_numbers_extension"]
        });
    },
    onchange: function() {
        if(!this.workspace.isDragging || this.workspace.isDragging()) {
            return;  // Don't change state at the start of a drag.
        }
        
        var insideLoop = false;
        var block = this;

        // Check whether this node_send block is (nested) inside a loop, by searching up the hierarchy to the root block
        do {
            if(Blockly.libraryBlocks.loops.loopTypes.has(block.type)) {
                insideLoop = true;
                break;
            }
            block = block.getSurroundParent();
        } while (block);
        
        // Show a warning on the node_send block, when it is being used inside a loop
        if (insideLoop) {
            this.setWarningText(Blockly.Msg.NODE_SEND_WARNING);
        } 
        else {
            this.setWarningText(null);
        }
    }
};

// This block doesn't need an onchange event (similar to the node_send event), since the return would end the loop anyway.
Blockly.Blocks['node_return_message'] = {
    init: function () {
        this.jsonInit({
            "type": "node_return_message",
            "message0": Blockly.Msg.NODE_RETURN_MESSAGE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "MESSAGE_INPUT",
                    "check": "Object"
                },
                {
                    "type": "input_dummy",
                    "name": "OUTPUT_NR_PLACEHOLDER",
                },
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_RETURN_MESSAGE_TOOLTIP,
            "helpUrl": null,
            "extensions": ["output_numbers_extension"]
        });
    }
};

// Extension to create a dropdown with available output numbers
Blockly.Extensions.register('output_numbers_extension', function() {
    var placeholder = this.inputList[1];
    
    // Create a dropdown that calculates its content as soon as the dropdown is opened
    var dropdown = new Blockly.FieldDropdown(function() {
        var options = [];
        for (var i = 1; i <= Blockly.nodeOutputs; i++) {
            options.push([i.toString(), i.toString()]);
        }
        return options;
    });

    // Remark: don't change the OUTPUT_NR field name, because it is also used in the blockly.html file!
    placeholder.appendField(dropdown, 'OUTPUT_NR');
});

Blockly.Blocks['node_return'] = {
    init: function () {
        this.jsonInit({
            "type": "node_return",
            "message0": Blockly.Msg.NODE_RETURN,
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_RETURN_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_clone'] = {
    init: function () {
        this.jsonInit({
            "type": "node_clone",
            "message0": Blockly.Msg.NODE_CLONE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "OBJECT_INPUT",
                    "check": "Object"
                }
            ],
            "inputsInline": true,
            "output": 'Object',
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_CLONE_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_properties'] = {
    init: function () {
        this.jsonInit({
            "type": "node_properties",
            "message0": Blockly.Msg.NODE_PROPERTIES,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "PROPERTY_NAME",
                    "options": [[Blockly.Msg.NODE_PROPERTIES_ID, "ID"   ], 
                                [Blockly.Msg.NODE_PROPERTIES_NAME, "NAME" ],
                                [Blockly.Msg.NODE_PROPERTIES_OUTPUT_COUNT, "OUTPUT_COUNT" ],
                                [Blockly.Msg.NODE_PROPERTIES_PATH, "PATH" ]]
                }
            ],
            "inputsInline": true,
            "output": 'String',
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_PROPERTIES_TOOLTIP,
            "helpUrl": null
        });
    }
};

// Currently it is not possible to set the allowed colours of a colour field in JSON.
// See issue https://github.com/google/blockly/issues/286.
// This means currently you cannot do it like this:
//                {
//                    "type": "field_colour",
//                    "name": "COLOUR",
//                    "colour": "#0000ff",
//                    "colours": ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#888888']
//                },
// Therefore I created a temporary workaround using an extension.
// See https://groups.google.com/d/msg/blockly/CmKfC-Ri69k/RO-gjR1pAQAJ
// TODO: remove the workaround as soon as the issue is solved by Google !!
Blockly.Blocks['node_status'] = {
    init: function () {
        this.jsonInit({
            "type": "node_status",
            "message0": Blockly.Msg.NODE_STATUS,
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT_INPUT",
                    "check": "String"
                },
                {
                    "type": "input_dummy",
                    "name": "COLOUR_PLACEHOLDER",
                },
                {
                    "type": "field_dropdown",
                    "name": "SHAPE",
                    "options": [[Blockly.Msg.NODE_STATUS_RING, "RING" ], 
                                [Blockly.Msg.NODE_STATUS_DOT , "DOT"  ]]
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_STATUS_TOOLTIP,
            "helpUrl": null,
            "extensions": ["limited_colorpicker_extension"]
        });
    }
}

// Extension to create a limited colour picker for the node_status block
Blockly.Extensions.register('limited_colorpicker_extension', function() {
    var placeholder = this.inputList[1];

    // Set the allowed status colours (red, green, orange, blue, grey).    
    var colourField = new Blockly.FieldColour('#00f');
    colourField.setColours(['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#888888']).setColumns(3);
            
    placeholder.appendField(colourField, 'COLOUR');
});

Blockly.Blocks['node_remove_status'] = {
    init: function () {
        this.jsonInit({
            "type": "node_remove_status",
            "message0": Blockly.Msg.NODE_REMOVE_STATUS,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_close'] = {
    init: function () {
        this.jsonInit({
            "type": "node_close",
            "message0": Blockly.Msg.NODE_CLOSE,
            "message1": Blockly.Msg.NODE_CLOSE_1,
            "args1": [
                {
                    "type": "input_statement",
                    "name": "STATEMENTS"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_CLOSE_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_done'] = {
    init: function () {
        this.jsonInit({
            "type": "node_done",
            "message0": Blockly.Msg.NODE_DONE,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_DONE_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_env'] = {
    init: function () {
        this.jsonInit({
            "type": "node_env",
            "message0": Blockly.Msg.NODE_ENV,
            "args0": [
                {
                    "type": "input_value",
                    "name": "VARIABLE_NAME",
                    "check": "String"
                }
            ],
            "inputsInline": true,
            "output": "String",
            "colour": '#BB8FCE',
            "tooltip": Blockly.Msg.NODE_ENV_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_flow_memory'] = {
    init: function () {
        this.jsonInit({
            "type": "node_flow_memory",
            "message0": Blockly.Msg.NODE_FLOW_MEMORY,
            "output": 'Object',
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_context_memory'] = {
    init: function () {
        this.jsonInit({
            "type": "node_context_memory",
            "message0": Blockly.Msg.NODE_CONTEXT_MEMORY,
            "output": 'Object',
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['node_global_memory'] = {
    init: function () {
        this.jsonInit({
            "type": "node_global_memory",
            "message0": Blockly.Msg.NODE_GLOBAL_MEMORY,
            "output": 'Object',
            "colour": "#BB8FCE",
            "tooltip": Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP,
            "helpUrl": null
        });
    }
};
