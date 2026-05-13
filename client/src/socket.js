import { io } from 'socket.io-client'

const urlServidor = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

export default io(urlServidor.startsWith('http') ? urlServidor : `https://${urlServidor}`, {
  transports: ['websocket', 'polling']
})
