import Image from "next/image";

export default function Banner() {
    return (
        <div className="px-4 py-20 gradient-c text-white">
            <div className="flex container mx-auto flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-[#8efa00]">Modela el Futuro</span><br/>
                        <span className="text-white">de tu Negocio</span><br/>
                        <span className="text-white">con Soluciones Digitales</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Transformamos tu empresa en una organización ágil y digitalizada, alineada con la innovación y lista para competir en un entorno global.
                    </p>
                    <button className="bg-[#8efa00] text-black px-6 py-3 rounded-md font-semibold">
                        Descubre cómo
                    </button>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/Group.png"
                        alt="banner"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    );
}
