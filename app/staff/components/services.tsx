import { Users, Briefcase, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
    const services = [
        {
            icon: Users,
            title: "Escuchamos tus necesidades",
            description:
                "Consideramos aspectos tecnológicos, culturales, el proyecto y la mentalidad.",
        },
        {
            icon: Briefcase,
            title: "Exploramos las mejores opciones",
            description:
                "Buscamos el talento que mejor se adapte a tus proyectos, respaldados por nuestra experiencia en tecnología.",
        },
        {
            icon: Globe,
            title: "Entrevistas y evaluación técnica",
            description:
                "Aseguramos que el talento destaque en lo técnico y que se integre con éxito a tu equipo.",
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003EFF]">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-8">
                    ¿Listo para transformar tu equipo IT? <br />
                    <span className="text-white">Descubre nuestro proceso</span>
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card key={index} className="bg-white p-6 rounded-xl shadow-lg">
                                <CardContent className="text-left">
                                    <div className="flex items-center mb-4">
                                        <Icon className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
