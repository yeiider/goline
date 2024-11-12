import * as admin from 'firebase-admin'

if (!admin.apps.length) {
    const {
        FIREBASE_PRIVATE_KEY,
        FIREBASE_CLIENT_EMAIL,
        FIREBASE_CLIENT_ID,
        FIREBASE_AUTH_URI,
        FIREBASE_TOKEN_URI,
        FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        FIREBASE_CLIENT_X509_CERT_URL,
        FIREBASE_UNIVERSE_DOMAIN,
        FIREBASE_PROJECT_ID,
        FIREBASE_PROJECT_KEY_ID
    } = process.env

    if (
        !FIREBASE_PRIVATE_KEY ||
        !FIREBASE_CLIENT_EMAIL ||
        !FIREBASE_CLIENT_ID ||
        !FIREBASE_AUTH_URI ||
        !FIREBASE_TOKEN_URI ||
        !FIREBASE_AUTH_PROVIDER_X509_CERT_URL ||
        !FIREBASE_CLIENT_X509_CERT_URL ||
        !FIREBASE_UNIVERSE_DOMAIN ||
        !FIREBASE_PROJECT_ID ||
        !FIREBASE_PROJECT_KEY_ID
    ) {
        throw new Error('Faltan variables de entorno para inicializar Firebase Admin SDK')
    }

    admin.initializeApp({
        credential: admin.credential.cert({
            privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            clientEmail: FIREBASE_CLIENT_EMAIL,
            projectId: FIREBASE_PROJECT_ID,
        }),
    })
}

const db = admin.firestore()

export { db }
