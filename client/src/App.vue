<script setup>
import { ref } from 'vue'
import { io } from 'socket.io-client'
import LoginView from './components/LoginView.vue'
import ChatView from './components/ChatView.vue'

const socket = io({ transports: ['polling'] })
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
