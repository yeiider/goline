"use client";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react'; // Las librerías usadas

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-[#081029] text-white fixed top-0 left-0 z-50 w-full">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-green-400">
                            GO <span className="text-white">LINE</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <div ref={dropdownRef} className="relative">
                            <button className="flex items-center space-x-1" onClick={toggleDropdown}>
                                <span>Soluciones</span>
                                <ChevronDown size={16} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-[#081029] text-gray-500 rounded-md shadow-lg py-2 z-10">
                                    <Link href="/modelado-negocios-digitales" onClick={toggleDropdown} className="block px-4 py-2 hover:text-green-400">
                                        Modelado de Negocios Digitales
                                    </Link>
                                    <Link href="/staff" className="block px-4 py-2 hover:text-green-400" onClick={toggleDropdown}>
                                        Staff Augmentation
                                    </Link>
                                    <Link href="/infra" className="block px-4 py-2 hover:text-green-400" onClick={toggleDropdown}>
                                        Infraestructura y Ciberseguridad
                                    </Link>
                                    <Link href="/ecommerce" className="block px-4 py-2 hover:text-green-400" onClick={toggleDropdown}>
                                        Servicios Ecommerce
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="/sobre-goline" className="hover:text-[#8efa00]">
                            Acerca de Go Line
                        </Link>
                        <Link href="/blog" className="hover:text-[#8efa00]">
                            Blog
                        </Link>
                        <Link href="/contacto" className="bg-[#8efa00] text-[#0a0b1a] px-4 py-2 rounded-md hover:bg-[#7de600]">
                            Contáctanos
                        </Link>
                    </div>
                    <button onClick={toggleMobileMenu} className="md:hidden">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-[#081029] text-white`}>
                    <ul className="flex flex-col space-y-4 py-4">
                        <li>
                            <button className="flex" onClick={toggleDropdown}>
                                Soluciones <ChevronDown size={16} className="ml-10" />
                            </button>
                            {isDropdownOpen && (
                                <div className="mt-2 space-y-2">
                                    <Link href="/modelado-negocios-digitales" className="block border-b-2 px-4 py-2 hover:text-[#8efa00]">
                                        Modelado de Negocios Digitales
                                    </Link>
                                    <Link href="/staff" className="block border-b-2 px-4 py-2 hover:text-[#8efa00]">
                                        Staff Augmentation
                                    </Link>
                                    <Link href="/infra" className="block px-4 py-2 border-b-2 hover:text-[#8efa00]">
                                        Infraestructura y Ciberseguridad
                                    </Link>
                                    <Link href="/ecommerce" className="block px-4 py-2 border-b-2 hover:text-[#8efa00]">
                                        Servicios Ecommerce
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link href="/sobre-goline" className="hover:text-[#8efa00]">
                                Acerca de Go Line
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-[#8efa00]">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/equipo" className="hover:text-[#8efa00]">
                                Súmate al equipo
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacto" className="bg-[#8efa00] text-[#0a0b1a] px-4 py-2 rounded-md hover:bg-[#7de600]">
                                Contáctanos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;