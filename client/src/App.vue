<script setup>
import { ref } from 'vue'
import socket from './socket.js'
import LoginView from './components/LoginView.vue'
import ChatView from './components/ChatView.vue'
const currentUser = ref(null)

function handleLogin(user) {
    currentUser.value = user
}

function handleLogout() {
    currentUser.value = null
}
</script>

<template>
    <LoginView v-if="!currentUser" @login="handleLogin" />
    <ChatView v-else :socket="socket" :current-user="currentUser" @logout="handleLogout" />
</template>
