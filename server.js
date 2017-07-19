var app = require('express')();

var server = require('http').createServer(app);

// var io = require('socket.io').listen(server);
var io = require('socket.io')(server);

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server Running...');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/score', function(req, res){
    res.sendFile(__dirname + '/score.html');
});


io.sockets.on('connection', function(socket){

    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    io.sockets.emit('new message', {
        msg: '99',
        connectedUsers: connections.length
    });

    /* Disconnect */
    socket.on('disconnect', function(data){
        connections.splice(connections.indexOf(socket),1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('send message', function(data){
        console.log(data);

        io.sockets.emit('new message', {
            msg: data,
            connectedUsers: connections.length
        });
    });

});
