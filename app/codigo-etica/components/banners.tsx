import Image from "next/image";

export default function CodigoEticaBanner() {
    return (
        <div className="px-4 py-20 gradient-c text-white">
            <div className="flex container mx-auto flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-[#8efa00]">Código de Ética</span><br />
                        <span className="text-white">de Goline</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Nuestro compromiso es actuar con integridad, respeto y responsabilidad en todas nuestras operaciones. Este código guía nuestras decisiones y refleja los valores que nos definen como empresa.
                    </p>
                    {/*<button className="bg-[#8efa00] text-black px-6 py-3 rounded-md font-semibold">
                        Leer Código Completo
                    </button>*/}
                </div>

            </div>
        </div>
    );
}
