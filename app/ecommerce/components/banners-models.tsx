import Image from "next/image";

export default function Banner() {
    return (
        <div className="px-4 py-20 gradient-c text-white">
            <div className="flex container mx-auto flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-[#8efa00]">Impulsa tu Tienda en Línea</span><br />
                        <span className="text-white">con Soluciones de E-commerce</span><br />
                        <span className="text-white">a la Medida</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        En Goline, transformamos la manera en que vendes en línea. Con nuestras soluciones de e-commerce personalizadas, optimiza la experiencia del cliente, aumenta tus ventas y expande tu alcance en el mercado digital.
                    </p>
                    <button className="bg-[#8efa00] text-black px-6 py-3 rounded-md font-semibold">
                        Conoce más
                    </button>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/digital.png" // Asegúrate de que esta imagen esté en tu carpeta de imágenes
                        alt="E-commerce"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    );
}
