export default function TerminosBanner() {
    return (
        <div className="px-4 py-20 gradient-c text-white">
            <div className="flex container mx-auto flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-[#8efa00]">Términos y Condiciones</span><br />
                        <span className="text-white">de Goline</span>
                    </h1>
                    <div className="text-lg md:text-xl mb-6">
                        Al utilizar nuestros servicios, aceptas cumplir con los términos y condiciones establecidos. Estos términos aseguran un uso justo y seguro de nuestras soluciones, reflejando nuestro compromiso con la transparencia y la responsabilidad.
                    </div>
                    {/*<button className="bg-[#8efa00] text-black px-6 py-3 rounded-md font-semibold">
                        Leer Términos Completos
                    </button>*/}
                </div>
            </div>
        </div>
    );
}
