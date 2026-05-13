<script setup>
import { ref, computed } from 'vue'
import {signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,signOut,} from 'firebase/auth'
import { auth, googleProvider } from '../firebase.js'

const emit = defineEmits(['login'])

const step = ref('auth')
const firebaseUser = ref(null)

const status = ref('')
const avatar = ref('👨‍💻')
const avatars = ['👨‍💻', '👩‍💻', '🤖', '👻', '🦊']
const fileInputRef = ref(null)
const isImageAvatar = computed(() => avatar.value?.startsWith('data:') || avatar.value?.startsWith('http'))

const authMethod = ref('google')
const emailMode  = ref('login')   
const emailInput    = ref('')
const passwordInput = ref('')
const nameInput     = ref('')
const loading = ref(false)
const error   = ref('')

async function signInWithGoogle() {
  loading.value = true
  error.value   = ''
  try {
    const { user } = await signInWithPopup(auth, googleProvider)
    firebaseUser.value = user
    avatar.value = user.photoURL || '👨‍💻'
    step.value = 'profile'
  } catch (e) {
    if (e.code !== 'auth/popup-closed-by-user') {
      error.value = 'Error al iniciar sesión. Inténtalo de nuevo.'
    }
  } finally {
    loading.value = false
  }
}

async function handleEmailAuth() {
  loading.value = true
  error.value   = ''
  try {
    if (emailMode.value === 'register') {
      const { user } = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
      await updateProfile(user, { displayName: nameInput.value.trim() })
      await user.reload()
      firebaseUser.value = auth.currentUser
    } else {
      const { user } = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
      firebaseUser.value = user
    }
    avatar.value = firebaseUser.value.photoURL || '👨‍💻'
    step.value = 'profile'
  } catch (e) {
    error.value = getEmailError(e.code)
  } finally {
    loading.value = false
  }
}

function getEmailError(code) {
  const msgs = {
    'auth/email-already-in-use':  'Este correo ya está registrado.',
    'auth/invalid-email':         'Correo electrónico no válido.',
    'auth/weak-password':         'La contraseña debe tener al menos 6 caracteres.',
    'auth/user-not-found':        'No existe una cuenta con este correo.',
    'auth/wrong-password':        'Contraseña incorrecta.',
    'auth/invalid-credential':    'Correo o contraseña incorrectos.',
    'auth/operation-not-allowed': 'El acceso con email no está habilitado en Firebase.',
    'auth/too-many-requests':     'Demasiados intentos. Espera un momento.',
  }
  return msgs[code] || `Error (${code}). Inténtalo de nuevo.`
}

async function changeAccount() {
  await signOut(auth)
  firebaseUser.value  = null
  step.value          = 'auth'
  emailInput.value    = ''
  passwordInput.value = ''
  nameInput.value     = ''
  avatar.value        = '👨‍💻'
  error.value         = ''
}

function triggerFileInput() {
  fileInputRef.value?.click()
}

async function handlePhotoUpload(e) {
  const file = e.target.files?.[0]
  if (!file) return
  const img = new Image()
  img.src = URL.createObjectURL(file)
  await new Promise(resolve => { img.onload = resolve })
  const size = 80
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const minDim = Math.min(img.width, img.height)
  const sx = (img.width - minDim) / 2
  const sy = (img.height - minDim) / 2
  ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size)
  URL.revokeObjectURL(img.src)
  avatar.value = canvas.toDataURL('image/jpeg', 0.75)
  e.target.value = ''
}

function handleSubmit() {
  emit('login', {
    name:   firebaseUser.value.displayName || firebaseUser.value.email,
    status: status.value.trim(),
    avatar: avatar.value,
    uid:    firebaseUser.value.uid,
  })
}
</script>

<template>
  <div id="login-container">
    <div v-if="step === 'auth'" id="login-form">
      <h2>WhatsApp Clone</h2>
      <p class="login-subtitle">Inicia sesión para continuar</p>
      <div class="auth-tabs">
        <button
          type="button"
          :class="['tab-btn', { active: authMethod === 'google' }]"
          @click="authMethod = 'google'; error = ''"
        >Google</button>
        <button
          type="button"
          :class="['tab-btn', { active: authMethod === 'email' }]"
          @click="authMethod = 'email'; error = ''"
        >Email</button>
      </div>

      <template v-if="authMethod === 'google'">
        <button @click="signInWithGoogle" :disabled="loading" class="google-btn">
          <span v-if="loading">Cargando...</span>
          <span v-else>Iniciar sesión con Google</span>
        </button>
      </template>

      <template v-else>
        <div class="email-mode-toggle">
          <button type="button" :class="{ active: emailMode === 'login' }"    @click="emailMode = 'login';    error = ''">Iniciar sesión</button>
          <button type="button" :class="{ active: emailMode === 'register' }" @click="emailMode = 'register'; error = ''">Crear cuenta</button>
        </div>
        <form @submit.prevent="handleEmailAuth">
          <input v-if="emailMode === 'register'" v-model="nameInput"     type="text"     placeholder="Tu nombre"                    autocomplete="name"             required />
          <input                                  v-model="emailInput"    type="email"    placeholder="Correo electrónico"           autocomplete="email"            required />
          <input                                  v-model="passwordInput" type="password" placeholder="Contraseña (mín. 6 caracteres)" autocomplete="current-password" required minlength="6" />
          <button type="submit" :disabled="loading" class="submit-btn">
            <span v-if="loading">Cargando...</span>
            <span v-else>{{ emailMode === 'register' ? 'Crear cuenta' : 'Entrar' }}</span>
          </button>
        </form>
      </template>

      <p v-if="error" class="error-msg">{{ error }}</p>
    </div>

    <form v-else id="login-form" @submit.prevent="handleSubmit">
      <div class="user-preview">
        <img v-if="isImageAvatar" :src="avatar" class="google-avatar" alt="avatar" />
        <div v-else class="avatar-placeholder">{{ avatar }}</div>
        <strong>{{ firebaseUser?.displayName || firebaseUser?.email }}</strong>
        <button type="button" class="change-account-btn" @click="changeAccount">↩ Cambiar</button>
      </div>
      <input v-model="status" type="text" placeholder="Tu estado (ej: Disponible)" required />
      <div class="avatar-section">
        <div class="avatar-actions">
          <input type="file" ref="fileInputRef" accept="image/*" @change="handlePhotoUpload" style="display:none" />
          <button type="button" class="avatar-upload-btn" @click="triggerFileInput">📷 Subir foto</button>
          <button v-if="isImageAvatar" type="button" class="avatar-clear-btn" @click="avatar = '👨‍💻'">✕ Quitar</button>
        </div>
        <p>O elige un emoji:</p>
        <div class="avatars">
          <label v-for="a in avatars" :key="a">
            <input type="radio" name="avatar" :value="a" v-model="avatar" /> {{ a }}
          </label>
        </div>
      </div>
      <button type="submit" class="submit-btn">Entrar al Chat</button>
    </form>

  </div>
</template>
