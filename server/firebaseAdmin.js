const admin = require('firebase-admin')

let baseDatos = null

try {
    const credencialBase64 = process.env.FIREBASE_SERVICE_ACCOUNT
    const credencial = credencialBase64
        ? admin.credential.cert(JSON.parse(Buffer.from(credencialBase64, 'base64').toString()))
        : admin.credential.cert(require('./serviceAccountKey.json'))

    admin.initializeApp({ credential: credencial })
    baseDatos = admin.firestore()
    baseDatos.settings({ ignoreUndefinedProperties: true })
    console.log('[Firebase] ✓ Firestore conectado')
} catch (error) {
    console.warn('[Firebase] Firestore no disponible:', error.message)
}

module.exports = { baseDatos }
