<script setup>
import { ref } from 'vue'
import { io } from 'socket.io-client'
import LoginView from './components/LoginView.vue'
import ChatView from './components/ChatView.vue'

const socket = io(import.meta.env.VITE_SOCKET_URL ?? '', { transports: ['polling'] })
const currentUser = ref(null)

function handleLogin(user) {
    currentUser.value = user
    socket.emit('join', user)
}
</script>

<template>
    <LoginView v-if="!currentUser" @login="handleLogin" />
    <ChatView v-else :socket="socket" :current-user="currentUser" />
</template>
