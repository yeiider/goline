import { NextResponse } from 'next/server'
import { db } from '../../ultils/firebaseAdmin'
import { z } from 'zod'

const ContactFormSchema = z.object({
    name: z.string().min(1, 'El nombre es obligatorio'),
    role: z.string().optional(),
    company: z.string().min(1, 'La empresa es obligatoria'),
    size: z.string().optional(),
    email: z.string().email('Correo electrónico inválido'),
    phone: z.string().optional(),
    message: z.string().min(1, 'El mensaje es obligatorio'),
})

type ContactForm = z.infer<typeof ContactFormSchema>

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const formData: ContactForm = ContactFormSchema.parse(body)

        await db.collection('contact').add({
            ...formData,
            timestamp: new Date().toISOString(),
        })

        return NextResponse.json(
            { success: true, message: 'Mensaje enviado correctamente.' },
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
                { success: false, message: 'Error al enviar el mensaje.' },
                { status: 500 }
            )
        }
    }
}
