# WhatsApp Clone

Aplicación de chat en tiempo real inspirada en WhatsApp, con autenticación Firebase, mensajes persistentes en Firestore y avatares personalizados.

**Demo en vivo:** https://whatsapp-clone-91fcb.web.app

---

## Tecnologías

| Capa | Stack |
|------|-------|
| Frontend | Vue 3 + Vite |
| Backend | Node.js + Express 5 + Socket.io 4 |
| Auth | Firebase Auth (Google + Email/Password) |
| Base de datos | Firestore (últimos 50 mensajes) |
| Deploy frontend | Firebase Hosting |
| Deploy backend | Railway |

---

## Características

- Autenticación con Google o email/contraseña
- Chat en tiempo real con Socket.io
- Indicador de "está escribiendo..."
- Lista de usuarios conectados en el sidebar
- Avatar personalizado: foto propia, foto de Google o emoji
- Redimensionado automático de fotos a 80×80 JPEG (Canvas API)
- Historial de los últimos 50 mensajes cargado al entrar
- Mensajes de sistema al unirse/salir
- Perfil guardado en `localStorage` (nombre, estado, avatar)

---

## Estructura del proyecto

```
/
├── server.js              # Backend Express + Socket.io
├── server/
│   └── firebaseAdmin.js   # Firebase Admin SDK (Firestore)
├── client/                # Frontend Vue 3
│   └── src/
│       ├── App.vue
│       ├── firebase.js
│       ├── socket.js
│       └── components/
│           ├── LoginView.vue
│           └── ChatView.vue
├── package.json
└── railway.toml
```

---

## Instalación local

### Requisitos previos
- Node.js 18+
- Firebase CLI (`npm install -g firebase-tools`)
- Archivo `server/serviceAccountKey.json` (clave de servicio de Firebase)

### Pasos

```bash
# 1. Instalar dependencias del backend
npm install

# 2. Instalar dependencias del frontend
cd client && npm install && cd ..

# 3. Ejecutar en modo desarrollo (backend + frontend)
npm run dev
```

El frontend se levanta en `http://localhost:5173` y el backend en `http://localhost:3000`.

---

## Variables de entorno

### Backend (Railway / `.env`)

| Variable | Descripción |
|----------|-------------|
| `FIREBASE_SERVICE_ACCOUNT` | Service account en base64: `base64 serviceAccountKey.json` |
| `CLIENT_ORIGIN` | URL del frontend, ej: `https://whatsapp-clone-91fcb.web.app` |
| `PORT` | Puerto del servidor (Railway lo asigna automáticamente) |

### Frontend (`client/.env`)

| Variable | Descripción |
|----------|-------------|
| `VITE_SERVER_URL` | URL del backend, ej: `https://whatsapp-clone-production-65fc.up.railway.app` |

---

## Scripts disponibles

```bash
npm run dev              # Backend + frontend en paralelo (desarrollo)
npm run dev:server       # Solo backend con nodemon
npm run dev:client       # Solo frontend con Vite
npm run build            # Build de producción del frontend
npm run deploy:hosting   # Build + deploy a Firebase Hosting
npm run deploy:rules     # Deploy de reglas/índices de Firestore
```

---

## Deploy

### Frontend → Firebase Hosting
```bash
npm run deploy:hosting
```

### Backend → Railway
Railway detecta automáticamente los pushes a `main` y redeploya usando `railway.toml`.

---

## Autor

**alejandro felipe diaz** · [GitHub](https://github.com/alex1245re/WhatsApp-Clone)

