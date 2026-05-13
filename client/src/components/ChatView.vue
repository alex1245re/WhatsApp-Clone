<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.js'

const props = defineProps(['socket', 'currentUser'])
const emit = defineEmits(['logout'])

async function handleSignOut() {
    await signOut(auth)
    emit('logout')
}

const messages = ref([])
const usuarios = ref([])
const inputText = ref('')
const escribiendoText = ref('')

const usuariosEscribiendo = new Set()
let escribiendoTimeout = null

function actualizarEscribiendo() {
    if (usuariosEscribiendo.size === 0) {
        escribiendoText.value = ''
    } else if (usuariosEscribiendo.size === 1) {
        escribiendoText.value = `${Array.from(usuariosEscribiendo)[0]} está escribiendo...`
    } else {
    escribiendoText.value = 'Varios usuarios están escribiendo...'
    }
}

function scrollToBottom() {
    nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })
}

function handleInput() {
    props.socket.emit('escribiendo', true)
    clearTimeout(escribiendoTimeout)
    escribiendoTimeout = setTimeout(() => {
        props.socket.emit('escribiendo', false)
    }, 1500)
}

function sendMessage() {
    if (inputText.value && props.currentUser) {
        props.socket.emit('chat message', inputText.value)
        props.socket.emit('escribiendo', false)
        inputText.value = ''
    }
}

onMounted(() => {
    props.socket.on('actualizar usuarios', (data) => {
        usuarios.value = data
    })

    props.socket.on('usuario escribiendo', (data) => {
        if (data.estado) {
            usuariosEscribiendo.add(data.user.name)
        } else {
            usuariosEscribiendo.delete(data.user.name)
        }
    actualizarEscribiendo()
})

    props.socket.on('chat message', (data) => {
        messages.value.push(data)
        scrollToBottom()
    })
})

onUnmounted(() => {
    props.socket.off('actualizar usuarios')
    props.socket.off('usuario escribiendo')
    props.socket.off('chat message')
})
</script>

<template>
    <div id="app-container">
        <div id="sidebar">
        <div class="sidebar-header">
            <h3>Usuarios Conectados</h3>
            <button @click="handleSignOut" class="signout-btn">Salir ↩</button>
        </div>
        <ul id="listausuarios">
            <li v-for="usuario in usuarios" :key="usuario.id">
                <span class="user-list-avatar">{{ usuario.avatar }}</span>
                <div class="user-list-info">
                <strong>{{ usuario.name }}</strong>
                <span>{{ usuario.status }}</span>
                </div>
            </li>
        </ul>
    </div>

    <div id="chat-container">
        <ul id="messages">
            <li
            v-for="(msg, index) in messages"
            :key="index"
            :class="{
                'system-msg': msg.system,
                'my-message': !msg.system && currentUser && msg.user.name === currentUser.name
            }"
            >
            <template v-if="msg.system">{{ msg.text }}</template>
            <template v-else>
                <div class="avatar">{{ msg.user.avatar }}</div>
                <div class="msg-content">
                    <div class="msg-header">
                    <strong>{{ msg.user.name }}</strong>
                    <span>{{ msg.user.status }}</span>
                    </div>
                <div class="msg-text">{{ msg.text }}</div>
                </div>
            </template>
            </li>
        </ul>
        <div id="escribiendo">{{ escribiendoText }}</div>
        <form id="form" @submit.prevent="sendMessage">
            <input
            id="input"
            v-model="inputText"
            placeholder="Escribe un mensaje..."
            @input="handleInput"
            />
            <button type="submit">Enviar</button>
        </form>
    </div>
</div>
</template>
