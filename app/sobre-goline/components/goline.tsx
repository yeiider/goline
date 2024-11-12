'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

export default function Goline() {
    const values = [
        {
            letter: "G",
            title: "Growth (Crecimiento)",
            description: "Fomentamos el aprendizaje continuo y el desarrollo personal y profesional de nuestro equipo."
        },
        {
            letter: "O",
            title: "Orientación al Cliente",
            description: "Nos enfocamos en entender y resolver las necesidades de nuestros clientes de manera efectiva."
        },
        {
            letter: "L",
            title: "Liderazgo en Innovación",
            description: "Impulsamos la creatividad y la curiosidad para desarrollar soluciones tecnológicas innovadoras."
        },
        {
            letter: "E",
            title: "Excelencia",
            description: "Buscamos la perfección en cada detalle y garantizamos resultados de alta calidad en todos nuestros proyectos."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    ¿Por qué elegir Goline?
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {values.map((value) => (
                        <motion.div
                            key={value.letter}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-colors duration-300">
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <span className="text-5xl md:text-6xl font-bold text-primary">
                                            {value.letter}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {value.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
