import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'

const configuracionFirebase = {
    apiKey: 'AIzaSyBoshUYnXUquyfJZf9QYSBt9tzcPYmAXoY',
    authDomain: 'whatsapp-clone-91fcb.firebaseapp.com',
    projectId: 'whatsapp-clone-91fcb',
    storageBucket: 'whatsapp-clone-91fcb.firebasestorage.app',
    messagingSenderId: '290539573480',
    appId: '1:290539573480:web:eea8271909b0b9dc42795d'
}

const appFirebase = initializeApp(configuracionFirebase)

export const auth = getAuth(appFirebase)
export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()
