const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('node:http');
const cors = require('cors');
const { baseDatos } = require('./server/firebaseAdmin');

const app = express();
const puerto = process.env.PORT || 3000;

const origenesPermitidos = process.env.CLIENT_ORIGIN
    ? [process.env.CLIENT_ORIGIN]
    : ['http://localhost:5173'];

app.use(cors({ origin: origenesPermitidos, methods: ['GET', 'POST'] }));

app.get('/', (_req, res) => res.send('OK'));

const servidor = createServer(app);
const io = new Server(servidor, {
    cors: {
        origin: origenesPermitidos,
        methods: ['GET', 'POST']
    }
});

function guardarMensaje(coleccion, datos) {
    if (baseDatos){
        return coleccion.add(datos).catch(error => console.error('[Firestore]', error.message));
    }
    else {
        return null;
    }
}

let usuariosConectados = [];

io.on('connection', (socket) => {
    socket.on('join', async (datosUsuario) => {
        socket.usuario = datosUsuario;
        socket.usuario.id = socket.id;

        usuariosConectados = usuariosConectados.filter(u => u.uid !== datosUsuario.uid && u.id !== socket.id);
        usuariosConectados.push(socket.usuario);
        io.emit('actualizar usuarios', usuariosConectados);

        if (baseDatos) {
            try {
                const resultados = await baseDatos.collection('messages')
                    .orderBy('timestamp', 'asc')
                    .limitToLast(50)
                    .get();
                const mensajes = resultados.docs.map(doc => doc.data());
                socket.emit('cargar mensajes', mensajes);
            } catch (error) {
                console.error('[Firestore]', error.message);
            }
        }

        io.emit('chat message', {
            system: true,
            text: `${datosUsuario.name} se ha unido al chat`
        });
    });

    socket.on('leave', () => {
        if (socket.usuario) {
            usuariosConectados = usuariosConectados.filter(u => u.id !== socket.usuario.id);
            io.emit('actualizar usuarios', usuariosConectados);
            io.emit('chat message', {
                system: true,
                text: `${socket.usuario.name} ha salido del chat.`
            });
            socket.usuario = null;
        }
    });

    socket.on('chat message', (texto) => {
        if (socket.usuario) {
            const mensaje = { user: socket.usuario, text: texto };
            io.emit('chat message', mensaje);
            guardarMensaje(baseDatos?.collection('messages'), { ...mensaje, timestamp: new Date() });
        }
    });

    socket.on('escribiendo', (estaEscribiendo) => {
        if (socket.usuario) {
            socket.broadcast.emit('usuario escribiendo', {
                user: socket.usuario,
                estado: estaEscribiendo
            });
        }
    });

    socket.on('disconnect', () => {
        if (socket.usuario) {
            usuariosConectados = usuariosConectados.filter(u => u.id !== socket.usuario.id);
            io.emit('actualizar usuarios', usuariosConectados);
            io.emit('chat message', {
                system: true,
                text: `${socket.usuario.name} ha salido del chat.`
            });
        }
    });
});

servidor.listen(puerto, () => {
    console.log(`Servidor en puerto ${puerto}`);
});
