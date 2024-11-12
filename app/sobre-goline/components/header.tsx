'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeaderAboutGoline() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F8F9FF] to-[#E8ECFF] mt-10 px-4 py-12 md:px-6 lg:px-8">
            <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
                <motion.div
                    className="max-w-xl text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="mb-6  text-4xl font-bold tracking-tight text-[#0A0F4C] sm:text-5xl md:text-6xl">
                        Sobre <span className="text-green-400">Go</span>line
                    </h1>
                    <p className="mb-8 text-lg text-[#0A0F4C]/80 md:text-xl">
                        Transformamos tu negocio con soluciones de digitalización y automatización avanzadas. En Goline, unimos tecnología y experiencia para maximizar la eficiencia y el crecimiento de tu empresa.
                    </p>
                    <a
                        href="/contacto"
                        className="inline-flex items-center rounded-full bg-[#0A0F4C] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#0A0F4C]/90 focus:outline-none focus:ring-2 focus:ring-[#0A0F4C] focus:ring-offset-2"
                    >
                        Contáctanos
                        <svg
                            className="ml-2 h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </motion.div>
                <motion.div
                    className="relative h-64 w-full max-w-md lg:h-[450px] lg:max-w-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={mounted ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Image
                        src="/images/graf__sobre.png"
                        alt="Equipo de Goline colaborando"
                        width={500}
                        height={450}
                        className="object-contain"
                        priority
                    />
                    <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-[#4CAF50]/20 lg:h-24 lg:w-24" />
                    <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-[#2196F3]/20 lg:h-32 lg:w-32" />
                </motion.div>
            </div>

        </section>
    )
}
