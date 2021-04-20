const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = 3000;

var allClients = [];

server.listen(port, () => {
    console.log("server running on port: " + port);
});

io.of('/rooms').on('connection', (socket) => {
    // console.log("Player connected " + socket.id)
    allClients.push(socket);    
    allClients.forEach(client => {
        console.log('Kullanıcı: ' + client.id);
    });
    socket.on('joinRoom', function(data) {
        console.log('Joining room: ', data.roomname);
        
        // joining
        socket.join(data.roomname, function(){
            var users = [];
            users.push(data.username);
            console.log('Join success to ' + data.roomname);
            let rooms = Object.keys(socket.rooms);
            console.log(rooms);
            socket.emit('joinSuccess', {
                username: data.username,
                roomname: data.roomname,
            });            
            io.of('/rooms').to(data.roomname).emit('userJoined', {
                username: data.username,
                usersInLobby: users,                
            });  
            io.of('/rooms').in(data.roomname).clients((error, clients) => {
                if (error) throw error;
                console.log('Kullanıcılar: '+clients);
          });       
        });
    });

    socket.on('start', (data) => {
        console.log('Game started');        
        io.of('rooms').to(data.roomname).emit('startGame', {});  
    });

    socket.on('disconnect', function () {
        console.log("Player disconnected")

        var i = allClients.indexOf(socket);
        allClients.splice(i, 1);
    });

});