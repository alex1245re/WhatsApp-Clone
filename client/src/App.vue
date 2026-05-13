<script setup>
import { ref, onUnmounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import socket from './socket.js'
import LoginView from './components/LoginView.vue'
import ChatView from './components/ChatView.vue'

const currentUser  = ref(null)
const initializing = ref(true)

const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
    if (!initializing.value) return  // solo actuar en la carga inicial (refresco de página)
    if (firebaseUser) {
        const saved = localStorage.getItem(`user_${firebaseUser.uid}`)
        if (saved) {
            try { currentUser.value = JSON.parse(saved) }
            catch { currentUser.value = null }
        } else {
            currentUser.value = null
        }
    } else {
        currentUser.value = null
    }
    initializing.value = false
})

onUnmounted(unsubscribeAuth)

function handleLogin(user) {
    currentUser.value = user
    localStorage.setItem(`user_${user.uid}`, JSON.stringify(user))
}

function handleLogout() {
    if (currentUser.value?.uid) localStorage.removeItem(`user_${currentUser.value.uid}`)
    currentUser.value = null
}
</script>

<template>
    <div v-if="initializing" class="app-loading">Cargando...</div>
    <LoginView  v-else-if="!currentUser" @login="handleLogin" />
    <ChatView   v-else :socket="socket" :current-user="currentUser" @logout="handleLogout" />
</template>
