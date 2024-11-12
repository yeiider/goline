import {ShoppingCart, Code, Shield, Users} from "lucide-react"
import React from "react";
import Link from "next/link";

interface Service {
    icon: React.ReactNode
    title: string
    link: string
    description: string
}

const services: Service[] = [
    {
        icon: <ShoppingCart className="w-8 h-8 text-green-500"/>,
        title: "Soluciones Ecommerce",
        link: "ecommerce",
        description: "Desarrollamos plataformas de comercio electrónico personalizadas, optimizadas para maximizar tus ventas y ofrecer una experiencia de usuario fluida y atractiva.",
    },
    {
        icon: <Code className="w-8 h-8 text-green-500"/>,
        title: "Desarrollo de Software a Medida",
        link: "modelado-negocios-digitales",
        description: "Creamos soluciones tecnológicas escalables y adaptadas a las necesidades de tu negocio, desde la planificación hasta la implementación y el mantenimiento.",
    },
    {
        icon: <Shield className="w-8 h-8 text-green-500"/>,
        title: "Infraestructura y Seguridad en la Nube",
        link: "infra",
        description: "Modernizamos tu infraestructura IT y garantizamos la seguridad de tus datos mediante soluciones basadas en la nube, asegurando un entorno digital sólido y protegido.",
    },
    {
        icon: <Users className="w-8 h-8 text-green-500"/>,
        title: "Consultoría y Talento IT",
        link: "staff",
        description: "Ofrecemos consultoría especializada y talento IT para impulsar la innovación en tus proyectos, proporcionándote los recursos técnicos que necesitas para crecer.",
    },
]

export default function ServicesSection() {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                            <div className="flex items-center justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
                            <Link href={service.link} className="text-blue-600 hover:text-blue-800 font-medium">
                                Leer más &gt;
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
