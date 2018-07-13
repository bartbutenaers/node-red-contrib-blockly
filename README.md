# node-red-contrib-blockly
A Node Red node for visual programming a function using Blockly.

Thanks to Andrew Marshall, Mark Friedman and Erik Pasternak for their assistance with my Blockly issues!

## Install
Run the following npm command in your Node-RED user directory (typically ~/.node-red):
```
npm install node-red-contrib-blockly
```

## Example usage
The following animation shows how the payload of a input message can be read, to display a status on the Blockly node:

![Config screen](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_intro.gif)

## Blockly basics
[Blockly](https://developers.google.com/blockly/) is a visual block programming language (and editor), maintained by Google.  A lot of documentation (tutorials, videos, ...) can be found on the internet, but here are some bascis to get you started:
+ A block can have a *value input* at the right side or a *value output* at the left side or both:

    ![Value input output](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_values.png)
    
+ A value input can be *inline* or *external*:

    ![Inline or external](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_inline.png)
    
    For an inline value input, the next block will be inside the previous block.  For an external value input, the next block will be after the previous block:
    
    ![Inline or external example](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_inline_example.png)    
    
+ A *statement* is created by connecting value inputs and value outputs together horizontally, to pass data from the outputs to the inputs:

    ![Statement](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_statement.png)
   
  In this example the Node-Red input message is cloned, and then the cloned message is send to output 1 of your Blockly node.  
  
  Which means you have to read the flow from the right to the left ...
  
  Caution: the *data type* requested by a value input should be equal to the data type offered by the value output.  Otherwise you cannot connect the value output to the value input!
  
+ A block can have properties to change the behaviour of the block:

    ![Block properties](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_properties.png) 
  
+ A block can have a *statement input* at the top side or a *statement output* at the bottom side or both:

    ![Statement input output](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_statement_input.png) 
    
    Remark: a block can have multiple inputs.
    
+ A *program* (or *statement stack*) is created by connecting statement inputs and statement outputs together vertically, to specify the order in which the statements needs to be executed:

    ![Statements stack](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_statements_program.png) 

    In this example we start by showing a green node status "Re-sending started".  Afterwards the input message is cloned 10 times and sended to the output port, and every time a log is written to the console "Logging that the message has been resended".  And we end by showing a green node status "Re-sending completed".
    
    Which means you have to read the flow from the top to the bottom ...
    
Congratulations, you have now written your first Blockly program inside Node-Red ...

## Config screen
The node's config screen consists out of a series of elements:

![Config screen](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_screen.png)

1. The **library** button is similar to the standard *function node*: the code from this Blockly node can be made globally available by adding it to a libary.  That library will be stored withing the 'libs' directory in your node-red user directory.
2. The **editor** tabsheet displays a Blockly workspace editor.  Here blocks can be added, which will be converted afterwards to Javascript code.
3. The **generated Javascript** tabsheets will display the Javascript code, which is generated based on the blocks in the Blockly editor.  This code is readonly, which means you cannot change it!  Reason is that it is *not possible* to generate Blockly blocks, starting from Javascript code ...
4. The **language** dropdown offers all available languages.  The texts in the blocks will be translated in the specified language.  This option is currently ***not available yet***!
5. The Blockly **toolbox** shows all available blocks, grouped by category.
6. The Blockly **editable area** shows all the blocks representing your custom logic.  Blocks can be dragged from the toolbox into the area.  Some user interaction is offered in this area:
    + When pressing the delete button, the selected blocks will be removed.  
    + By clicking and dragging with the mouse, the user can start panning to alter which part of the area is being visualised.  
    + By clicking on a block and dragging with the mouse, the block (and all of its's chained next blocks) will be moved.
    + By using ctrl-c and ctrl-v the selected block will be copied.  When the block is connected to next blocks, the entire block chain will be copied.
    + By using ctrl-z the last action will be undone.
    + ...
Remark: the toolbox and the editable area together are called a *'workspace'.
7. The **center* button allows the available blocks to be centered in the middle of visible workspace area.
8. The **zoom in** button.
9. The **zoom out** button.
10. The number of **output ports** for the Blockly node in the Node-Red flow editor.  Make sure that this number doesn't exceed the output port number of the *'send'* block (see below).

## Node usage
The Blockly node can be used to visually design your logic, by dragging blocks on your workspace editor.  The standard *function node* will offer much more functionality, since this Blockly node doesn't offer all Javascript functionality.  However the Blockly node can be useful for users that are struggling with the Javascript programming language.  The generated Javascript code can be visualised in the second tabsheet, which offers a nice way to getting started with the Javascript basics.  The generated code could also be copied to a standard function node, and extend it there with other Javascript code (manually entered).

As soon as the the Node-Red flow is deployed, the generated Javascript code will run on the Node-Red flow (similar to a standard function node).

## Node-Red blocks
When writing Javascript code in a standard *function node*, some Node-Red functionality can be called from within that code (see function node [API](https://nodered.org/docs/writing-functions#api-reference)).  To offer the same functionality in the Blockly editor, a series of extra blocks have been added.  These blocks are availble in the 'Node-Red' category in the toolbox:

![Function API](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-blockly/master/images/blockly_api.png)

1. **Log** in the console the text, which is specified on the block input.  Multiple log levels are availble (log, error, warning, trace, debug).  The warnings and errors will also be displayed in the flow editor debug tab.  The trace and debug levels are only used to display details, and are not visible if no logger for those levels is specified in Node-Red.
2. **Send** to the specified output port the message, which is specified on the block input.  Make sure that the specified output number doesn't exceed the number of outputs on the Blockly node!
3. **Get** the value of the specified variable from the Node-Red memory.  All the available memory types can be selected (node, flow, global).
4. **Set** the value of the specified variable from the Node-Red memory to the value, which is specified on the block input.  All the available memory types can be selected (node, flow, global).
5. **Set** the Blockly node status to the text, which is specified on the block input.  Both the status icon shape and color can be specified.
6. The **input message** exposes the input message that arrive's in the Node-Red flow, on the Blockly node input port.
7. **Clone message** can be used to create a new separate copy of the message on the block input.
8. **Get all keys** from the specified Node-Red memory, i.e. all available variable names.  All the available memory types can be selected (node, flow, global).
9. Get the specified **node property**.  Starting from Node-Red ***version 0.19*** both the Blockly node identifier, and the Blockly node name can be retrieved.
