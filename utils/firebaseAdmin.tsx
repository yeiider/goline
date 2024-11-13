import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    const {
        FIREBASE_PRIVATE_KEY,
        FIREBASE_CLIENT_EMAIL,
        FIREBASE_PROJECT_ID,
    } = process.env;

    if (!FIREBASE_PRIVATE_KEY || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PROJECT_ID) {
        throw new Error('Faltan variables de entorno para inicializar Firebase Admin SDK');
    }

    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: FIREBASE_PROJECT_ID,
            clientEmail: FIREBASE_CLIENT_EMAIL,
            privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // reemplazar caracteres "\n" por saltos de línea reales
        }),
    });
}

export const db = admin.firestore();
