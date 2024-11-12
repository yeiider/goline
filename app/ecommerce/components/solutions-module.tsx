import { ShoppingCart, CreditCard, Globe } from "lucide-react"; // Cambié los íconos para reflejar temas de e-commerce
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionsModule() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-model from-green-50 to-blue-50">
            <div className="container px-4 md:px-6 m-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            ¿Por qué elegir a Goline para{" "}
                            <span className="text-blue-600">impulsar tu negocio</span> con soluciones de E-commerce?
                        </h2>
                        <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Goline ofrece servicios de e-commerce diseñados para aumentar tus ventas y mejorar la experiencia del cliente. Nuestro equipo experto asegura una implementación fluida y escalable para llevar tu tienda en línea al siguiente nivel.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <ShoppingCart className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Optimización de la experiencia de compra. Diseñamos experiencias de usuario intuitivas y atractivas para maximizar la conversión y fidelizar a tus clientes.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <CreditCard className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Integración de métodos de pago seguros. Implementamos múltiples opciones de pago para tus clientes, con el más alto estándar de seguridad para proteger sus transacciones.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-white/90 backdrop-blur">
                            <CardContent className="flex gap-4 p-6">
                                <div className="min-w-[2.5rem]">
                                    <Globe className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-700">
                                    Expansión a mercados globales. Te ayudamos a escalar tu negocio para que puedas vender tus productos a nivel mundial con infraestructura de comercio electrónico optimizada.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
