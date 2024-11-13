// app/api/newsletter/route.ts

import { NextResponse } from 'next/server';
import { db } from '@/utils/firebaseAdmin'; // Asegúrate de que la ruta es correcta
import { z } from 'zod';

const ContactFormSchema = z.object({
    email: z.string().email('Correo electrónico inválido'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const formData = ContactFormSchema.parse(body);

        await db.collection('newsletter').add({
            email: formData.email,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json(
            { success: true, message: 'Te has suscrito correctamente.' },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, errors: error.errors },
                { status: 400 }
            );
        } else {
            console.error('Error al guardar el mensaje:', error);
            return NextResponse.json(
                { success: false, message: 'Error al suscribirte.' },
                { status: 500 }
            );
        }
    }
}
