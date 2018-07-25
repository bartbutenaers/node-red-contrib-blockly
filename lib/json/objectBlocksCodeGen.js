// Downloaded from https://gist.github.com/mark-friedman/48f43a9b62b1c8ad029a75d4b4e61f31
// And removed first line:
// const Blockly = window.Blockly;

Blockly.JavaScript['object_from_json'] = function(block) {
  const value_json = Blockly.JavaScript.valueToCode(block, 'JSON', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Maybe check that the parsed value is actually an object.
  const code = `JSON.parse(${value_json})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_to_json'] = function(block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  const code = `JSON.stringify(${value_object})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_get'] = function(block) {
  const value_field_name = Blockly.JavaScript.valueToCode(block, 'field_name', Blockly.JavaScript.ORDER_ATOMIC) || '\'\''; // Gewijzigd
  const value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC); 
  const code = `${value_object}[${value_field_name}]`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_set'] = function(block) {
  const value_field_name = Blockly.JavaScript.valueToCode(block, 'field_name', Blockly.JavaScript.ORDER_ATOMIC) || '\'\''; // Gewijzigd
  const value_object_field = Blockly.JavaScript.valueToCode(block, 'object_field', Blockly.JavaScript.ORDER_ATOMIC);
  const value_value_field = Blockly.JavaScript.valueToCode(block, 'value_field', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object_field}[${value_field_name}] = ${value_value_field};\n`;
};

Blockly.JavaScript['object_create'] = function(block) {
  if (!block.numFields) {
    return ['{}', Blockly.JavaScript.ORDER_NONE];
  }
  let fieldInitCode = '';
  for (let i = 1; i <= block.numFields; i++) {
    const fieldName = block.getFieldValue('field' + i);
    const fieldValue = Blockly.JavaScript.valueToCode(block, 'field_input' + i, Blockly.JavaScript.ORDER_ATOMIC);
    fieldInitCode += `"${fieldName}": ${fieldValue}, `
  }
  const code = `{ ${fieldInitCode} }`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
