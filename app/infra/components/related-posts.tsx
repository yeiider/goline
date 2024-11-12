import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function RelatedPosts() {
    const posts = [
        {
            title: "Principales Amenazas de Ciberseguridad en 2023",
            description: "Descubre las amenazas de ciberseguridad que enfrentan las empresas este año y cómo protegerte.",
            image: "/images/security.webp", // Imagen relacionada con amenazas de ciberseguridad
            link: "#",
        },
        {
            title: "Cómo Implementar una Estrategia Efectiva de Ciberseguridad",
            description: "Conoce los pasos clave para desarrollar una estrategia de ciberseguridad integral en tu empresa.",
            image: "/images/hacking.webp", // Imagen relacionada con estrategias de ciberseguridad
            link: "#",
        },
        {
            title: "Beneficios de una Auditoría de Seguridad",
            description: "Explora cómo una auditoría de seguridad ayuda a identificar vulnerabilidades y proteger tus datos.",
            image: "/images/team-ti.webp", // Imagen relacionada con auditorías de seguridad
            link: "#",
        },
    ];

    return (
        <section className="w-full py-12 bg-gray-100">
            <div className="container m-auto">
                <h2 className="text-2xl font-bold mb-8 text-blue-600">Artículos relacionados</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <Card key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                            <CardContent className="p-0 relative group">
                                <Link href={post.link} className="block">
                                    {/* Imagen con overlay */}
                                    <div className="aspect-[2/1] relative overflow-hidden rounded-t-lg">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                            fill
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Contenido de la tarjeta */}
                                    <div className="p-5 bg-white">
                                        <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {post.description}
                                        </p>
                                        <span className="text-blue-600 font-medium text-sm transition-transform duration-300 transform group-hover:translate-x-1">
                                            Leer más {'>'}
                                        </span>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
