// =========================================================================================
// Node-Red blocks
// =========================================================================================
Blockly.Msg.NODE_OBJECT_GET_JSON = "get %1 property %2";
Blockly.Msg.NODE_OBJECT_GET_JSON_TOOLTIP = "Get a property of an object.";
Blockly.Msg.NODE_OBJECT_SET_JSON = "set %1 property %2 to %3";
Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP = "Set a property of an object.";
Blockly.Msg.NODE_LOG = "log text %1 with %2 level";
Blockly.Msg.NODE_LOG_TOOLTIP = "Log via the Node-Red function API.";
Blockly.Msg.NODE_MSG = "msg";
Blockly.Msg.NODE_MSG_TOOLTIP = "Get the Node-Red input message.";
Blockly.Msg.NODE_REMOVE_STATUS = "remove node status";
Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP = "Remove the node status via the Node-Red function API.";
Blockly.Msg.NODE_CLONE = "clone %1";
Blockly.Msg.NODE_CLONE_TOOLTIP = "Clone the message via the Node-Red function API.";
Blockly.Msg.NODE_STATUS = "set node status to text %1 to color %2 and shape %3";
Blockly.Msg.NODE_STATUS_TOOLTIP = "Set the node status via the Node-Red function API.";
Blockly.Msg.NODE_PROPERTIES = "get node %1";
Blockly.Msg.NODE_PROPERTIES_TOOLTIP = "Get the specified node property via the Node-Red function API.";
Blockly.Msg.NODE_FLOW_MEMORY = "flow";
Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP = "Access the data in the Node-Red flow memory.";
Blockly.Msg.NODE_CONTEXT_MEMORY = "(node)context";
Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP = "Access the data in the Node-Red (node)context memory.";
Blockly.Msg.NODE_GLOBAL_MEMORY = "global";
Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP = "Access the data in the Node-Red global memory.";
Blockly.Msg.NODE_SEND = "send %1 to output %2";
Blockly.Msg.NODE_SEND_TOOLTIP = "Send output message via the Node-Red function API.";
Blockly.Msg.NODE_SEND_WARNING = "When sending messages in a loop,\nmake sure the messages are unique!";
Blockly.Msg.NODE_RETURN = "return %1";
Blockly.Msg.NODE_RETURN_TOOLTIP = "Send output message and return to stop processing";
Blockly.Msg.NODE_CLOSE = "On node closed";
Blockly.Msg.NODE_CLOSE_1 = "%1";
Blockly.Msg.NODE_CLOSE_TOOLTIP = "Statements that should be executed when the node is being closed.";

// =========================================================================================
// Buffer blocks
// =========================================================================================
Blockly.Msg.BUFFER_FROM_STRING = "generate buffer from string %1 with encoding %2";
Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP = "Generate a buffer from a string.";
Blockly.Msg.BUFFER_TO_STRING = "generate string from buffer %1 with encoding %2";
Blockly.Msg.BUFFER_TO_STRING_TOOLTIP = "Convert a buffer to a string.";
Blockly.Msg.BUFFER_LENGTH = "get length of buffer %1";
Blockly.Msg.BUFFER_LENGTH_TOOLTIP = "Get the buffer length in bytes.";
Blockly.Msg.BUFFER_ALLOC = "create buffer with length %1";
Blockly.Msg.BUFFER_ALLOC_TOOLTIP = "Create a buffer with the specified length.";
Blockly.Msg.BUFFER_FILL = "fill buffer %1 with value %2";
Blockly.Msg.BUFFER_FILL_TOOLTIP = "Create a buffer with the specified length";
Blockly.Msg.BUFFER_CHECK = "check if buffer %1";
Blockly.Msg.BUFFER_CHECK_TOOLTIP = "Check if the input value is a buffer.";
Blockly.Msg.BUFFER_COPY = "copy from buffer %1 to buffer %2";
Blockly.Msg.BUFFER_COPY_TOOLTIP = "Copy from the first buffer to the second buffer";
Blockly.Msg.BUFFER_EMPTY = "empty buffer";
Blockly.Msg.BUFFER_EMPTY_TOOLTIP = "Create an empty buffer, i.e. buffer with size 0.";
Blockly.Msg.BUFFER_BYTE = "byte %1";
Blockly.Msg.BUFFER_BYTE_TOOLTIP = "A byte value.";
Blockly.Msg.BUFFER_GET_INDEX = "get byte at index %1 of buffer %2";
Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP = "Get the byte value of the specified buffer index";
Blockly.Msg.BUFFER_SET_INDEX = "set byte at index %1 of buffer %2 to value %3";
Blockly.Msg.BUFFER_SET_INDEX_TOOLTIP = "Set the byte value of the specified buffer index.";

// =========================================================================================
// Objects (JSON) blocks
// =========================================================================================
Blockly.Msg.OBJECT_FROM_JSON = "get object from JSON %1";
Blockly.Msg.OBJECT_FROM_JSON_TOOLTIP = "Create object from JSON string.";
Blockly.Msg.OBJECT_TO_JSON = "generate JSON from %1";
Blockly.Msg.OBJECT_TO_JSON_TOOLTIP = "Save object as a JSON string.";
Blockly.Msg.OBJECT_CREATE = "create object";
Blockly.Msg.OBJECT_CREATE_TOOLTIP = "Create a new object, optionally with some property values.";
Blockly.Msg.OBJECT_FIELD_NAME = "property name";
Blockly.Msg.OBJECT_KEYS = "get keys from %1";
Blockly.Msg.OBJECT_KEYS_TOOLTIP = "Get all keys from the object";

// =========================================================================================
// Extra blocks
// =========================================================================================
Blockly.Msg.TIMER_CONDITIONAL = "Repeat every %1 seconds, until %2 %3";
Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP = "Repeat at regular intervals until a condition is fullfilled.";
Blockly.Msg.TIMER_COUNTING = "Repeat  %1 times every %2 seconds %3 %4";
Blockly.Msg.TIMER_COUNTING_TOOLTIP = "Repeat at regular intervals for a number of times.";
Blockly.Msg.SWITCH = "input value %1 in case of %2 do %3";
Blockly.Msg.SWITCH_TOOLTIP = "Do some things depending on the input values.";
Blockly.Msg.SWITCH_DEFAULT = "default";
Blockly.Msg.SWITCH_DEFAULT_TOOLTIP = "When there are no matching cases.";
Blockly.Msg.SWITCH_CASE = "the case is %1";
Blockly.Msg.SWITCH_CASE_TOOLTIP = "When a specific value is matched.";
Blockly.Msg.SWITCH_CASE_LIST = "in case of";
Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP = "List of all available cases";
