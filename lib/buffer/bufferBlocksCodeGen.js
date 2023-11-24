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

Blockly.JavaScript['buffer_from_list'] = function(block) {
  const list_input = Blockly.JavaScript.valueToCode(block, 'LIST_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  const code = 'Buffer.from(' + list_input + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buffer_to_list'] = function(block) {
  const buffer_input = Blockly.JavaScript.valueToCode(block, 'BUFFER_INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  const code = 'Array.from(' + buffer_input + ')';
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
  //console.log(index);
  const buffer = Blockly.JavaScript.valueToCode(block, 'BUFFER', Blockly.JavaScript.ORDER_ATOMIC);
  var   value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

  // Get the data type checks offered by the block that is connected to our VALUE field 
  var targetCheck = block.getInput('VALUE').connection.targetConnection.getCheck();

  // Find the type of value that has been used as input.
  // See https://groups.google.com/g/blockly/c/9fEPSGFarNM
 // Find the type of value that has been used as input.
  // See https://groups.google.com/g/blockly/c/9fEPSGFarNM
  var dataType = null;
  if (targetCheck && Array.isArray(targetCheck) && targetCheck.length === 1) {
     dataType = targetCheck[0];
  }
      
  if ((dataType === null) || ((dataType == 'String') && (value.charAt(0) == '(') && (value.charAt(value.length - 1) == ')') )) {
    // We assume the input is a variable
    
    // Let Blockly generate a function 'convertValueToByte' (shared by all buffer_set_index blocks that have a variable as input).
    // Blockly will generate this function once, since all buffer_set_byte blocks will register the same name, thus overwriting each others function...
    var functionName = Blockly.JavaScript.provideFunction_(
      'convertValueToByte',
      ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(value) {',
       '  if (isNaN(value)) {',
       '    return value.charCodeAt(0);',
       '  } else {',
       '    if (Buffer.isBuffer(value)) {',
       '      return value[0];',
       '    } else {',
       //JS thinks a single " " is !isNan so we need to treat it as a special case
       '      if (value === " ") {',
       '        return value.charCodeAt(0);',
       '      } else {',
       '        return Math.min(Math.max(value, 0),255);',
       '      }',
       '    }',
       '  }',
       '}']);

    // Call the same function for every buffer_set_byte block
    var code = buffer + '[' + index + ' - 1] = ' + functionName + '(' + value + ');\n';
    return code;
  }

     
  switch (dataType) {
    case "Number":
      value = Math.min(Math.max(value, 0),255);
      break;
    case "String":
      // Get the first character of the input string
        value = value.replace(/^'(.*)'$/, '$1');  //remove any quotes 
        value = value.charCodeAt(0);
      break;
    case "Buffer":
      // Get the first element from the input buffer
      value = value + '[0]';
      break;
  }

  var code = buffer + '[' + index + ' - 1] = ' + value + ';\n';
  return code;
};

Blockly.JavaScript['buffer_get_index'] = function(block) {
  var   index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  const buffer = Blockly.JavaScript.valueToCode(block, 'BUFFER', Blockly.JavaScript.ORDER_ATOMIC);

  const code = buffer + '[' + index + ' - 1]';
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
