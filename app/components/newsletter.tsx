'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        setIsError(false);

        // Validación del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setIsError(true);
            setMessage('Por favor, ingresa una dirección de correo electrónico válida.');
            setIsLoading(false);
            return;
        }

        if (!executeRecaptcha) {
            setIsError(true);
            setMessage('reCAPTCHA no cargado. Por favor, inténtalo de nuevo más tarde.');
            setIsLoading(false);
            return;
        }

        try {
            const recaptchaToken = await executeRecaptcha('newsletter');

            const recaptchaResponse = await fetch('/api/validate-recaptcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: recaptchaToken, action: 'newsletter' }),
            });

            const recaptchaData = await recaptchaResponse.json();

            if (!recaptchaData.success) {
                setIsError(true);
                setMessage(recaptchaData.message || 'La validación de reCAPTCHA falló');
                setIsLoading(false);
                return;
            }

            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (data.success) {
                setMessage(data.message);
                setEmail('');
            } else {
                setIsError(true);
                setMessage(data.message || 'Ocurrió un error. Por favor, inténtalo de nuevo más tarde.');
            }
        } catch (error) {
            setIsError(true);
            setMessage('Ocurrió un error. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-extrabold text-primary text-center mb-6">
                    Suscríbete a Nuestro Newsletter
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                    Mantente actualizado con nuestras últimas noticias y ofertas.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="email" className="sr-only">
                            Dirección de correo electrónico
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full"
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Suscribiendo...' : 'Suscribirse'}
                    </Button>
                </form>
                {message && (
                    <p className={`mt-4 text-center ${isError ? 'text-destructive' : 'text-primary'}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}
