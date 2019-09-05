var express = require('express');
var app = express();
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.listen(8000, function(){
    console.log('listening on *:8000');
});