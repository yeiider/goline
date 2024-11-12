import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function RelatedPosts() {
    const posts = [
        {
            title: "Tendencias de E-commerce para 2024",
            description: "Explora las tendencias de e-commerce que marcarán la pauta en 2024, desde la personalización hasta la integración de IA en las tiendas en línea.",
            image: "/images/grafico.webp", // Imagen relacionada con tendencias de e-commerce
            link: "#",
        },
        {
            title: "Cómo Optimizar la Experiencia de Usuario en tu Tienda Online",
            description: "Conoce las mejores prácticas de UX para e-commerce y cómo mejorar la navegación, el diseño y la conversión en tu sitio.",
            image: "/images/store.webp", // Imagen relacionada con experiencia de usuario en e-commerce
            link: "#",
        },
        {
            title: "Estrategias de Pago en E-commerce: Aumenta la Conversión",
            description: "Aprende cómo integrar opciones de pago y estrategias de checkout efectivas para mejorar la experiencia de compra y reducir el abandono del carrito.",
            image: "/images/digital-process.webp", // Imagen relacionada con métodos de pago en e-commerce
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
