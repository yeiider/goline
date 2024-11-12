import { ShieldCheck, Lock, Globe } from "lucide-react"; // Cambié los íconos para reflejar temas de seguridad
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionsModule() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-model from-green-50 to-blue-50">
            <div className="container px-4 md:px-6 m-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            ¿Por qué elegir a Goline para{" "}
                            <span className="text-blue-600">proteger tu negocio</span> con soluciones de Ciberseguridad?
                        </h2>
                        <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Goline ofrece soluciones de ciberseguridad avanzadas y personalizadas para proteger tus sistemas críticos y datos. Nuestro enfoque integral asegura la resiliencia de tu infraestructura digital frente a amenazas cada vez más complejas.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <ShieldCheck className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Protección proactiva frente a amenazas. Nuestro equipo implementa herramientas y protocolos de seguridad avanzados para prevenir ataques y minimizar riesgos.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Lock className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Seguridad de datos y privacidad. Implementamos controles robustos para proteger la confidencialidad de tu información, asegurando el cumplimiento de las normativas de seguridad.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Globe className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Respuesta global y monitoreo continuo. Con una red global de expertos en ciberseguridad, ofrecemos monitoreo 24/7 y respuestas inmediatas ante cualquier incidente de seguridad.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
