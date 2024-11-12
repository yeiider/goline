'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function TechBlog() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const blogPosts = [
        {
            "id": 1,
            "title": "El futuro del e-commerce: tendencias para 2024",
            "description": "En este artículo analizamos las principales innovaciones que darán forma al futuro del comercio electrónico, desde la inteligencia artificial hasta las experiencias de compra personalizadas y el impacto de la sostenibilidad. Descubre cómo preparar tu negocio para el cambio.",
            "image": "/images/blog/ecommerce-fucture.webp",
            "category": "E-commerce",
            "date": "2023-11-15",
            "author": "Ana Gómez"
        },
        {
            "id": 2,
            "title": "Ciberseguridad en la era del trabajo remoto",
            "description": "Con el trabajo remoto en aumento, la ciberseguridad es una prioridad. Aprende sobre los riesgos principales, cómo identificarlos y qué estrategias adoptar para proteger tu empresa de ataques en un entorno descentralizado.",
            "image": "/images/blog/seguridad.webp",
            "category": "Ciberseguridad",
            "date": "2023-11-10",
            "author": "Carlos Martínez"
        },
        {
            "id": 3,
            "title": "Inteligencia Artificial en la atención al cliente",
            "description": "Los chatbots y asistentes virtuales están cambiando la atención al cliente. Aquí exploramos cómo la inteligencia artificial puede mejorar la experiencia de tus clientes, reducir costos y optimizar los procesos de soporte.",
            "image": "/images/blog/ia-assisten.webp",
            "category": "Inteligencia Artificial",
            "date": "2023-11-05",
            "author": "Laura Sánchez"
        },
        {
            "id": 4,
            "title": "Optimización de conversiones en tiendas online",
            "description": "¿Quieres aumentar tus ventas? Conoce las estrategias efectivas para mejorar la tasa de conversión de tu tienda online. Desde el diseño de la página hasta el análisis de datos, aquí te explicamos los pasos para optimizar tu plataforma.",
            "image": "/images/blog/optimizacion-conversiones.webp",
            "category": "E-commerce",
            "date": "2023-11-20",
            "author": "Pedro Hernández"
        },
        {
            "id": 5,
            "title": "Machine Learning en la detección de fraudes",
            "description": "El fraude es una preocupación constante en el mundo digital. Descubre cómo el machine learning permite detectar patrones sospechosos en tiempo real y mejorar la seguridad en las transacciones.",
            "image": "/images/blog/machine-learning-fraude.webp",
            "category": "Inteligencia Artificial",
            "date": "2023-11-25",
            "author": "Sofía Morales"
        },
        {
            "id": 6,
            "title": "Automatización en la gestión de inventarios",
            "description": "La automatización en la gestión de inventarios puede transformar la eficiencia de tu negocio. Exploramos tecnologías y estrategias que te permitirán optimizar el proceso de inventario y reducir costos operativos.",
            "image": "/images/blog/automatizacion-inventario.webp",
            "category": "Logística",
            "date": "2023-11-30",
            "author": "Luis Pérez"
        },
        {
            "id": 7,
            "title": "Blockchain en la cadena de suministro",
            "description": "Blockchain está revolucionando la transparencia en la cadena de suministro. En este artículo analizamos los beneficios de esta tecnología y cómo implementarla en tu proceso logístico para ganar confianza de los clientes.",
            "image": "/images/blog/blockchain-cadena-suministro.webp",
            "category": "Logística",
            "date": "2023-12-05",
            "author": "María Fernández"
        },
        {
            "id": 8,
            "title": "El papel del Big Data en la personalización del marketing",
            "description": "Con el uso de Big Data, el marketing personalizado es más preciso que nunca. Descubre cómo utilizar datos para entender mejor a tu audiencia y crear campañas de marketing que realmente resuenen con tus clientes.",
            "image": "/images/blog/big-data-marketing.webp",
            "category": "Big Data",
            "date": "2023-12-10",
            "author": "José Rodríguez"
        }
    ]


    const categories = Array.from(new Set(blogPosts.map(post => post.category)))

    const handleCategoryChange = (category: string | null) => {
        setSelectedCategory(category)
    }

    const filteredPosts = selectedCategory
        ? blogPosts.filter(post => post.category === selectedCategory)
        : blogPosts

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="mb-6 flex flex-wrap justify-center gap-2">
                <Button
                    onClick={() => handleCategoryChange(null)}
                    variant={selectedCategory === null ? "default" : "outline"}
                >
                    Todas
                </Button>
                {categories.map(category => (
                    <Button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        variant={selectedCategory === category ? "default" : "outline"}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                    <Card key={post.id} className="flex flex-col">
                        <CardHeader>
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={400}
                                height={200}
                                className="rounded-t-lg object-cover"
                            />
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <Badge className="mb-2">{post.category}</Badge>
                            <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                            <p className="text-muted-foreground">{post.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{post.date} - {post.author}</span>
                            { /**<Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                                Leer más
                            </Link>*/ }
                        </CardFooter>

                    </Card>
                ))}
            </div>
        </div>
    )
}