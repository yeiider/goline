import { Server, Settings, BarChart } from "lucide-react"

export default function Component() {
    return (
        <section className="py-16 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-16">
                    Nuestros Servicios
                </h2>

                <div className="grid gap-16">
                    {/* Digital Business Fundamentals */}
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="flex gap-4 md:flex-col items-start">
                            <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg shadow-sm p-3">
                                <Server className="w-full h-full text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1a237e] mb-2">
                                    Fundamentos del Negocio Digital
                                </h3>
                            </div>
                        </div>
                        <div className="md:col-span-3 grid sm:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Creación de Negocio Digital</h4>
                                <p className="text-gray-600 text-sm">
                                    Diseñamos soluciones a medida para B2C, B2B, B2B2C, D2C y Marketplaces.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Migración y Upgrades</h4>
                                <p className="text-gray-600 text-sm">
                                    Migramos o actualizamos plataformas conservando la integridad de tus datos y minimizando el tiempo de inactividad.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Integraciones Esenciales</h4>
                                <p className="text-gray-600 text-sm">
                                    Conectamos tu negocio digital con ERP, POS, CRM, OMS para optimizar operaciones y mejorar la experiencia.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Continuous Service Model */}
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="flex gap-4 md:flex-col items-start">
                            <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg shadow-sm p-3">
                                <Settings className="w-full h-full text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1a237e] mb-2">
                                    Modelo de Servicio Continuo
                                </h3>
                            </div>
                        </div>
                        <div className="md:col-span-3 grid sm:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Desarrollo Evolutivo</h4>
                                <p className="text-gray-600 text-sm">
                                    Nos adaptamos a los avances del mercado, avances tecnologicos y feedback de tus clientes, para mejorar continuamente.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Soporte Operacional</h4>
                                <p className="text-gray-600 text-sm">
                                    Brindamos asistencia ininterrumpida para garantizar operaciones fluidas y efectivas.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Growth Ongoing</h4>
                                <p className="text-gray-600 text-sm">
                                    Realizamos ciclos regulares de optimización de la tasa de conversión y mejora de la experiencia de usuario para mantener tu plataforma actualizada.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Digital Mastery Path */}
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="flex gap-4 md:flex-col items-start">
                            <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg shadow-sm p-3">
                                <BarChart className="w-full h-full text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1a237e] mb-2">
                                    Camino hacia la maestría digital
                                </h3>
                            </div>
                        </div>
                        <div className="md:col-span-3 grid sm:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Experiencia Digital mejorada</h4>
                                <p className="text-gray-600 text-sm">
                                    Realizamos mejoras de UX/UI, SEO, análisis de datos, personalización y pruebas A/B, para impulsar tu crecimiento.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Estrategia e-Commerce</h4>
                                <p className="text-gray-600 text-sm">
                                    Adoptamos estrategias avanzadas para optimizar distintos KPIs con el fin de afianzar el liderazgo de tu negocio digital.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1a237e] mb-2">Maestría de Plataforma</h4>
                                <p className="text-gray-600 text-sm">
                                    Buscamos que aproveches al máximo las capacidades de tu plataforma para generar decisiones basadas en datos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}