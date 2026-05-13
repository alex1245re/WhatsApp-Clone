<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login'])

const username = ref('')
const status = ref('')
const avatar = ref('👨‍💻')

const avatars = ['👨‍💻', '👩‍💻', '🤖', '👻', '🦊']

function handleSubmit() {
  emit('login', {
    name: username.value,
    status: status.value,
    avatar: avatar.value
  })
}
</script>

<template>
    <div id="login-container">
        <form id="login-form" @submit.prevent="handleSubmit">
        <h2>Identificate</h2>
        <input v-model="username" type="text" placeholder="Tu nombre" required />
        <input v-model="status" type="text" placeholder="Tu estado (ej: Disponible)" required />

        <p>Elige tu avatar:</p>
        <div class="avatars">
            <label v-for="a in avatars" :key="a">
            <input type="radio" name="avatar" :value="a" v-model="avatar" /> {{ a }}
            </label>
        </div>

        <button type="submit">Entrar al Chat</button>
        </form>
    </div>
</template>
