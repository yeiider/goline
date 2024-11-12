'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Globe2, Lightbulb, Layers, Wrench } from "lucide-react"
import { motion } from 'framer-motion'

export default function CompanyGoline() {
    const stats = [
        {
            icon: Lightbulb,
            title: "Innovación constante",
            description: "creamos soluciones tecnológicas a la medida",
        },
        {
            icon: Globe2,
            title: "Alcance en expansión",
            description: "servicios disponibles en LATAM y USA",
        },
        {
            icon: Layers,
            title: "Proyectos en crecimiento",
            description: "impulsamos proyectos estratégicos",
        },
        {
            icon: Wrench,
            title: "Compromiso con la calidad",
            description: "adaptamos la tecnología a tus necesidades",
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Somos una empresa tecnológica en constante evolución,{" "}
                            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                                creciendo junto a nuestros clientes
                            </span>.
                        </h1>
                        <p className="mt-4 text-base text-gray-700">
                            En Goline, nos enfocamos en ofrecer soluciones innovadoras y personalizadas para transformar los procesos de nuestros clientes.
                        </p>
                    </motion.div>
                    <Card className="overflow-hidden bg-white/80 backdrop-blur-md">
                        <CardContent className="p-0">
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="grid divide-y divide-gray-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={item}
                                        className="group relative p-6 transition-all hover:bg-white"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white">
                                                <stat.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-base font-semibold text-gray-900">{stat.title}</h3>
                                                <p className="text-sm text-gray-500">{stat.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
        </section>
    )
}
