Blockly.Blocks['object_from_json'] = {
    init: function () {
        this.jsonInit({
            "type": "object_from_json",
            "message0": Blockly.Msg.OBJECT_FROM_JSON,
            "args0": [
                {
                    "type": "input_value",
                    "name": "JSON",
                    "check": "String"
                }
            ],
            "inputsInline": true,
            "output": "Object",
            "colour": '#F99EA3',
            "tooltip": Blockly.Msg.OBJECT_FROM_JSON_TOOLTIP,
            "helpUrl": "http://www.json.org/"
        });
    }
};

Blockly.Blocks['object_to_json'] = {
    init: function () {
        this.jsonInit({
            "type": "object_to_json",
            "message0": Blockly.Msg.OBJECT_TO_JSON,
            "args0": [
                {
                    "type": "input_value",
                    "name": "object",
                    "check": "Object"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": '#F99EA3',
            "tooltip": Blockly.Msg.OBJECT_TO_JSON_TOOLTIP,
            "helpUrl": "http://www.json.org/"
        });
    }
};

Blockly.Blocks['object_keys'] = {
    init: function () {
        this.jsonInit({
            "type": "object_keys",
            "message0": Blockly.Msg.OBJECT_KEYS,
            "args0": [
                {
                    "type": "input_value",
                    "name": "object_input",
                    "check": "Object",
                    "align": "RIGHT"
                }
            ],
            "inputsInline": true,
            "output": "Array",
            "colour": '#F99EA3',
            "tooltip": Blockly.Msg.OBJECT_KEYS_TOOLTIP,
            "helpUrl": ""
        });
    }
};  

Blockly.Blocks['object_create'] = {
    init: function () {
        this.jsonInit({
            "type": "object_create",
            "message0": Blockly.Msg.OBJECT_CREATE,
            "output": "Object",
            "mutator": "controls_create_mutator",
            "colour": "#F99EA3",
            "tooltip": Blockly.Msg.OBJECT_CREATE_TOOLTIP,
            "helpUrl": ""
        });
    }
};

var objectCreateMutator = {
  numFields: 0,
  fields: [],

  /**
   * Standard function for Mutator mixin. It's called to update the block based on contents of the mutator's XML
   * DOM element.
   */
  domToMutation: function(xmlElement) {
    this.fields = [];
    for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
      if (childNode.nodeName.toLowerCase() == 'field') {
        this.fields.push(childNode.getAttribute('name'));
      }
    }
    this.numFields = this.fields.length;
    this.updateShape();
  },

  /**
   * Standard function for Mutator mixin. It's called to generate the mutator's XML DOM element based on the content
   * of the block.
   */
  mutationToDom: function() {
    if (!this.numFields) {
      return null;
    }
    const container = document.createElement('mutation');
    container.setAttribute('num_fields', '' + this.numFields);
    for (let i = 0; i < this.fields.length; i++) {
      const field = document.createElement('field');
      field.setAttribute('name', this.fields[i]);
      container.appendChild(field);
    }
    return container;
  },

  /**
   * Standard function for Mutator mixin when the mutator uses the standard mutator UI. It's called to update the
   * block based on changes to the mutator's UI.
   */
  compose: function(topBlock) {
    let fieldBlock = topBlock.nextConnection && topBlock.nextConnection.targetBlock();
    this.numFields = 0;
    this.fields = [];
    let connectionsToRestore = [null];
    while (fieldBlock) {
      this.fields.push(fieldBlock.getFieldValue('field_name'));
      this.numFields++;
      connectionsToRestore.push(fieldBlock.savedConnection);
      fieldBlock = fieldBlock.nextConnection && fieldBlock.nextConnection.targetBlock();
    }
    this.updateShape();
    // Reconnect any child blocks.
    for (let i = 1; i <= this.numFields; i++) {
      Blockly.Mutator.reconnect(connectionsToRestore[i], this, 'field_input' + i);
    }
  },

  /**
   * Standard function for Mutator mixin when the mutator uses the standard mutator UI.  It's called to populate the
   * mutator UI.
   */
  decompose: function(workspace) {
    const topBlock = workspace.newBlock('object_create_mutator_top');
    topBlock.initSvg();
    let connection = topBlock.nextConnection;
    for (let i = 0; i < this.fields.length; i++) {
      const fieldBlock = workspace.newBlock('object_field');
      fieldBlock.initSvg();
      fieldBlock.setFieldValue(this.fields[i], 'field_name');
      connection.connect(fieldBlock.previousConnection);
      connection = fieldBlock.nextConnection;
    }
    return topBlock;
  },

  /**
   * Standard function for Mutator mixin when the mutator uses the standard mutator UI.  It's called on any changes to
   * the block and is generally used to keep track of input connections (by saving them with their corresponding mutator
   * blocks), so that if the mutator later causes changes to the block it can restore those input connections.
   *
   * We're also using this function to update the mutator block field name values if the user changes the name in the
   * block.
   */
  saveConnections: function(topBlock) {
    let fieldBlock = topBlock.nextConnection && topBlock.nextConnection.targetBlock();
    let i = 1;
    while (fieldBlock) {
      const input = this.getInput('field_input' + i);
      fieldBlock.savedConnection = input && input.connection.targetConnection;
      // Set mutator block field name from the corresponding 'real' Object.create block
      fieldBlock.setFieldValue(this.getFieldValue('field' + i), 'field_name');
      i++;
      fieldBlock = fieldBlock.nextConnection &&
        fieldBlock.nextConnection.targetBlock();
    }
  },

  updateShape: function() {
    // Delete everything.
    if (this.getInput('with')) {
      this.removeInput('with');
    }
    let i = 1;
    while (this.getInput('field_input' + i)) {
      this.removeInput('field_input' + i);
      i++;
    }
    // Rebuild block.
    if (this.numFields > 0) {
      this.appendDummyInput('with')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("with fields");
    }
    for (let i = 1; i <= this.numFields; i++) {
      const fieldName = this.fields[i - 1];
      this.appendValueInput("field_input" + i)
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(fieldName), "field" + i);
    }
  },
};

Blockly.Extensions.registerMutator('controls_create_mutator', objectCreateMutator, null, ['object_field']);

// Internally used in SWITCH_CASE block mutator (so not available in the toolbox)
Blockly.Blocks['object_field'] = {
    init: function () {
        this.jsonInit({
            "type": "object_field",
            "message0": "%1 %2",
            "args0": [
                {
                    "type": "field_input",
                    "name": "field_name",
                    "text": Blockly.Msg.OBJECT_FIELD_NAME
                },
                {
                    "type": "input_value",
                    "name": "field_value"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#F99EA3",
            "tooltip": "",
            "helpUrl": ""
        });
    }
};

// Internally used in SWITCH_CASE block mutator (so not available in the toolbox)
Blockly.Blocks['object_create_mutator_top'] = {
    init: function () {
        this.jsonInit({
            "type": "object_create_mutator",
            "message0": Blockly.Msg.OBJECT_CREATE,
            "nextStatement": null,
            "colour": "#F99EA3",
            "tooltip": Blockly.Msg.OBJECT_CREATE_TOOLTIP,
            "helpUrl": ""
        });
    }
};
