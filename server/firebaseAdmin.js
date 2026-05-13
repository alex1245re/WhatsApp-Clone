const admin = require('firebase-admin')

let db = null

try {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT
    const cred = raw
        ? admin.credential.cert(JSON.parse(Buffer.from(raw, 'base64').toString()))
        : admin.credential.cert(require('./serviceAccountKey.json'))

    admin.initializeApp({ credential: cred })
    db = admin.firestore()
    db.settings({ ignoreUndefinedProperties: true })
    console.log('[Firebase] ✓ Firestore conectado')
} catch (e) {
    console.warn('[Firebase] Firestore no disponible:', e.message)
}

module.exports = { db }
