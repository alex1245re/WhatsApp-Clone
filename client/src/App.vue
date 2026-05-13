<script setup>
import { ref, onUnmounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import socket from './socket.js'
import LoginView from './components/LoginView.vue'
import ChatView from './components/ChatView.vue'

const usuarioActual  = ref(null)
const cargando = ref(true)

const cancelarEscuchaAuth = onAuthStateChanged(auth, (usuarioFirebase) => {
    if (!cargando.value) return  // solo actuar en la carga inicial (refresco de página)
    if (usuarioFirebase) {
        const perfilGuardado = localStorage.getItem(`user_${usuarioFirebase.uid}`)
        if (perfilGuardado) {
            try { usuarioActual.value = JSON.parse(perfilGuardado) }
            catch { usuarioActual.value = null }
        } else {
            usuarioActual.value = null
        }
    } else {
        usuarioActual.value = null
    }
    cargando.value = false
})

onUnmounted(cancelarEscuchaAuth)

function alIniciarSesion(usuario) {
    usuarioActual.value = usuario
    localStorage.setItem(`user_${usuario.uid}`, JSON.stringify(usuario))
}

function alCerrarSesion() {
    if (usuarioActual.value?.uid) localStorage.removeItem(`user_${usuarioActual.value.uid}`)
    usuarioActual.value = null
}
</script>

<template>
    <div v-if="cargando" class="app-loading">Cargando...</div>
    <LoginView  v-else-if="!usuarioActual" @login="alIniciarSesion" />
    <ChatView   v-else :socket="socket" :current-user="usuarioActual" @logout="alCerrarSesion" />
</template>
