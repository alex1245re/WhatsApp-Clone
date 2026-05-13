import { io } from 'socket.io-client'

const url = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

export default io(url.startsWith('http') ? url : `https://${url}`, {
  transports: ['websocket', 'polling']
})
