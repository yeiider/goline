import { ShieldCheck, Lock, Search } from "lucide-react"; // Cambié los íconos para reflejar temas de seguridad
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
    const services = [
        {
            icon: ShieldCheck,
            title: "Análisis de Seguridad Personalizado",
            description:
                "Evaluamos a fondo tus sistemas para identificar posibles vulnerabilidades y áreas de riesgo.",
        },
        {
            icon: Lock,
            title: "Protección de Datos y Activos",
            description:
                "Implementamos soluciones de protección avanzadas para garantizar la seguridad de tus datos y activos digitales.",
        },
        {
            icon: Search,
            title: "Monitoreo y Respuesta Proactiva",
            description:
                "Ofrecemos monitoreo continuo y una rápida respuesta ante incidentes para minimizar el impacto de amenazas.",
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003EFF]">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-8">
                    Protege tu infraestructura digital <br />
                    <span className="text-white">Descubre nuestros servicios de ciberseguridad</span>
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
