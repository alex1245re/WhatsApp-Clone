const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('node:http');
const cors = require('cors');
const path = require('node:path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/dist')));

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

var usuariosConectados = [];

io.on('connection', (socket) => {
    socket.on('join', (user) => {
        socket.user = user;
        socket.user.id = socket.id;

        usuariosConectados.push(socket.user);

        io.emit('actualizar usuarios', usuariosConectados);
        
        io.emit('chat message', {
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

    socket.on('escribiendo', (activo) => {
        if (socket.user) {
            socket.broadcast.emit('usuario escribiendo', {
                user: socket.user,
                estado: activo
            });
        }
    });

    socket.on('disconnect', () => {
        if (socket.user) {
            usuariosConectados = usuariosConectados.filter(user => user.id !== socket.user.id);
            io.emit('actualizar usuarios', usuariosConectados);

            io.emit('chat message', {
                system: true,
                text: `${socket.user.name} ha salido del chat.`
            });
        }
    });
});

server.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
});