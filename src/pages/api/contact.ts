import type { APIRoute } from 'astro';
import { z } from 'zod';
import { firestore, json, verifyRecaptcha } from '@/lib/server';

export const prerender = false;

const ContactFormSchema = z.object({
  name: z.string({ error: 'El nombre es obligatorio' }).trim().min(1, 'El nombre es obligatorio'),
  role: z.string().trim().optional(),
  company: z.string({ error: 'La empresa es obligatoria' }).trim().min(1, 'La empresa es obligatoria'),
  size: z.string().trim().optional(),
  email: z.email({ error: 'Correo electrónico inválido' }),
  phone: z.string().trim().optional(),
  interest: z.string().trim().optional(),
  message: z.string({ error: 'El mensaje es obligatorio' }).trim().min(1, 'El mensaje es obligatorio'),
});

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  if (!(await verifyRecaptcha(body?.token, 'contact_form'))) {
    return json({ success: false, message: 'No pudimos verificar que eres una persona. Recarga la página e inténtalo de nuevo.' }, 400);
  }
  const parsed = ContactFormSchema.safeParse(body);
  if (!parsed.success) {
    return json({ success: false, message: parsed.error.issues[0]?.message ?? 'Revisa los datos del formulario.' }, 400);
  }
  try {
    const db = await firestore();
    await db.collection('contact').add({ ...parsed.data, timestamp: new Date().toISOString() });
    return json({ success: true, message: 'Recibimos tu mensaje. Te escribimos en menos de un día hábil.' });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    return json({ success: false, message: 'No pudimos enviar el mensaje. Escríbenos a contacto@goline.com.co.' }, 500);
  }
};
