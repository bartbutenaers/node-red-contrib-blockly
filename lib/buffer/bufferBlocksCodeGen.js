Blockly.JavaScript['buffer_from_string'] = function(block) {
  const string_input = Blockly.JavaScript.valueToCode(block, 'STRING_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  const encoding = block.getFieldValue('ENCODING');
  const code = 'Buffer.from(' + string_input + ', "' + encoding + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_to_string'] = function(block) {
  const buffer_input = Blockly.JavaScript.valueToCode(block, 'BUFFER_INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  const encoding = block.getFieldValue('ENCODING');
  const code = buffer_input + '.toString("' + encoding + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_length'] = function(block) {
  const buffer_input = Blockly.JavaScript.valueToCode(block, 'BUFFER_INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  const code = buffer_input + '.length';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_alloc'] = function(block) {
  const length = Blockly.JavaScript.valueToCode(block, 'LENGTH', Blockly.JavaScript.ORDER_ATOMIC);
  const code = 'Buffer.alloc(' + length + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_fill'] = function(block) {
  const buffer_input = Blockly.JavaScript.valueToCode(block, 'BUFFER_INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  const fill_value = Blockly.JavaScript.valueToCode(block, 'FILL_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const code = buffer_input + '.fill(' + fill_value + ');\n';
  return code;
};

Blockly.JavaScript['buffer_check'] = function(block) {
  const input_object = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  const code = 'Buffer.isBuffer(' + input_object + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_copy'] = function(block) {
  const buffer_source = Blockly.JavaScript.valueToCode(block, 'BUFFER_SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const buffer_destination = Blockly.JavaScript.valueToCode(block, 'BUFFER_DESTINATION', Blockly.JavaScript.ORDER_ATOMIC);
  const code = buffer_source + '.copy(' + buffer_destination + ');\n';
  return code;
};

Blockly.JavaScript['buffer_concatenate'] = function(block) {
  const buffer_first = Blockly.JavaScript.valueToCode(block, 'BUFFER_FIRST', Blockly.JavaScript.ORDER_ATOMIC);
  const buffer_second = Blockly.JavaScript.valueToCode(block, 'BUFFER_SECOND', Blockly.JavaScript.ORDER_ATOMIC);
  const code = 'Buffer.concat([' + buffer_first + ', ' + buffer_second + '])';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_set_index'] = function(block) {
  var   index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  const buffer = Blockly.JavaScript.valueToCode(block, 'BUFFER', Blockly.JavaScript.ORDER_ATOMIC);
  var   value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Blockly is 1-based while Javascript is 0-based, so the index needs to be converted
  index--;

  // Find the type of value that has been used as input.
  // See https://groups.google.com/g/blockly/c/9fEPSGFarNM
  var dataType = block.getInput('VALUE').connection.targetConnection.getCheck()[0];

  // Based on the value type, we need different ways to get the first byte
  switch (dataType) {
    case "Number":
      // TODO convert to hexadecimal 0x...
      break;
    case "String":
      // Get the first character of the input string
      value = value + '.charAt(0)';
      break;
    case "Buffer":
      // Get the first element from the input buffer
      value = value + '[0]';
      break;
  }

  const code = buffer + '[' + index + '] = ' + value + ';\n';
  return code;
};

Blockly.JavaScript['buffer_get_index'] = function(block) {
  var   index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  const buffer = Blockly.JavaScript.valueToCode(block, 'BUFFER', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Blockly is 1-based while Javascript is 0-based, so the index needs to be converted
  index--;

  const code = buffer + '[' + index + ']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_byte'] = function(block) {
  const value = block.getFieldValue('BYTE_VALUE');
  const code = 'Buffer.alloc(1, ' + value + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_empty'] = function(block) {
  const code = 'Buffer.alloc(0)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
