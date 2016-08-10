var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, '../client')));

var chatPath = 'chat-message';

io.on('connection', function(socket){
    socket.on(chatPath, function(msg){
    console.log(chatPath + ': ' + msg);
        io.emit(chatPath, msg);
    });
});

server.listen(8079, function() {
    console.log('Listening on port %s...', server.address().port);
}); 