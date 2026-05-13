const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('node:http');
const cors = require('cors');
const { db } = require('./server/firebaseAdmin');

const app = express();
const port = process.env.PORT || 3000;

// En producción acepta peticiones desde el dominio de Firebase Hosting
const allowedOrigins = process.env.CLIENT_ORIGIN
    ? [process.env.CLIENT_ORIGIN]
    : ['http://localhost:5173', 'http://localhost:4173'];

app.use(cors({ origin: allowedOrigins, methods: ['GET', 'POST'] }));

app.get('/', (_req, res) => res.send('OK'));

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        methods: ['GET', 'POST']
    }
});

// Helper Firestore: añade doc sin bloquear ni romper si no está disponible
const fsAdd = (ref, data) => db ? ref.add(data).catch(e => console.error('[Firestore]', e.message)) : null;

let usuariosConectados = [];

io.on('connection', (socket) => {
    socket.on('join', async (user) => {
        socket.user = user;
        socket.user.id = socket.id;

        // Eliminar entrada previa del mismo usuario (reconexión) O del mismo socket (re-login en misma pestaña)
        usuariosConectados = usuariosConectados.filter(u => u.uid !== user.uid && u.id !== socket.id);
        usuariosConectados.push(socket.user);
        io.emit('actualizar usuarios', usuariosConectados);

        // Cargar últimos 50 mensajes de Firestore para el nuevo usuario
        if (db) {
            try {
                const snap = await db.collection('messages')
                    .orderBy('timestamp', 'asc')
                    .limitToLast(50)
                    .get();
                const msgs = snap.docs.map(d => d.data());
                socket.emit('cargar mensajes', msgs);
            } catch (e) {
                console.error('[Firestore]', e.message);
            }
        }

        io.emit('chat message', {
            system: true,
            text: `${user.name} se ha unido al chat`
        });
    });

    socket.on('chat message', (msg) => {
        if (socket.user) {
            const message = { user: socket.user, text: msg };
            io.emit('chat message', message);
            fsAdd(db?.collection('messages'), { ...message, timestamp: new Date() });
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
