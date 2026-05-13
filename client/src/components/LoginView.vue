<script setup>
import { ref, computed } from 'vue'
import {signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,signOut,} from 'firebase/auth'
import { auth, googleProvider } from '../firebase.js'

const emit = defineEmits(['login'])

const paso = ref('auth')
const usuarioFirebase = ref(null)

const estado = ref('')
const avatar = ref('👨‍💻')
const listaEmojis = ['👨‍💻', '👩‍💻', '🤖', '👻', '🦊']
const inputArchivo = ref(null)
const esImagen = computed(() => avatar.value?.startsWith('data:') || avatar.value?.startsWith('http'))

const metodoAuth = ref('google')
const modoEmail  = ref('login')
const correo       = ref('')
const contrasena   = ref('')
const nombre       = ref('')
const cargando = ref(false)
const mensajeError = ref('')

async function entrarConGoogle() {
  cargando.value = true
  mensajeError.value = ''
  try {
    const { user: usuario } = await signInWithPopup(auth, googleProvider)
    usuarioFirebase.value = usuario
    const perfilGuardado = localStorage.getItem(`user_${usuario.uid}`)
    if (perfilGuardado) {
      const perfil = JSON.parse(perfilGuardado)
      estado.value = perfil.status || ''
      avatar.value = perfil.avatar || usuario.photoURL || '👨‍💻'
    } else {
      avatar.value = usuario.photoURL || '👨‍💻'
    }
    paso.value = 'profile'
  } catch (error) {
    if (error.code !== 'auth/popup-closed-by-user') {
      mensajeError.value = 'Error al iniciar sesión. Inténtalo de nuevo.'
    }
  } finally {
    cargando.value = false
  }
}

async function entrarConEmail() {
  cargando.value = true
  mensajeError.value = ''
  try {
    if (modoEmail.value === 'register') {
      const { user: usuario } = await createUserWithEmailAndPassword(auth, correo.value, contrasena.value)
      await updateProfile(usuario, { displayName: nombre.value.trim() })
      await usuario.reload()
      usuarioFirebase.value = auth.currentUser
    } else {
      const { user: usuario } = await signInWithEmailAndPassword(auth, correo.value, contrasena.value)
      usuarioFirebase.value = usuario
    }
    avatar.value = usuarioFirebase.value.photoURL || '👨‍💻'
    const perfilGuardado = localStorage.getItem(`user_${usuarioFirebase.value.uid}`)
    if (perfilGuardado) {
      const perfil = JSON.parse(perfilGuardado)
      estado.value = perfil.status || ''
      avatar.value = perfil.avatar || usuarioFirebase.value.photoURL || '👨‍💻'
    }
    paso.value = 'profile'
  } catch (error) {
    mensajeError.value = obtenerErrorEmail(error.code)
  } finally {
    cargando.value = false
  }
}

function obtenerErrorEmail(codigo) {
  const errores = {
    'auth/email-already-in-use':  'Este correo ya está registrado.',
    'auth/invalid-email':         'Correo electrónico no válido.',
    'auth/weak-password':         'La contraseña debe tener al menos 6 caracteres.',
    'auth/user-not-found':        'No existe una cuenta con este correo.',
    'auth/wrong-password':        'Contraseña incorrecta.',
    'auth/invalid-credential':    'Correo o contraseña incorrectos.',
    'auth/operation-not-allowed': 'El acceso con email no está habilitado en Firebase.',
    'auth/too-many-requests':     'Demasiados intentos. Espera un momento.',
  }
  return errores[codigo] || `Error (${codigo}). Inténtalo de nuevo.`
}

async function cambiarCuenta() {
  await signOut(auth)
  usuarioFirebase.value = null
  paso.value            = 'auth'
  correo.value          = ''
  contrasena.value      = ''
  nombre.value          = ''
  avatar.value          = '👨‍💻'
  mensajeError.value    = ''
}

function abrirSelectorFoto() {
  inputArchivo.value?.click()
}

async function procesarFoto(evento) {
  const archivo = evento.target.files?.[0]
  if (archivo){
    const imagen = new Image()
    imagen.src = URL.createObjectURL(archivo)
    await new Promise(resolve => { imagen.onload = resolve })
    const dimension = 80
    const lienzo = document.createElement('canvas')
    lienzo.width = dimension
    lienzo.height = dimension
    const contexto = lienzo.getContext('2d')
    const ladoMinimo = Math.min(imagen.width, imagen.height)
    const recorteX = (imagen.width - ladoMinimo) / 2
    const recorteY = (imagen.height - ladoMinimo) / 2
    contexto.drawImage(imagen, recorteX, recorteY, ladoMinimo, ladoMinimo, 0, 0, dimension, dimension)
    URL.revokeObjectURL(imagen.src)
    avatar.value = lienzo.toDataURL('image/jpeg', 0.75)
    evento.target.value = ''
  }
}

function confirmarPerfil() {
  emit('login', {
    name:   usuarioFirebase.value.displayName || usuarioFirebase.value.email,
    status: estado.value.trim(),
    avatar: avatar.value,
    uid:    usuarioFirebase.value.uid,
  })
}
</script>

<template>
  <div id="login-container">
    <div v-if="paso === 'auth'" id="login-form">
      <h2>WhatsApp Clone</h2>
      <p class="login-subtitle">Inicia sesión para continuar</p>
      <div class="auth-tabs">
        <button
          type="button"
          :class="['tab-btn', { active: metodoAuth === 'google' }]"
          @click="metodoAuth = 'google'; mensajeError = ''"
        >Google</button>
        <button
          type="button"
          :class="['tab-btn', { active: metodoAuth === 'email' }]"
          @click="metodoAuth = 'email'; mensajeError = ''"
        >Email</button>
      </div>

      <template v-if="metodoAuth === 'google'">
        <button @click="entrarConGoogle" :disabled="cargando" class="google-btn">
          <span v-if="cargando">Cargando...</span>
          <span v-else>Iniciar sesión con Google</span>
        </button>
      </template>

      <template v-else>
        <div class="email-mode-toggle">
          <button type="button" :class="{ active: modoEmail === 'login' }"    @click="modoEmail = 'login';    mensajeError = ''">Iniciar sesión</button>
          <button type="button" :class="{ active: modoEmail === 'register' }" @click="modoEmail = 'register'; mensajeError = ''">Crear cuenta</button>
        </div>
        <form @submit.prevent="entrarConEmail">
          <input v-if="modoEmail === 'register'" v-model="nombre"    type="text"     placeholder="Tu nombre"                    autocomplete="name"             required />
          <input                                  v-model="correo"    type="email"    placeholder="Correo electrónico"           autocomplete="email"            required />
          <input                                  v-model="contrasena" type="password" placeholder="Contraseña (mín. 6 caracteres)" autocomplete="current-password" required minlength="6" />
          <button type="submit" :disabled="cargando" class="submit-btn">
            <span v-if="cargando">Cargando...</span>
            <span v-else>{{ modoEmail === 'register' ? 'Crear cuenta' : 'Entrar' }}</span>
          </button>
        </form>
      </template>

      <p v-if="mensajeError" class="error-msg">{{ mensajeError }}</p>
    </div>

    <form v-else id="login-form" @submit.prevent="confirmarPerfil">
      <div class="user-preview">
        <img v-if="esImagen" :src="avatar" class="google-avatar" alt="avatar" />
        <div v-else class="avatar-placeholder">{{ avatar }}</div>
        <strong>{{ usuarioFirebase?.displayName || usuarioFirebase?.email }}</strong>
        <button type="button" class="change-account-btn" @click="cambiarCuenta">↩ Cambiar</button>
      </div>
      <input v-model="estado" type="text" placeholder="Tu estado (ej: Disponible)" required />
      <div class="avatar-section">
        <div class="avatar-actions">
          <input type="file" ref="inputArchivo" accept="image/*" @change="procesarFoto" style="display:none" />
          <button type="button" class="avatar-upload-btn" @click="abrirSelectorFoto">📷 Subir foto</button>
          <button v-if="esImagen" type="button" class="avatar-clear-btn" @click="avatar = '👨‍💻'">✕ Quitar</button>
        </div>
        <div v-if="!esImagen">
          <p>O elige un emoji:</p>
          <div class="avatars">
            <label v-for="emoji in listaEmojis" :key="emoji">
              <input type="radio" name="avatar" :value="emoji" v-model="avatar" /> {{ emoji }}
            </label>
          </div>
        </div>
      </div>
      <button type="submit" class="submit-btn">Entrar al Chat</button>
    </form>

  </div>
</template>
