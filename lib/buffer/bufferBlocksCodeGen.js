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
  var fill_value = Blockly.JavaScript.valueToCode(block, 'FILL_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 0;

  // Remove the quotes at the start and the end of the fieldName
  fill_value = fill_value.replace(/^'(.*)'$/, '$1');

  // Fill differently depending on whether numeric, single char or long string
  if (isNaN(fill_value)) {
      fill_value = fill_value.charCodeAt(0);
  } else {
      fill_value = Math.min(Math.max(fill_value, 0),255);
  }
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

Blockly.JavaScript['buffer_set_index'] = function(block) {
  var   index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  const buffer = Blockly.JavaScript.valueToCode(block, 'BUFFER', Blockly.JavaScript.ORDER_ATOMIC);
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Remove the quotes at the start and the end of the fieldName
  value = value.replace(/^'(.*)'$/, '$1');  
  
  // Blockly is 1-based while Javascript is 0-based, so the index needs to be converted
  if (isNaN(value)) {
      value = value.charCodeAt(0); 
  } else {
      value = Math.min(Math.max(value, 0),255);
  }
  const code = buffer + '[(' + index + ' - 1)] = ' + value + ';\n';
  return code;
};

Blockly.JavaScript['buffer_get_index'] = function(block) {
  var   index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  const buffer = Blockly.JavaScript.valueToCode(block, 'BUFFER', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Blockly is 1-based while Javascript is 0-based, so the index needs to be converted
  
  const code = buffer + '[(' + index + ' - 1)]';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_byte'] = function(block) {
  const value = block.getFieldValue('BYTE_VALUE');
  const code = value;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['buffer_empty'] = function(block) {
  const code = 'Buffer.alloc(0)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
