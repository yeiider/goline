import { NextResponse } from 'next/server'
import { db } from '../../ultils/firebaseAdmin'
import { z } from 'zod'

const ContactFormSchema = z.object({
    email: z.string().email('Correo electrónico inválido'),
    recaptchaToken: z.string()  // Agregar recaptchaToken al esquema de validación
})

type ContactForm = z.infer<typeof ContactFormSchema>

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const formData: ContactForm = ContactFormSchema.parse(body)

        // Validación del reCAPTCHA con Google
        const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=AIzaSyCkoZdxrLGJxIAgpxhc8mLIICethy2ps9I&response=${formData.recaptchaToken}`,
        });

        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return NextResponse.json(
                { success: false, message: 'reCAPTCHA validation failed' },
                { status: 400 }
            )
        }

        await db.collection('newsletter').add({
            email: formData.email,
            timestamp: new Date().toISOString(),
        })

        return NextResponse.json(
            { success: true, message: 'Te has suscrito correctamente.' },
            { status: 200 }
        )
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, errors: error.errors },
                { status: 400 }
            )
        } else {
            console.error('Error al guardar el mensaje:', error)
            return NextResponse.json(
                { success: false, message: 'Error al suscribirte.' },
                { status: 500 }
            )
        }
    }
}
