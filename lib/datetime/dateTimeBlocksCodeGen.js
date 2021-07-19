Blockly.JavaScript['datetime_input'] = function(block) {
    const date = block.getFieldValue('DATE');
    
    // The Blockly field_date block returns a date with format yyyy-mm-dd, which can be passed directly to the Date constructor
    var code = 'new Date(' + date + ')';
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['datetime_timestamp'] = function (block) {
    // In the old version there was no timezone, so it was UTC by default
    const format = block.getFieldValue('TIMEZONE') || "utc";
    
    var code;
    
    switch (format) {
        case "utc":
            code = 'new Date().getTime()';
            break;
        case "local":
            code = 'new Date().getTime() - new Date().getTimezoneOffset() * 60000';
            break;
    }

    return [code, Blockly.JavaScript.ORDER_ATOMIC]; 
};

Blockly.JavaScript['datetime_convert_from_date'] = function (block) {
    const value = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    const format = block.getFieldValue('FORMAT');
    
    // Convert the language (e.g. 'en') from the node editor dropdown to e.g. 'en-EN'.
    // TODO check if this is correctly ???
    var language = Blockly.blocklyEditorLanguage + '-' + Blockly.blocklyEditorLanguage.toUpperCase();

    var code;

    switch (format) {
        case 'year':
            code = 'new Date(' + value + ').getFullYear()';
            break;
        case 'month':
            // First month will be 1 (instead of 0), since Blockly is 1-based (unlike Javascript which is 0-based)
            code = '(new Date(' + value + ').getMonth() + 1)';
            break;
        case 'day':
            code = 'new Date(' + value + ').getDate()';
            break;
        case 'hour':
            code = 'new Date(' + value + ').getUTCHours()';
            break;
        case 'min':
            code = '(new Date(' + value + ').getMinutes())';
            break;
        case 'sec':
            code = 'new Date(' + value + ').getSeconds()';
            break;
        case 'msec':
            code = 'new Date(' + value + ').getMilliseconds()';
            break;
        case 'msec':
            code = 'new Date(' + value + ').getMilliseconds()';
            break;
        case 'msec':
            code = 'new Date(' + value + ').getMilliseconds()';
            break;
        case 'text':
            // Create a human readable text like 'Sat 8 Sep 2018 22:45'
            code = 'new Date(' + value + ').toLocaleDateString("en-EN", {weekday: "short", day: "numeric", month: "short", year: "numeric", hour:"numeric", minute:"numeric", timeZone: "UTC", hour12: false}).replace(/,/g, "")';
            break;
        case 'full_date':
            code = 'new Date(' + value + ').toISOString().replace("T", " ").replace("Z", "")';
            break;
        case 'month_name':
            code = 'new Date(' + value + ').toLocaleDateString("en-EN", {month: "long", timeZone: "UTC"})';
            break;                         
        case 'day_name':
            code = 'new Date(' + value + ').toLocaleDateString("en-EN", {weekday: "long", timeZone: "UTC"})';
            break;             
        case 'dayofweek':
            // Normally Sunday is day 0, but since Blockly is 1-based we will increment the day number with 1
            code = 'new Date(' + value + ').getDay() + 1';
            break;            
        case 'number':
            // The number of milliseconds since 1 January 1970 00:00:00
            code = 'new Date(' + value + ').getTime()';
            break;
    }

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/* The generated function in this block is not ready yet
Blockly.JavaScript['datetime_format'] = function (block) {
    const input = Blockly.JavaScript.valueToCode(block, "INPUT", Blockly.JavaScript.ORDER_NONE);
    const format = Blockly.JavaScript.valueToCode(block, "FORMAT", Blockly.JavaScript.ORDER_NONE);
    
    // Generate a function that can format the date, which is not available in Javascript ...
    // We could avoid this e.g. by calling a library (like Moment.js).  However to be able to call that functionality from 
    // our sandbox, we should do a couple of things:
    // - To be able to simply generate a 'require(moment);' in our code, the user should manually add the 'moment' node to 
    //   his Node-RED settings file.  Don't think that is user-friendly, especially for novice users ...
    // - To avoid the user having to update his settings file, we could:
    //       * Add the 'moment' node as an automatic dependency for the blockly node.
    //       * Do a 'require(moment);' in our blockly node.
    //       * Add a 'moment' function to our sandbox, so it becomes automatically available in the generated code.
    //   This will work fine until the user copies the code to a function node.  Since the function node sandbox doesn't
    //   contain the 'moment' function, it will give syntax errors.  This will be very confusing for novice users.
    // Therefore I have decided to generate a function that contains the required logic, so the generated code will become longer.
    // See https://weblog.west-wind.com/posts/2008/Mar/18/A-simple-formatDate-function-for-JavaScript
    var functionCode = ['function formatDate(date, format) {',
                        '  var month = date.getMonth() + 1;', // Month is zero-based
                        '  var year = date.getFullYear();',
                        '  var hours = date.getHours();',
                        '  format = format.replace("MM",("0" + month).substr(-2));', 
                        '  format = format.replace("yyyy",year.toString());',
                        '  format = format.replace("yy",year.toString().substr(2,2));',
                        '  format = format.replace("dd",("0" + date.getDate()).substr(-2));',
                        '  format = format.replace("t",(hours > 11) ? "pm" : "am");',
                        '  format = format.replace("HH",("0" + hours).substr(-2));',
                        '  if (hours > 12) hours = hours - 12;',
                        '  if (hours === 0) hours = 12;',
                        '  format = format.replace("hh",("0" + hours).substr(-2));',     
                        '  format = format.replace("mm",("0" + date.getMinutes()).substr(-2));',
                        '  format = format.replace("ss",("0" + date.getSeconds()).substr(-2));',
                        '  return format;',
                        '}'];
    Blockly.JavaScript.provideFunction_('formatDate', functionCode);
    
    var code = 'formatDate(' + input + ' ,' + format + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
*/
