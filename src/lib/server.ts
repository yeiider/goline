// Utilidades de servidor para los endpoints de /api: Firestore y verificación de reCAPTCHA.
import type { Firestore } from 'firebase-admin/firestore';

const env = (name: string) => process.env[name] ?? (import.meta.env[name] as string | undefined);

let db: Firestore | null = null;

export async function firestore() {
  if (db) return db;
  const projectId = env('FIREBASE_PROJECT_ID');
  const clientEmail = env('FIREBASE_CLIENT_EMAIL');
  const privateKey = env('FIREBASE_PRIVATE_KEY');
  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Faltan variables de entorno para inicializar Firebase Admin SDK');
  }
  const { initializeApp, getApps, cert } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  const app =
    getApps()[0] ??
    initializeApp({ credential: cert({ projectId, clientEmail, privateKey: privateKey.replace(/\\n/g, '\n') }) });
  db = getFirestore(app);
  return db;
}

/** Devuelve true si el token es válido o si reCAPTCHA no está configurado (desarrollo local). */
export async function verifyRecaptcha(token: unknown, action: string) {
  const secret = env('RECAPTCHA_API_KEY');
  if (!secret) return true;
  if (typeof token !== 'string' || !token) return false;
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as { success: boolean; action?: string; score?: number };
  return data.success && data.action === action && (data.score ?? 0) >= 0.5;
}

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
