const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const { createServer } = require("http");

setGlobalOptions({ timeoutSeconds: 3600 });

// Crear httpServer sin listen() solo para inicializar socket.io internamente
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: { origin: "*" },
    transports: ["polling"],
});

const app = express();
app.use(cors({ origin: true }));

let usuariosConectados = [];

io.on("connection", (socket) => {
    socket.on("join", (user) => {
        socket.user = { ...user, id: socket.id };
        usuariosConectados.push(socket.user);
        io.emit("actualizar usuarios", usuariosConectados);
        io.emit("chat message", {
        system: true,
        text: `${user.name} se ha unido al chat`,
        });
    });

    socket.on("chat message", (msg) => {
        if (socket.user) {
        io.emit("chat message", { user: socket.user, text: msg });
        }
    });

    socket.on("escribiendo", (activo) => {
        if (socket.user) {
            socket.broadcast.emit("usuario escribiendo", {
            user: socket.user,
            estado: activo,
            });
        }
    });

    socket.on("disconnect", () => {
        if (socket.user) {
        usuariosConectados = usuariosConectados.filter(
            (u) => u.id !== socket.user.id
        );
        io.emit("actualizar usuarios", usuariosConectados);
        io.emit("chat message", {
            system: true,
            text: `${socket.user.name} ha salido del chat.`,
        });
        }
    });
});

// Redirigir peticiones de socket.io al engine
app.use((req, res, next) => {
    if (req.path.startsWith("/socket.io")) {
        io.engine.handleRequest(req, res);
    } else {
        next();
    }
});

exports.api = onRequest({ timeoutSeconds: 3600 }, app);
