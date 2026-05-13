<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.js'

const props = defineProps(['socket', 'currentUser'])
const emit = defineEmits(['logout'])

async function cerrarSesion() {
    props.socket.emit('leave')
    await signOut(auth)
    emit('logout')
}

const mensajes = ref([])
const usuarios = ref([])
const textoInput = ref('')
const textoEscribiendo = ref('')

const usuariosEscribiendo = new Set()
let temporizadorEscribiendo = null

function actualizarEscribiendo() {
    if (usuariosEscribiendo.size === 0) {
        textoEscribiendo.value = ''
    } else if (usuariosEscribiendo.size === 1) {
        textoEscribiendo.value = `${Array.from(usuariosEscribiendo)[0]} está escribiendo...`
    } else {
        textoEscribiendo.value = 'Varios usuarios están escribiendo...'
    }
}

function irAlFinal() {
    nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })
}

function alEscribir() {
    props.socket.emit('escribiendo', true)
    clearTimeout(temporizadorEscribiendo)
    temporizadorEscribiendo = setTimeout(() => {
        props.socket.emit('escribiendo', false)
    }, 1500)
}

function enviarMensaje() {
    if (textoInput.value && props.currentUser) {
        props.socket.emit('chat message', textoInput.value)
        props.socket.emit('escribiendo', false)
        textoInput.value = ''
    }
}

function esImagen(str) {
    return str?.startsWith('data:') || str?.startsWith('http')
}

onMounted(() => {
    props.socket.emit('join', props.currentUser)

    // Re-emitir join si el socket se reconecta (corte de red)
    props.socket.on('connect', () => {
        props.socket.emit('join', props.currentUser)
    })

    props.socket.on('cargar mensajes', (listaMensajes) => {
        mensajes.value = listaMensajes
        irAlFinal()
    })

    props.socket.on('actualizar usuarios', (listaUsuarios) => {
        usuarios.value = listaUsuarios
    })

    props.socket.on('usuario escribiendo', (datos) => {
        if (datos.estado) {
            usuariosEscribiendo.add(datos.user.name)
        } else {
            usuariosEscribiendo.delete(datos.user.name)
        }
        actualizarEscribiendo()
    })

    props.socket.on('chat message', (mensaje) => {
        mensajes.value.push(mensaje)
        irAlFinal()
    })
})

onUnmounted(() => {
    clearTimeout(temporizadorEscribiendo)
    props.socket.emit('escribiendo', false)
    for (const evento of ['connect', 'cargar mensajes', 'actualizar usuarios', 'usuario escribiendo', 'chat message']) {
        props.socket.off(evento)
    }
})
</script>

<template>
    <div id="app-container">
        <div id="sidebar">
        <div class="sidebar-header">
            <h3>Usuarios Conectados</h3>
            <button @click="cerrarSesion" class="signout-btn">Salir ↩</button>
        </div>
        <ul id="listausuarios">
            <li v-for="usuario in usuarios" :key="usuario.id">
                <span class="user-list-avatar">
                    <img v-if="esImagen(usuario.avatar)" :src="usuario.avatar" class="sidebar-avatar-img" alt="" />
                    <template v-else>{{ usuario.avatar }}</template>
                </span>
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
            v-for="(mensaje, indice) in mensajes"
            :key="indice"
            :class="{
                'system-msg': mensaje.system,
                'my-message': !mensaje.system && currentUser && mensaje.user.name === currentUser.name
            }"
            >
            <template v-if="mensaje.system">{{ mensaje.text }}</template>
            <template v-else>
                <div class="avatar">
                    <img v-if="esImagen(mensaje.user.avatar)" :src="mensaje.user.avatar" class="avatar-img" alt="" />
                    <template v-else>{{ mensaje.user.avatar }}</template>
                </div>
                <div class="msg-content">
                    <div class="msg-header">
                    <strong>{{ mensaje.user.name }}</strong>
                    <span>{{ mensaje.user.status }}</span>
                    </div>
                <div class="msg-text">{{ mensaje.text }}</div>
                </div>
            </template>
            </li>
        </ul>
        <div id="escribiendo">{{ textoEscribiendo }}</div>
        <form id="form" @submit.prevent="enviarMensaje">
            <input
            id="input"
            v-model="textoInput"
            placeholder="Escribe un mensaje..."
            @input="alEscribir"
            />
            <button type="submit">Enviar</button>
        </form>
    </div>
</div>
</template>
