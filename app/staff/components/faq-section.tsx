import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
    return (
        <div className="w-full max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-[#000047]">Preguntas Frecuentes sobre Staff Augmentation</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-gray-900 font-bold">
                        ¿Qué es el servicio de Staff Augmentation de Goline?
                    </AccordionTrigger>
                    <AccordionContent>
                        El servicio de Staff Augmentation de Goline permite a las empresas integrar talento
                        especializado en tecnología de forma temporal, cubriendo necesidades puntuales en sus proyectos
                        sin los compromisos de una contratación tradicional.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Qué tipo de perfiles ofrece Goline en Staff Augmentation?
                    </AccordionTrigger>
                    <AccordionContent>
                        Ofrecemos perfiles especializados en desarrollo de software, inteligencia artificial,
                        automatización, ciencia de datos, y otros roles clave para apoyar iniciativas de transformación digital.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Cuánto tiempo toma incorporar el talento en mi equipo?
                    </AccordionTrigger>
                    <AccordionContent>
                        En Goline, nos enfocamos en una incorporación ágil. Tras analizar tus necesidades, nuestro
                        equipo puede integrarse en cuestión de días, adaptándose rápidamente a la dinámica de tu proyecto.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Puedo ajustar el equipo de Staff Augmentation durante el proyecto?
                    </AccordionTrigger>
                    <AccordionContent>
                        Sí, nuestro modelo es flexible y permite ajustar el equipo según las necesidades de tu proyecto.
                        Puedes escalar el equipo hacia arriba o hacia abajo conforme cambien los requerimientos.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
