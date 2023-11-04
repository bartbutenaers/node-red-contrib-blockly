// =========================================================================================
// Node-RED blocks
// =========================================================================================
Blockly.Msg.NODE_OBJECT_GET_JSON = "%1 %2 property %3";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET_TOOLTIP = "Get a property of an object.";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE_TOOLTIP = "Remove a property of an object.";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS_TOOLTIP = "Check whether an object has a property.";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET = "get";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE = "remove";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS = "has";
Blockly.Msg.NODE_OBJECT_GET_WARNING = "Make sure property variable does not return a nested value such as foo.bar.";
Blockly.Msg.NODE_OBJECT_SET_JSON = "set %1 property %2 to %3";
Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP = "Set a property of an object.";
Blockly.Msg.NODE_OBJECT_SET_WARNING = "Nested properties can only be set with string literals.";
Blockly.Msg.NODE_LOG = "log text %1 with %2 level";
Blockly.Msg.NODE_LOG_TOOLTIP = "Log via the Node-RED function API.";
Blockly.Msg.NODE_LOG_LOG = "log";
Blockly.Msg.NODE_LOG_WARNING = "warning";
Blockly.Msg.NODE_LOG_ERROR = "error";
Blockly.Msg.NODE_LOG_DEBUG = "debug";
Blockly.Msg.NODE_LOG_TRACE = "trace";
Blockly.Msg.NODE_MSG = "msg";
Blockly.Msg.NODE_MSG_TOOLTIP = "Get the Node-RED input message.";
Blockly.Msg.NODE_REMOVE_STATUS = "remove node status";
Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP = "Remove the node status via the Node-RED function API.";
Blockly.Msg.NODE_CLONE = "clone %1";
Blockly.Msg.NODE_CLONE_TOOLTIP = "Clone the message via the Node-RED function API.";
Blockly.Msg.NODE_STATUS = "set node status to text %1 to color %2 and shape %3";
Blockly.Msg.NODE_STATUS_TOOLTIP = "Set the node status via the Node-RED function API.";
Blockly.Msg.NODE_STATUS_RING = "ring";
Blockly.Msg.NODE_STATUS_DOT = "dot";
Blockly.Msg.NODE_PROPERTIES = "get node %1";
Blockly.Msg.NODE_PROPERTIES_TOOLTIP = "Get the specified node property via the Node-RED function API.";
Blockly.Msg.NODE_PROPERTIES_ID = "identifier";
Blockly.Msg.NODE_PROPERTIES_NAME = "name";
Blockly.Msg.NODE_PROPERTIES_OUTPUT_COUNT = "output count";
Blockly.Msg.NODE_PROPERTIES_PATH = "path";
Blockly.Msg.NODE_FLOW_MEMORY = "flow";
Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP = "Access the data in the Node-RED flow memory.";
Blockly.Msg.NODE_CONTEXT_MEMORY = "(node) context";
Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP = "Access the data in the Node-RED (node) context memory.";
Blockly.Msg.NODE_GLOBAL_MEMORY = "global";
Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP = "Access the data in the Node-RED global memory.";
Blockly.Msg.NODE_SEND = "send %1 to output %2";
Blockly.Msg.NODE_SEND_TOOLTIP = "Send output message via the Node-RED function API.";
Blockly.Msg.NODE_SEND_WARNING = "When sending messages in a loop,\nmake sure the messages are unique!";
Blockly.Msg.NODE_RETURN_MESSAGE = "return %1 to output %2";
Blockly.Msg.NODE_RETURN_MESSAGE_TOOLTIP = "Send output message and return to stop processing";
Blockly.Msg.NODE_RETURN = "return";
Blockly.Msg.NODE_RETURN_TOOLTIP = "Return to stop processing (without sending a message)";
Blockly.Msg.NODE_CLOSE = "On node closed";
Blockly.Msg.NODE_CLOSE_1 = "%1";
Blockly.Msg.NODE_CLOSE_TOOLTIP = "Statements that should be executed when the node is being closed.";
Blockly.Msg.NODE_DONE = "message done";
Blockly.Msg.NODE_DONE_TOOLTIP = "Handling the message has been finished.";
Blockly.Msg.NODE_ENV = "get environment variable %1";
Blockly.Msg.NODE_ENV_TOOLTIP = "Access the value of an environment variable.";

// =========================================================================================
// Buffer blocks
// =========================================================================================
Blockly.Msg.BUFFER_FROM_STRING = "generate buffer from string %1 with encoding %2";
Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP = "Generate a buffer from a string.";
Blockly.Msg.BUFFER_TO_STRING = "generate string from buffer %1 with encoding %2";
Blockly.Msg.BUFFER_TO_STRING_TOOLTIP = "Generate a string from a buffer.";
Blockly.Msg.BUFFER_FROM_LIST = "generate buffer from list %1";
Blockly.Msg.BUFFER_FROM_LIST_TOOLTIP = "Generate a buffer from a list.";
Blockly.Msg.BUFFER_TO_LIST = "generate list from buffer %1";
Blockly.Msg.BUFFER_TO_LIST_TOOLTIP = "Convert a buffer to a string.";
Blockly.Msg.BUFFER_LENGTH = "get length of buffer %1";
Blockly.Msg.BUFFER_LENGTH_TOOLTIP = "Get the buffer length in bytes.";
Blockly.Msg.BUFFER_ALLOC = "create buffer with length %1";
Blockly.Msg.BUFFER_ALLOC_TOOLTIP = "Create a buffer with the specified length.";
Blockly.Msg.BUFFER_FILL = "fill buffer %1 with value %2";
Blockly.Msg.BUFFER_FILL_TOOLTIP = "Fill a buffer with the specified value.";
Blockly.Msg.BUFFER_CHECK = "check if buffer %1";
Blockly.Msg.BUFFER_CHECK_TOOLTIP = "Check if the input value is a buffer.";
Blockly.Msg.BUFFER_COPY = "copy from buffer %1 to buffer %2";
Blockly.Msg.BUFFER_COPY_TOOLTIP = "Copy from the first buffer to the second buffer.";
Blockly.Msg.BUFFER_CONCATENATE = "concatenate buffer %1 and %2";
Blockly.Msg.BUFFER_CONCATENATE_TOOLTIP = "Concatenate the two buffers to create a new buffer.";
Blockly.Msg.BUFFER_EMPTY = "empty buffer";
Blockly.Msg.BUFFER_EMPTY_TOOLTIP = "Create an empty buffer, i.e. buffer with size 0.";
Blockly.Msg.BUFFER_BYTE = "byte %1";
Blockly.Msg.BUFFER_BYTE_TOOLTIP = "A byte value.";
Blockly.Msg.BUFFER_GET_INDEX = "get value at index %1 of buffer %2";
Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP = "Get the value of the specified buffer index.";
Blockly.Msg.BUFFER_SET_INDEX = "set byte at index %1 of buffer %2 to value %3";
Blockly.Msg.BUFFER_SET_INDEX_TOOLTIP = "Set the byte value of the specified buffer index.";

// =========================================================================================
// Objects (JSON) blocks
// =========================================================================================
Blockly.Msg.OBJECT_FROM_JSON = "get object from JSON text %1";
Blockly.Msg.OBJECT_FROM_JSON_TOOLTIP = "Create an object from JSON formatted text string.";
Blockly.Msg.OBJECT_TO_JSON = "get JSON text from object %1";
Blockly.Msg.OBJECT_TO_JSON_TOOLTIP = "Create JSON formatted text string from an object.";
Blockly.Msg.OBJECT_CREATE = "create object";
Blockly.Msg.OBJECT_CREATE_TOOLTIP = "Create a new object, optionally with some property values.";
Blockly.Msg.OBJECT_FIELD_NAME = "property name";
Blockly.Msg.OBJECT_KEYS = "get keys from %1";
Blockly.Msg.OBJECT_KEYS_TOOLTIP = "Get all keys from the object.";

// =========================================================================================
// Extra blocks
// =========================================================================================
Blockly.Msg.TEXT_SPECIAL_CHARACTER = "special character %1";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TOOLTIP = "A special character that shouldn’t be escaped (by a '\\' prefix).";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_LF = "line feed (LF) (\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CR = "carriage return (CR) (\\r)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CRLF = "carriage return line feed (CRLF) (\\r\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TAB = "tab (TAB) (\\t)";
Blockly.Msg.TIMER_CONDITIONAL = "repeat every %1 seconds, until %2 %3";
Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP = "Repeat at regular intervals until a condition is fulfilled.";
Blockly.Msg.TIMER_COUNTING = "repeat %1 times every %2 seconds %3 %4";
Blockly.Msg.TIMER_COUNTING_TOOLTIP = "Repeat at regular intervals for a number of times.";
Blockly.Msg.SWITCH = "input value %1 in case of %2 do %3";
Blockly.Msg.SWITCH_TOOLTIP = "Do some things depending on the input values.";
Blockly.Msg.SWITCH_DEFAULT = "default";
Blockly.Msg.SWITCH_DEFAULT_TOOLTIP = "When there are no matching cases.";
Blockly.Msg.SWITCH_CASE = "the case is %1";
Blockly.Msg.SWITCH_CASE_TOOLTIP = "When a specific value is matched.";
Blockly.Msg.SWITCH_CASE_LIST = "in case of";
Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP = "List of all available cases.";
Blockly.Msg.SWITCH_DO = "do";
Blockly.Msg.MISC_JAVASCRIPT = "JavaScript statement %1;";
Blockly.Msg.MISC_JAVASCRIPT_TOOLTIP = "Enter JavaScript code when no blocks offer certain functionality.";
Blockly.Msg.MISC_JSEXPRESS = "JavaScript expression %1";
Blockly.Msg.MISC_JSEXPRESS_TOOLTIP = "Use with caution. Enter JavaScript code when no blocks offer certain functionality.";
Blockly.Msg.MISC_COMMENT = "comment %1";
Blockly.Msg.MISC_COMMENT_TOOLTIP = "Add comments to explain how the logic works.";
Blockly.Msg.MISC_JSMULTILINE = "multiline JS code %1";
Blockly.Msg.MISC_JSMULTILINE_TOOLTIP = "Enter multiline JavaScript code when no blocks offer certain functionality.";

// =========================================================================================
// Datetime blocks
// =========================================================================================
Blockly.Msg.DATETIME_INPUT = "date %1";
Blockly.Msg.DATETIME_INPUT_TOOLTIP = "A date.";
Blockly.Msg.DATETIME_TIMESTAMP = "%1 timestamp";
Blockly.Msg.DATETIME_TIMESTAMP_TOOLTIP = "Get the current timestamp (i.e. date and time of now).";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE = "get %1 from timestamp %2";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TOOLTIP = "Get the specified information from a timestamp.";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_NR = "timestamp format";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MSEC = "milliseconds";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_SEC = "seconds";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MIN = "minutes";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_HOUR = "hour";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY = "day";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_OF_WEEK = "day of week";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH = "month";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_YEAR = "year";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TEXT = "date";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_FULL = "full date";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_NAME = "day name";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH_NAME = "month name";
Blockly.Msg.DATETIME_CONVERT_TO_DATE = "create date from %1";
Blockly.Msg.DATETIME_CONVERT_TO_DATE_TOOLTIP = "Create a date from the specified value.";
Blockly.Msg.DATETIME_FORMAT = "convert timestamp %1 to format %2";
Blockly.Msg.DATETIME_FORMAT_TOOLTIP = "Convert a timestamp to a specified format.";
Blockly.Msg.DATETIME_UTC = "UTC";
Blockly.Msg.DATETIME_LOCAL = "local";

// =========================================================================================
// Timer blocks
// =========================================================================================
Blockly.Msg.TIMER_SET_TIMEOUT = "execute timeout %1 in %2 %3";
Blockly.Msg.TIMER_SET_TIMEOUT_1 = "%1";
Blockly.Msg.TIMER_SET_TIMEOUT_NAME = "timeout";
Blockly.Msg.TIMER_SET_TIMEOUT_TOOLTIP = "Execute the included blocks after a specified time delay.";
Blockly.Msg.TIMER_CLEAR_TIMEOUT = "stop timeout %1";
Blockly.Msg.TIMER_CLEAR_TIMEOUT_TOOLTIP = "Cancel the execution after the timeout.";
Blockly.Msg.TIMER_SET_INTERVAL = "execute interval %1 every %2 %3";
Blockly.Msg.TIMER_SET_INTERVAL_1 = "%1";
Blockly.Msg.TIMER_SET_INTERVAL_NAME = "interval";
Blockly.Msg.TIMER_SET_INTERVAL_TOOLTIP = "Execute the included blocks periodically at the specified time interval.";
Blockly.Msg.TIMER_CLEAR_INTERVAL = "stop interval %1";
Blockly.Msg.TIMER_CLEAR_INTERVAL_TOOLTIP = "Cancel the block execution at intervals.";
Blockly.Msg.TIMER_TIMER_MS = "msec";
Blockly.Msg.TIMER_TIMER_SEC = "sec";
Blockly.Msg.TIMER_TIMER_MIN = "min";
Blockly.Msg.TIMER_NONE_SELECTED = "none";
