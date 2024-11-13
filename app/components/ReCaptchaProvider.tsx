'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface ReCaptchaProviderProps {
    children: React.ReactNode;
}

export default function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            scriptProps={{
                async: true,
                defer: true,
                appendTo: 'head',
                nonce: undefined,
            }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}
