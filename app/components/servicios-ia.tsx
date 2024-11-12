import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cog, BarChart } from "lucide-react";
import Link from "next/link";

export default function ServiciosIa() {
    return (
        <div className="container gradient-model mx-auto px-4 py-16 relative">
            <div
                className="absolute top-0 right-0 bg-primary text-primary-foreground text-sm font-bold py-1 px-3 rounded-bl-lg shadow-lg">
                Nuevo
            </div>
            <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-primary mb-4">IntelliProcess Solutions</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Transformando negocios con automatización inteligente y análisis de procesos avanzados.
                </p>
            </header>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* Process Automation Card */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-800">
                            <Cog className="h-7 w-7 text-primary"/>
                            Automatización de Procesos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">
                            Optimizamos flujos de trabajo con automatización inteligente, reduciendo costos y mejorando
                            la eficiencia operativa a través de la tecnología.
                        </p>
                    </CardContent>
                </Card>

                {/* Process Analysis Card */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-800">
                            <BarChart className="h-7 w-7 text-primary"/>
                            Análisis de Procesos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">
                            Usamos técnicas avanzadas de análisis de datos para identificar cuellos de botella y
                            encontrar oportunidades de mejora en tus procesos.
                        </p>
                    </CardContent>
                </Card>

                {/* AI-Powered Solutions Card */}
                <Card className="md:col-span-2 lg:col-span-3 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-800">
                            <Brain className="h-7 w-7 text-primary"/>
                            Potenciado por Inteligencia Artificial
                        </CardTitle>
                        <CardDescription>
                            Nuestras soluciones se basan en algoritmos de IA avanzados para lograr resultados superiores
                            en cada fase del proceso.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li><strong>Optimización continua:</strong> Algoritmos de aprendizaje automático que mejoran
                                los procesos con el tiempo.
                            </li>
                            <li><strong>Análisis de texto:</strong> Procesamiento de lenguaje natural para documentos y
                                comunicaciones.
                            </li>
                            <li><strong>Control de calidad:</strong> Visión por computadora para inspección y monitoreo
                                de calidad automatizados.
                            </li>
                            <li><strong>Toma de decisiones:</strong> Análisis predictivo que permite decisiones
                                proactivas y estratégicas.
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <Link href={"/contacto"}
                        className="group px-6 py-3 text-lg font-semibold bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    Solicite una demostración
                </Link>
            </div>
        </div>
    );
}
