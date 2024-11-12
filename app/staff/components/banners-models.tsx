import Image from "next/image";

export default function Banner() {
    return (
        <div className="px-4 py-20 gradient-c text-white">
            <div className="flex container mx-auto flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-[#8efa00]">Potencia tu Equipo</span><br/>
                        <span className="text-white">con Talento Especializado</span><br/>
                        <span className="text-white">para tu Transformación Digital</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        En Goline, ofrecemos Staff Augmentation para brindarte acceso a profesionales de tecnología que te ayudarán a alcanzar tus metas estratégicas de forma ágil y eficiente.
                    </p>
                    <button className="bg-[#8efa00] text-black px-6 py-3 rounded-md font-semibold">
                        Conoce más
                    </button>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/staff-augmentation.png" // Cambia la imagen si es necesario
                        alt="Staff Augmentation"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    );
}
