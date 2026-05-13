<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,signOut,onAuthStateChanged} from 'firebase/auth'
import { auth, googleProvider } from '../firebase.js'

const emit = defineEmits(['login'])

const firebaseUser = ref(null)
const status = ref('')
const avatar = ref('👨‍💻')
const avatars = ['👨‍💻', '👩‍💻', '🤖', '👻', '🦊']
const loading = ref(false)
const error = ref('')

const authMethod = ref('google') 
const emailMode = ref('login')
const emailInput = ref('')
const passwordInput = ref('')
const nameInput = ref('')

let unsubscribeAuth = null

onMounted(() => {
  unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    firebaseUser.value = user
  })
})

onUnmounted(() => {
  if (unsubscribeAuth) unsubscribeAuth()
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

async function handleEmailAuth() {
  loading.value = true
  error.value = ''
  try {
    if (emailMode.value === 'register') {
      const result = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
      await updateProfile(result.user, { displayName: nameInput.value })
      // updateProfile no actualiza el objeto user en memoria, lo forzamos
      firebaseUser.value = { ...result.user, displayName: nameInput.value }
    } else {
      const result = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
      firebaseUser.value = result.user
    }
  } catch (e) {
    error.value = getEmailError(e.code)
  } finally {
    loading.value = false
  }
}

function getEmailError(code) {
  const msgs = {
    'auth/email-already-in-use': 'Este correo ya está registrado.',
    'auth/invalid-email': 'Correo electrónico no válido.',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
    'auth/user-not-found': 'No existe una cuenta con este correo.',
    'auth/wrong-password': 'Contraseña incorrecta.',
    'auth/invalid-credential': 'Correo o contraseña incorrectos.',
  }
  return msgs[code] || `Error de autenticación (${code}). Inténtalo de nuevo.`
}

async function signOutFromSetup() {
  await signOut(auth)
  firebaseUser.value = null
}

function handleSubmit() {
  emit('login', {
    name: firebaseUser.value.displayName || firebaseUser.value.email,
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

      <div class="auth-tabs">
        <button type="button" :class="['tab-btn', { active: authMethod === 'google' }]" @click="authMethod = 'google'">
          Google
        </button>
        <button type="button" :class="['tab-btn', { active: authMethod === 'email' }]" @click="authMethod = 'email'">
          Email
        </button>
      </div>

      <div v-if="authMethod === 'google'">
        <button @click="signInWithGoogle" :disabled="loading" class="google-btn">
          <span v-if="loading">Cargando...</span>
          <span v-else>Iniciar sesión con Google</span>
        </button>
      </div>

      <form v-else @submit.prevent="handleEmailAuth">
        <div class="email-mode-toggle">
          <button type="button" :class="{ active: emailMode === 'login' }" @click="emailMode = 'login'">
            Iniciar sesión
          </button>
          <button type="button" :class="{ active: emailMode === 'register' }" @click="emailMode = 'register'">
            Crear cuenta
          </button>
        </div>
        <input v-if="emailMode === 'register'" v-model="nameInput" type="text" placeholder="Tu nombre" required />
        <input v-model="emailInput" type="email" placeholder="Correo electrónico" required />
        <input v-model="passwordInput" type="password" placeholder="Contraseña" required minlength="6" />
        <button type="submit" :disabled="loading" class="submit-btn">
          <span v-if="loading">Cargando...</span>
          <span v-else>{{ emailMode === 'register' ? 'Crear cuenta' : 'Entrar' }}</span>
        </button>
      </form>

      <p v-if="error" class="error-msg">{{ error }}</p>
    </div>

    <form v-else id="login-form" @submit.prevent="handleSubmit">
      <div class="user-preview">
        <img v-if="firebaseUser.photoURL" :src="firebaseUser.photoURL" :alt="firebaseUser.displayName" class="google-avatar" />
        <div v-else class="avatar-placeholder">{{ avatar }}</div>
        <strong>{{ firebaseUser.displayName || firebaseUser.email }}</strong>
        <button type="button" class="change-account-btn" @click="signOutFromSetup">↩ Cambiar</button>
      </div>
      <input v-model="status" type="text" placeholder="Tu estado (ej: Disponible)" required />
      <p>Elige tu avatar:</p>
      <div class="avatars">
        <label v-for="a in avatars" :key="a">
          <input type="radio" name="avatar" :value="a" v-model="avatar" /> {{ a }}
        </label>
      </div>
      <button type="submit" class="submit-btn">Entrar al Chat</button>
    </form>
  </div>
</template>
