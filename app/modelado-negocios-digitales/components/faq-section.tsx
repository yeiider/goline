import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
    return (
        <div className="w-full max-w-3xl mx-auto p-6 g-gradient-to-br from-green-500 to-blue-500">
            <h2 className="text-2xl font-bold mb-6 text-[#000047]">Soluciona tus dudas sobre Goline</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-gray-900 font-bold">
                        ¿Qué servicios ofrece Goline en el ámbito de soluciones digitales?
                    </AccordionTrigger>
                    <AccordionContent>
                        En Goline, ofrecemos servicios integrales en modelado de negocios digitales,
                        desarrollo de productos digitales, ciberseguridad, data-driven solutions y
                        transformación digital. Nuestro enfoque es personalizado para cada cliente,
                        garantizando resultados que aporten valor real.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Cómo es el proceso de modelado de negocios digitales en Goline?
                    </AccordionTrigger>
                    <AccordionContent>
                        En Goline, nuestro proceso de modelado de negocios digitales comienza con una
                        fase de diagnóstico y análisis para identificar áreas de oportunidad. Posteriormente,
                        trabajamos en conjunto con nuestros clientes en actividades de co-creación y prototipado,
                        aplicando metodologías ágiles y frameworks comprobados para desarrollar un modelo digital
                        efectivo y adaptado a su industria.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Cuál es el enfoque de Goline para el desarrollo de productos digitales?
                    </AccordionTrigger>
                    <AccordionContent>
                        Nuestro enfoque para el desarrollo de productos digitales está centrado en el usuario
                        y basado en metodologías ágiles. Nos enfocamos en crear soluciones innovadoras que
                        no solo mejoren la experiencia del usuario, sino que también incrementen la eficiencia
                        operativa y la competitividad del negocio.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Cuáles son los beneficios de adoptar una mentalidad ágil en la transformación digital?
                    </AccordionTrigger>
                    <AccordionContent>
                        La adopción de una mentalidad ágil permite a las empresas adaptarse rápidamente a
                        los cambios del mercado, mejorar la colaboración entre equipos y entregar valor de
                        forma incremental. En Goline, ayudamos a las organizaciones a adoptar esta cultura
                        para fomentar la innovación continua y la flexibilidad operativa.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Los servicios de Goline son adaptables a empresas de diferentes tamaños e industrias?
                    </AccordionTrigger>
                    <AccordionContent>
                        Sí, los servicios de Goline son altamente escalables y adaptables a empresas de cualquier
                        tamaño y sector. Personalizamos nuestras soluciones para atender las necesidades específicas
                        de cada cliente, asegurando que nuestros servicios aporten valor sin importar la industria.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Cómo selecciona Goline el equipo adecuado para cada proyecto?
                    </AccordionTrigger>
                    <AccordionContent>
                        En Goline, formamos equipos especializados para cada proyecto en función de los requisitos
                        técnicos y objetivos específicos. Nos aseguramos de asignar talento con experiencia relevante
                        y habilidades adecuadas para cada desafío, maximizando el éxito y la eficiencia de cada proyecto.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
