import { Settings, Package, BarChart3, RefreshCw, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
    const services = [
        {
            icon: Settings,
            title: "Modelado de Negocios Digitales",
            description:
                "Desarrollamos modelos de negocio digitales personalizados que optimizan cada aspecto de tu empresa, desde la ideación hasta la implementación.",
        },
        {
            icon: Package,
            title: "Desarrollo de Productos Digitales",
            description:
                "Creamos productos digitales que se adaptan a tus necesidades y aumentan la competitividad, mejorando la experiencia del cliente y optimizando la operación.",
        },
        {
            icon: BarChart3,
            title: "Soluciones Basadas en Datos",
            description:
                "Convertimos datos en insights valiosos, ayudando a las empresas a tomar decisiones estratégicas basadas en análisis avanzados y cultura data-driven.",
        },
        {
            icon: RefreshCw,
            title: "Transformación y Agilidad Digital",
            description:
                "Facilitamos la adopción de metodologías ágiles y cultura digital, impulsando la eficiencia y el crecimiento continuo dentro de tu organización.",
        },
        {
            icon: Smartphone,
            title: "Células Ágiles de Innovación",
            description:
                "Formamos equipos expertos y multidisciplinarios que desarrollan soluciones innovadoras y aceleran el tiempo de lanzamiento de nuevos productos.",
        },
    ];

    return (
        <div className="bg-[#004CFB] w-11/12 rounded-3xl m-auto mb-4 mt-4 px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Nuestros servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card key={index} className="bg-white">
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <Icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
