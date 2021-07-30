function getUniqueNameForBlock(prefix, block) {
    var counter = 1;
    var existingNames = [];
    
    var blocks = block.workspace.getBlocksByType(block.type);

    for (var i = 0; i < blocks.length; i++) {
        var name = blocks[i].getFieldValue('NAME');
        existingNames.push(name);
    }    
    
    while(true) {
        var newName = prefix + "_" + counter;
        
        if (!existingNames.includes(newName)) {
            return newName;
        }
        
        counter++;
    }
}

// When a new Blockly workspace is created by our Node-RED node, then we should start listening for changes on that workspace ...
// Note that this event is triggered by the node, immediately afterwards the new workspace has been created.
document.addEventListener('blocky_workspace_changed', function(workspaceChangedEvent) {
    var newWorkspace = workspaceChangedEvent.detail.newWorkspace;
    
    // When a change (related to a set_interval/set_timeout block) happens in the workspace, then the clear_interval/clear_timeout blocks need to be updated.
    // All that functionality has been centralized here, because otherwise it becomes a mess that is hard to troubleshoot ...
    newWorkspace.addChangeListener(function(event) {
        // We are only interested in some particular events, so ignore other events for performance reasons
        if (![Blockly.Events.BLOCK_CREATE, Blockly.Events.BLOCK_DELETE, Blockly.Events.BLOCK_CHANGE].includes(event.type)) {
            return;
        }

        // Not all events have an ids field, but only a blockId field.  Make sure we have always an array, in both cases ...
        var eventBlockIds = event.ids;
        if (!eventBlockIds) {
            eventBlockIds = [event.blockId];
        }

        var allBlocks = newWorkspace.getAllBlocks();

        // Execute the logic for every block that has been created/deleted/updated in the workspace
        eventBlockIds.forEach(function(eventBlockId) {
            switch(event.type) {
                case Blockly.Events.BLOCK_CREATE:
                    var newBlock = newWorkspace.getBlockById(eventBlockId);

                    switch(newBlock.type) {
                        case "set_timeout":
                            var newBlockName = newBlock.getField('NAME').getValue();
                            
                            // When a new set_timeout block is added (from the flyout) to the workspace, its name will be "timeout".
                            // However it should become "timeout_x" with x the first integer number that is not being used yet by the other 
                            // set_timeout blocks in the workspace.                        
                            if (newBlockName === Blockly.Msg.TIMER_SET_TIMEOUT_NAME) {
                                var newUniqueName = getUniqueNameForBlock(Blockly.Msg.TIMER_SET_TIMEOUT_NAME, newBlock);
                                newBlock.setFieldValue(newUniqueName, 'NAME');
                            }

                            // The name of the new set_timeout block, should be added to the dropdown options of every clear_timeout block
                            allBlocks.forEach(function(otherBlock) {
                                if (otherBlock.type === "clear_timeout") {
                                    otherBlock.dropdownOptions[newBlock.id] = newBlockName;
                                }
                            });
                            break;
                        case "set_interval":
                            var newBlockName = newBlock.getField('NAME').getValue();
                            
                            // When a new set_interval block is added (from the flyout) to the workspace, its name will be "interval".
                            // However it should become "interval_x" with x the first integer number that is not being used yet by the other 
                            // set_interval blocks in the workspace.                        
                            if (newBlockName === Blockly.Msg.TIMER_SET_INTERVAL_NAME) {
                                var newUniqueName = getUniqueNameForBlock(Blockly.Msg.TIMER_SET_INTERVAL_NAME, newBlock);
                                newBlock.setFieldValue(newUniqueName, 'NAME');
                            }

                            // The name of the new set_interval block, should be added to the dropdown options of every clear_interval block
                            allBlocks.forEach(function(otherBlock) {
                                if (otherBlock.type === "clear_interval") {
                                    otherBlock.dropdownOptions[newBlock.id] = newBlockName;
                                }
                            });
                            break;
                        case "clear_timeout":
                            // When a new clear_timout block has been created, all the names (of the existing set_timeout blocks) should be added to its dropdown options
                            allBlocks.forEach(function(otherBlock) {
                                if (otherBlock.type === "set_timeout") {
                                    var otherBlockName = otherBlock.getField('NAME').getValue();
                                    newBlock.dropdownOptions[otherBlock.id] = otherBlockName;
                                }
                            });
                            break;
                        case "clear_interval":
                            // When a new clear_interval block has been created, all the names (of the existing set_interval blocks) should be added to its dropdown options
                            allBlocks.forEach(function(otherBlock) {
                                if (otherBlock.type === "set_interval") {
                                    var otherBlockName = otherBlock.getField('NAME').getValue();
                                    newBlock.dropdownOptions[otherBlock.id] = otherBlockName;
                                }
                            });
                            break;
                    }
                    break;
                case Blockly.Events.BLOCK_CHANGE:
                    var updatedBlock = newWorkspace.getBlockById(eventBlockId);
                    
                    if (event.name === "NAME") {
                        var updatedBlockName = updatedBlock.getField('NAME').getValue();
                        
                        switch (updatedBlock.type) {
                            case "set_timeout":
                                // When the name of a set_timeout block has been changed, then that name should also be updated in the dropdown options of every existing clear_timout block
                                allBlocks.forEach(function(otherBlock) {
                                    if (otherBlock.type === "clear_timeout") {
                                        otherBlock.dropdownOptions[updatedBlock.id] = updatedBlockName;
                                        
                                        // When the (changed) name of the set_timeout was currently selected in the clear_timeout block,
                                        // then the name in that block should also be changed
                                        var currentSelectedOption = otherBlock.getField('NAME').getValue()
                                        if (currentSelectedOption === updatedBlock.id) {
                                            // Make sure the (dynamic) dropdown list is removed from the cache, and reloaded again by blockly
                                            otherBlock.getField('NAME').getOptions(false);
                                            // Select another option temporarily, because setting the same option (as currently already selected) has no effect
                                            otherBlock.getField('NAME').setValue("nothing_selected");
                                            // Select the original selected option again, to show it's changed name (label)
                                            otherBlock.getField('NAME').setValue(currentSelectedOption);
                                        }
                                    }
                                });
                                break;
                            case "set_interval":
                                // When the name of a set_interval block has been changed, then that name should also be updated in the dropdown options of every existing clear_interval block
                                allBlocks.forEach(function(otherBlock) {
                                    if (otherBlock.type === "clear_interval") {
                                        otherBlock.dropdownOptions[updatedBlock.id] = updatedBlockName;
                                        
                                        // When the (changed) name of the set_interval was currently selected in the clear_interval block,
                                        // then the name in that block should also be changed
                                        var currentSelectedOption = otherBlock.getField('NAME').getValue()
                                        if (currentSelectedOption === updatedBlock.id) {
                                            // Make sure the (dynamic) dropdown list is removed from the cache, and reloaded again by blockly
                                            otherBlock.getField('NAME').getOptions(false);
                                            // Select another option temporarily, because setting the same option (as currently already selected) has no effect
                                            otherBlock.getField('NAME').setValue("nothing_selected");
                                            // Select the original selected option again, to show it's changed name (label)
                                            otherBlock.getField('NAME').setValue(currentSelectedOption);
                                        }
                                    }
                                });
                                break;
                        }
                    }
                    break;  
                case Blockly.Events.BLOCK_DELETE:
                    // It is not possible to get a reference (based on the eventBlockId) to a block that has been deleted from a workspace.
                    // Since we cannot determine anymore which block type has been deleted, we won't do any type checks here ...
                    // So we "try" to remove the id of EVERY deleted block from the dropdown options of the existing clear_interval/clear_timeout blocks.
                    allBlocks.forEach(function(otherBlock) {
                        if (["clear_interval", "clear_timeout"].includes(otherBlock.type)) {
                            delete otherBlock.dropdownOptions[eventBlockId];

                            // When the name of the removed set_interval/set_timeout was currently selected in the clear_interval/clear_timeout block,
                            // then the selected name in that block should become 'none'
                            var otherBlockSelectedOption = otherBlock.getField('NAME').getValue()
                            if (otherBlockSelectedOption === eventBlockId) {
                                otherBlock.getField('NAME').setValue("nothing_selected");
                            }
                        }
                    });
                    break;
            }
        });
    });
});

Blockly.Blocks['set_timeout'] = {
    init: function() {
        this.jsonInit({
            "type": "set_timeout",
            "message0": Blockly.Msg.TIMER_SET_TIMEOUT,
            "args0": [
                {
                    "type": "field_input",
                    "name": "NAME",
                    "text": Blockly.Msg.TIMER_SET_TIMEOUT_NAME,
                    "spellcheck": false
                },
                {
                    "type": "field_number",
                    "name": "DELAY",
                    "value": 1000,
                    "min": 0,
                    "precision": 1
                },
                {
                    "type": "field_dropdown",
                    "name": "UNIT",
                    "options": [[Blockly.Msg.TIMER_TIMER_MS , "ms"   ], 
                                [Blockly.Msg.TIMER_TIMER_SEC, "sec"  ], 
                                [Blockly.Msg.TIMER_TIMER_MIN, "min"  ]]
                }
            ],
            "message1": Blockly.Msg.TIMER_SET_TIMEOUT_1,
            "args1": [
                {
                    "type": "input_statement",
                    "name": "STATEMENT"
                }
            ],
            "inputsInline": false,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#DEDE1F",
            "tooltip": Blockly.Msg.TIMER_SET_TIMEOUT_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Blocks['set_interval'] = {
    init: function() {
        this.jsonInit({
            "type": "set_interval",
            "message0": Blockly.Msg.TIMER_SET_INTERVAL,
            "args0": [
                {
                    "type": "field_input",
                    "name": "NAME",
                    "text": Blockly.Msg.TIMER_SET_INTERVAL_NAME,
                    "spellcheck": false
                },
                {
                    "type": "field_number",
                    "name": "INTERVAL",
                    "value": 1000,
                    "min": 0,
                    "precision": 1
                },
                {
                    "type": "field_dropdown",
                    "name": "UNIT",
                    "options": [[Blockly.Msg.TIMER_TIMER_MS , "ms"   ], 
                                [Blockly.Msg.TIMER_TIMER_SEC, "sec"  ], 
                                [Blockly.Msg.TIMER_TIMER_MIN, "min"  ]]
                }
            ],
            "message1": Blockly.Msg.TIMER_SET_INTERVAL_1,
            "args1": [
                {
                    "type": "input_statement",
                    "name": "STATEMENT"
                }
            ],
            "inputsInline": false,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#DEDE1F",
            "tooltip": Blockly.Msg.TIMER_SET_INTERVAL_TOOLTIP,
            "helpUrl": null
        });
    }
};

Blockly.Extensions.register('dropdown_extension', function() {
    // Initialize the dropdown options, BEFORE the dropdown is added (in the next statement)
    if (!this.dropdownOptions) {
        this.dropdownOptions = { 
            nothing_selected: Blockly.Msg.TIMER_NONE_SELECTED
        }
    }

    // Add a dropdown field "NAME", that displays dynamically all options in this.dropdownOptions
    var block = this;
    this.getInput('INPUT').appendField(new Blockly.FieldDropdown(function() {
        var optionsAsArray = [];
        
        // The dropdownOptions is a Javascript object:
        //   { key1: value1, key2:value2, ...}
        // Which needs to be converted to a 2 dimensional array:
        //   [[key1, value1], [key2, value2], ...]
        Object.keys(block.dropdownOptions).forEach(function(key) {
            var value = block.dropdownOptions[key];
            optionsAsArray.push([value, key]);
        });
        
        return optionsAsArray;
    }), "NAME");
});

// Save and load the dropdown options in the clear_timeout/clear_interval blocks, to make sure they are again available after  the workspace is reloaded.
var dropdownMutator = {
    mutationToDom: function() {
        // Save the dropdown options, to make sure they are still available when the workspace is loaded.
        var mutationXml = document.createElement('mutation');
        var dropdownOptionsAsJson = JSON.stringify(this.dropdownOptions);
        mutationXml.setAttribute('dropdown_options', dropdownOptionsAsJson);
        return mutationXml;
    },
     domToMutation: function(xmlElement) {
        // Load the saved dropdown field options into this block
        var selectedOption = xmlElement.getAttribute('dropdown_selected');
        var dropdownOptionsAsJson = xmlElement.getAttribute('dropdown_options');
        this.dropdownOptions = JSON.parse(dropdownOptionsAsJson);
    }
};
Blockly.Extensions.registerMutator("dropdown_mutator", dropdownMutator);

Blockly.Blocks['clear_timeout'] = {
    init: function () {
        this.jsonInit({
            "type": "clear_timeout",
            "message0": Blockly.Msg.TIMER_CLEAR_TIMEOUT,
            "args0": [
                {
                    "type": "input_dummy",
                    "name": "INPUT"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#DEDE1F",
            "tooltip": Blockly.Msg.TIMER_CLEAR_TIMEOUT_TOOLTIP,
            "helpUrl": null,
            "extensions": ["dropdown_extension"],
            "mutator": ["dropdown_mutator"]
        });
    }
}

Blockly.Blocks['clear_interval'] = {
    init: function () {
        this.jsonInit({
            "type": "clear_interval",
            "message0": Blockly.Msg.TIMER_CLEAR_INTERVAL,
            "args0": [
                {
                    "type": "input_dummy",
                    "name": "INPUT"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#DEDE1F",
            "tooltip": Blockly.Msg.TIMER_CLEAR_INTERVAL_TOOLTIP,
            "helpUrl": null,
            "extensions": ["dropdown_extension"],
            "mutator": ["dropdown_mutator"]
        });
    }
}