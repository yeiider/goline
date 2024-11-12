import * as admin from 'firebase-admin';
import serviceAccount from '/home/yeiider/goline-4dfbd-firebase-adminsdk-zyjkj-0393ee6c66.json';


if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
}

const db = admin.firestore();

export { db };
