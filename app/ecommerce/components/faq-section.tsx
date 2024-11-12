import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
    return (
        <div className="w-full max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-[#000047]">Preguntas Frecuentes sobre E-commerce</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-gray-900 font-bold">
                        ¿Qué servicios de e-commerce ofrece Goline?
                    </AccordionTrigger>
                    <AccordionContent>
                        Goline ofrece una gama completa de servicios de e-commerce, incluyendo desarrollo de tiendas en línea, optimización de la experiencia de usuario, integración de métodos de pago seguros y soporte para escalar operaciones en mercados globales.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Cómo puede Goline ayudarme a aumentar las ventas en mi tienda en línea?
                    </AccordionTrigger>
                    <AccordionContent>
                        Nuestro equipo de expertos en e-commerce utiliza estrategias de optimización de la experiencia de usuario (UX), diseño intuitivo y herramientas de análisis de datos para mejorar la conversión y retener a los clientes. Además, implementamos funciones avanzadas como personalización y recomendaciones de productos.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Es posible integrar diferentes métodos de pago en mi tienda en línea?
                    </AccordionTrigger>
                    <AccordionContent>
                        Sí, en Goline integramos múltiples métodos de pago para adaptarnos a las preferencias de tus clientes y ofrecer una experiencia de compra segura. Desde tarjetas de crédito hasta pagos digitales y plataformas de pago internacionales, te ayudamos a expandir tus opciones de pago.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-bold">
                        ¿Goline puede ayudarme a escalar mi tienda en línea a nivel internacional?
                    </AccordionTrigger>
                    <AccordionContent>
                        Absolutamente. Goline ofrece servicios para escalar operaciones de e-commerce en mercados globales, incluyendo la localización del sitio, gestión de inventarios internacionales, opciones de pago multimoneda y optimización logística para envíos globales.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
