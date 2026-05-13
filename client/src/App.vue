<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import socket from './socket.js'
import LoginView from './components/LoginView.vue'
import ChatView from './components/ChatView.vue'

const currentUser  = ref(null)
const initializing = ref(true)   // true mientras Firebase comprueba la sesión

let unsubscribeAuth = null

onMounted(() => {
    unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            // Intentar restaurar el perfil guardado (status, avatar, etc.)
            const saved = localStorage.getItem(`wac_profile_${firebaseUser.uid}`)
            if (saved) {
                try { currentUser.value = JSON.parse(saved) }
                catch { currentUser.value = null }
            } else {
                currentUser.value = null   // sesión Firebase pero sin perfil → mostrar login
            }
        } else {
            currentUser.value = null
        }
        initializing.value = false
    })
})

onUnmounted(() => {
    if (unsubscribeAuth) unsubscribeAuth()
})

function handleLogin(user) {
    currentUser.value = user
    localStorage.setItem(`wac_profile_${user.uid}`, JSON.stringify(user))
}

function handleLogout() {
    if (currentUser.value?.uid) {
        localStorage.removeItem(`wac_profile_${currentUser.value.uid}`)
    }
    currentUser.value = null
}
</script>

<template>
    <div v-if="initializing" class="app-loading">Cargando...</div>
    <LoginView  v-else-if="!currentUser" @login="handleLogin" />
    <ChatView   v-else :socket="socket" :current-user="currentUser" @logout="handleLogout" />
</template>
