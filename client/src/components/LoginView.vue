<script setup>
import { ref, onMounted } from 'vue'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, googleProvider } from '../firebase.js'

const emit = defineEmits(['login'])

const firebaseUser = ref(null)
const status = ref('')
const avatar = ref('👨‍💻')
const avatars = ['👨‍💻', '👩‍💻', '🤖', '👻', '🦊']
const loading = ref(false)
const error = ref('')

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    firebaseUser.value = user
  })
})

async function signInWithGoogle() {
  loading.value = true
  error.value = ''
  try {
    const result = await signInWithPopup(auth, googleProvider)
    firebaseUser.value = result.user
  } catch (e) {
    error.value = 'Error al iniciar sesión. Inténtalo de nuevo.'
  } finally {
    loading.value = false
  }
}

function handleSubmit() {
  emit('login', {
    name: firebaseUser.value.displayName,
    status: status.value,
    avatar: avatar.value,
    uid: firebaseUser.value.uid
  })
}
</script>

<template>
  <div id="login-container">
    <div v-if="!firebaseUser" id="login-form">
      <h2>WhatsApp Clone</h2>
      <p class="login-subtitle">Inicia sesión para continuar</p>
      <button @click="signInWithGoogle" :disabled="loading" class="google-btn">
        <span v-if="loading">Cargando...</span>
        <span v-else>Iniciar sesión con Google</span>
      </button>
      <p v-if="error" class="error-msg">{{ error }}</p>
    </div>

    <form v-else id="login-form" @submit.prevent="handleSubmit">
      <div class="user-preview">
        <img :src="firebaseUser.photoURL" :alt="firebaseUser.displayName" class="google-avatar" />
        <strong>{{ firebaseUser.displayName }}</strong>
      </div>
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
