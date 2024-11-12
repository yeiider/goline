import { Rocket, Lightbulb, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionsModule() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-model from-green-50 to-blue-50">
            <div className="container px-4 md:px-6 m-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            ¿Por qué elegir a Goline para{" "}
                            <span className="text-blue-600">impulsar la transformación digital</span> de tu empresa?
                        </h2>
                        <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            En Goline, convertimos los desafíos en oportunidades con soluciones digitales innovadoras y personalizadas que crean un valor duradero.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Rocket className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Transformamos empresas mediante soluciones digitales estratégicas y equipo experto, asegurando resultados que potencian el crecimiento y la eficiencia.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Lightbulb className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Creamos modelos de negocio digitales personalizados, impulsamos decisiones basadas en datos y desarrollamos productos digitales adaptados a tus necesidades.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Settings className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Adoptamos metodologías ágiles para fortalecer competencias organizacionales y crear nuevas oportunidades en un mercado dinámico.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
