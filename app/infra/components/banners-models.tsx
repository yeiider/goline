import Image from "next/image";

export default function CyberSecurity() {
    return (
        <div className="px-4 py-20 gradient-c text-white">
            <div className="flex container mx-auto flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-[#8efa00]">Protege tu Empresa</span><br/>
                        <span className="text-white">con Soluciones de Ciberseguridad</span><br/>
                        <span className="text-white">de Nivel Mundial</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        En Goline, ofrecemos servicios avanzados de ciberseguridad para proteger tu infraestructura digital contra amenazas y ataques. Nuestro equipo de expertos trabaja contigo para asegurar la confidencialidad, integridad y disponibilidad de tus datos y sistemas.
                    </p>
                    <button className="bg-[#8efa00] text-black px-6 py-3 rounded-md font-semibold">
                        Descubre Nuestras Soluciones
                    </button>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/cybersecurity.png" // Asegúrate de que esta imagen esté en tu carpeta de imágenes
                        alt="Ciberseguridad"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    );
}
