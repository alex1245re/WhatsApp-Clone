const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('node:http');


const app = express();
const port = 3000;
const server = createServer(app);
const io = new Server(server);
app.use(express.static('public'));
var count = 0;
var user = '';

io.on('connection', (socket) => {
    
    socket.on('join', (user) => {
        socket.user = user;
        io.emit('chat message',{
            system: true,
            text: `${user.name} se ha unido al chat`
        });
    });

    socket.on('chat message', (msg) => {
        if (socket.user) {
        io.emit('chat message', {
            user: socket.user,
            text: msg
        });
        }
    });

    socket.on('disconnect', () => {
        if (socket.user) {
            io.emit('chat message', {
                system: true,
                text: `${socket.user.name} ha salido del chat.`
            });
        }
    });
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
