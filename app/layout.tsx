import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Author} from "next/dist/lib/metadata/types/metadata-types";

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
    description: "Descubre soluciones avanzadas de digitalización, automatización y aplicaciones de IA con Goline para transformar tus operaciones.",
    keywords: "digitalización, automatización, inteligencia artificial, innovación, Goline, transformación digital",
    authors: {
        url: "https://goline.com.co",
        name: "Goline"
    },
    robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <script async
                  src="https://www.google.com/recaptcha/enterprise.js?render=6LdG-HsqAAAAAJ4kTdtDT0Pn0Vx360qGW0fuE4KV"></script>
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header/>
      <main>{children}</main>
      <Footer/>
      <SpeedInsights/>
      </body>
      </html>
  );
}
