import { Users, Briefcase, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionsModule() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-model from-green-50 to-blue-50">
            <div className="container px-4 md:px-6 m-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            ¿Por qué elegir a Goline para{" "}
                            <span className="text-blue-600">potenciar tu equipo</span> con Staff Augmentation?
                        </h2>
                        <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Con Goline, accede a talento especializado de manera flexible y eficiente. Nuestro Staff Augmentation asegura que tengas el equipo adecuado en cada etapa de tu proyecto.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Users className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Accede a un amplio grupo de especialistas en tecnología que se adaptan rápidamente a las necesidades de tu proyecto, incrementando la capacidad de tu equipo cuando más lo necesitas.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Briefcase className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Disfruta de flexibilidad y escalabilidad en la integración de talento, ajustando el equipo en función de la demanda del proyecto y reduciendo costos operativos.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Globe className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Colabora con expertos de cualquier ubicación. Nuestra red global asegura disponibilidad de talento especializado, sin importar dónde te encuentres.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
