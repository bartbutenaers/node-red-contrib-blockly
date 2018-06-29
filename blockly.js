//var express=require("express");

//var bodyParser = require('body-parser');

module.exports = function(RED) {
    var util = require("util");
    var vm = require("vm");
    

    
    function BlocklyNode(config) {
        RED.nodes.createNode(this,config);
        
        var node = this;
        
        this.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }	

    RED.nodes.registerType("Blockly",BlocklyNode);
     
    // Make all the static resources from this node public available (i.e. third party JQuery plugin tableHeadFixer.js).
    RED.httpAdmin.get('/blocky/js/*', function(req, res){
        var options = {
            root: __dirname + '/lib/',
            dotfiles: 'deny'
        };
       
        // Send the requested file to the client (in this case it will be tableHeadFixer.js)
        res.sendFile(req.params[0], options)
    });
}
