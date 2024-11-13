// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ReCaptchaProvider from "@/app/components/ReCaptchaProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Goline - Innovación y Digitalización",
    description:
        "Descubre soluciones avanzadas de digitalización, automatización y aplicaciones de IA con Goline para transformar tus operaciones.",
    keywords:
        "digitalización, automatización, inteligencia artificial, innovación, Goline, transformación digital",
    authors: {
        url: "https://goline.com.co",
        name: "Goline",
    },
    icons: {
        icon: "/images/goline/icon2.svg",  // Agrega la ruta de tu archivo .svg
    },
    robots: "index, follow",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header />
        <ReCaptchaProvider>
            <main>{children}</main>
        </ReCaptchaProvider>
        <Footer />
        <SpeedInsights />
        </body>
        </html>
    );
}
