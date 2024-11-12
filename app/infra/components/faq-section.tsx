import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
    return (
        <div className="w-full max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-[#000047]">Preguntas Frecuentes sobre Ciberseguridad</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-gray-900 font-bold">
                        ¿Qué servicios de ciberseguridad ofrece Goline?
                    </AccordionTrigger>
                    <AccordionContent>
                        En Goline, ofrecemos una amplia gama de servicios de ciberseguridad, incluyendo monitoreo de
                        amenazas en tiempo real, auditorías de seguridad, protección de datos, prevención de intrusiones,
                        y respuesta ante incidentes para proteger la infraestructura digital de tu empresa.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Cómo puede Goline ayudar a proteger mi infraestructura digital?
                    </AccordionTrigger>
                    <AccordionContent>
                        Nuestro equipo de expertos en ciberseguridad analiza y refuerza tu infraestructura digital,
                        implementando medidas como firewalls avanzados, gestión de accesos y protección de endpoints,
                        garantizando la seguridad de tus sistemas y la privacidad de tus datos.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Qué pasos sigue Goline en caso de un incidente de seguridad?
                    </AccordionTrigger>
                    <AccordionContent>
                        Ante un incidente de seguridad, activamos un protocolo de respuesta inmediata que incluye
                        la contención del incidente, análisis del origen, recuperación de los sistemas afectados,
                        y un informe detallado para prevenir futuros incidentes. Nuestro equipo trabaja 24/7 para
                        garantizar una respuesta rápida y eficaz.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Qué beneficios tiene realizar una auditoría de seguridad con Goline?
                    </AccordionTrigger>
                    <AccordionContent>
                        Las auditorías de seguridad de Goline identifican vulnerabilidades y brechas en tu infraestructura,
                        permitiendo implementar soluciones preventivas. Esto fortalece la postura de seguridad de tu empresa
                        y protege tus activos digitales frente a ataques externos e internos.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
