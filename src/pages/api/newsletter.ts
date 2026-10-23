import type { APIRoute } from 'astro';
import { z } from 'zod';
import { firestore, json, verifyRecaptcha } from '@/lib/server';

export const prerender = false;

const NewsletterSchema = z.object({ email: z.email({ error: 'Correo electrónico inválido' }) });

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  if (!(await verifyRecaptcha(body?.token, 'newsletter'))) {
    return json({ success: false, message: 'No pudimos verificar la suscripción. Recarga la página e inténtalo de nuevo.' }, 400);
  }
  const parsed = NewsletterSchema.safeParse(body);
  if (!parsed.success) {
    return json({ success: false, message: parsed.error.issues[0]?.message ?? 'Correo electrónico inválido' }, 400);
  }
  try {
    const db = await firestore();
    await db.collection('newsletter').add({ email: parsed.data.email, timestamp: new Date().toISOString() });
    return json({ success: true, message: 'Listo, ya estás suscrito.' });
  } catch (error) {
    console.error('Error al guardar la suscripción:', error);
    return json({ success: false, message: 'No pudimos suscribirte. Inténtalo de nuevo más tarde.' }, 500);
  }
};
