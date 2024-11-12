'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Code2, Rocket, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function Especiales() {
    const features = [
        {
            icon: Lightbulb,
            title: "Innovación Transformadora",
            description: "Nos apasiona aplicar creatividad y tecnología para resolver desafíos de manera única.",
        },
        {
            icon: Code2,
            title: "Colaboración Cercana",
            description: "Trabajamos mano a mano con cada cliente, diseñando soluciones adaptadas a sus objetivos específicos.",
        },
        {
            icon: Rocket,
            title: "Soluciones Ágiles",
            description: "Implementamos tecnología avanzada con equipos especializados para impulsar tu crecimiento.",
        },
        {
            icon: Settings,
            title: "Ejecución sin Fallos",
            description: "Nos aseguramos de que cada proyecto avance sin contratiempos, con calidad y en tiempo.",
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-white to-blue-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 space-y-5">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800">
                        ¿Qué nos hace únicos?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        En Goline, nuestra esencia está en nuestra gente y en nuestra capacidad para superar retos de forma excepcional.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-md hover:shadow-2xl transition-shadow">
                                <CardContent className="p-8 text-center">
                                    <div className="mb-5 rounded-full w-16 h-16 bg-primary/10 mx-auto flex items-center justify-center">
                                        <feature.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
