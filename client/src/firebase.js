import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBoshUYnXUquyfJZf9QYSBt9tzcPYmAXoY',
    authDomain: 'whatsapp-clone-91fcb.firebaseapp.com',
    projectId: 'whatsapp-clone-91fcb',
    storageBucket: 'whatsapp-clone-91fcb.firebasestorage.app',
    messagingSenderId: '290539573480',
    appId: '1:290539573480:web:eea8271909b0b9dc42795d'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
