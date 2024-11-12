'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ReCAPTCHA from "react-google-recaptcha"

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        setIsError(false);

        // Validación del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setIsError(true);
            setMessage('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        // Validación del token de reCAPTCHA
        if (!recaptchaToken) {
            setIsError(true);
            setMessage('Please complete the CAPTCHA.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    recaptchaToken, // enviar el token al backend
                }),
            });
            const data = await response.json();
            if (data.success) {
                setMessage(data.message);
                setEmail('');
            }
        } catch (error) {
            setIsError(true);
            setMessage('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-extrabold text-primary text-center mb-6">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                    Stay updated with our latest news and offers.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="email" className="sr-only">
                            Email address
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <ReCAPTCHA
                        sitekey={'6LdG-HsqAAAAAJ4kTdtDT0Pn0Vx360qGW0fuE4KV'}
                        onChange={(token) => setRecaptchaToken(token)}
                    />


                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Subscribing...' : 'Subscribe'}
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