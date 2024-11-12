import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#081029] text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            <span className="text-green-400">GO</span> LINE
                        </h2>
                    </div>

                    <div>
                        <h3 className="text-green-400 font-semibold mb-4">Soluciones</h3>
                        <ul className="space-y-2">
                            <li><a href="/modelado-negocios-digitales">Modelado de Negocios Digitales</a></li>
                            <li><a href="/staff">Staff Augmentation</a></li>
                            <li><a href="/infra">Infraestructura y Ciberseguridad</a></li>
                            <li><a href="/ecommerce">Servicios Ecommerce</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-green-400 font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-2">
                            <li>+57 320 775 3755</li>
                            <li>contacto@goline.com.co</li>
                            <li>Chile | México | Colombia</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-green-400 font-semibold mb-4">Links de interés</h3>
                        <ul className="space-y-2">
                            <li><a href="/codigo-etica">Código de Ética Empresarial</a></li>
                            <li><a href="/sobre-goline">Sobre Goline</a></li>
                            <li><a href="/terminos">Términos de Servicio</a></li>
                            <li><a href="/politica-privacidad">Política de Privacidad</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex justify-center space-x-6 mb-4">
                        <Linkedin className="h-6 w-6 text-green-400" aria-label="LinkedIn" />
                        <Facebook className="h-6 w-6 text-green-400" aria-label="Facebook" />
                        <Instagram className="h-6 w-6 text-green-400" aria-label="Instagram" />
                        <Twitter className="h-6 w-6 text-green-400" aria-label="Twitter" />
                        <Youtube className="h-6 w-6 text-green-400" aria-label="YouTube" />
                    </div>
                    <p className="text-center text-sm">
                        Copyright © 2024 | GO LINE. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
