import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { token, action } = await request.json();

    try {
        const secretKey = process.env.RECAPTCHA_API_KEY; // Asegúrate de tener esta variable de entorno configurada

        const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${secretKey}&response=${token}`,
        });

        const recaptchaData = await recaptchaResponse.json();

        if (
            recaptchaData.success &&
            recaptchaData.action === action &&
            recaptchaData.score >= 0.5
        ) {
            return NextResponse.json({ success: true, message: 'reCAPTCHA validado correctamente' });
        } else {
            return NextResponse.json({
                success: false,
                message: 'La validación de reCAPTCHA falló',
                'error-codes': recaptchaData['error-codes'],
            }, { status: 400 });
        }
    } catch (error) {
        console.error('Error al validar reCAPTCHA:', error);
        return NextResponse.json({ success: false, message: 'Error al validar reCAPTCHA' }, { status: 500 });
    }
}
