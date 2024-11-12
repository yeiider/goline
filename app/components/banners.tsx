import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="px-4 py-20 gradient-c text-white">
            <div className="flex container mx-auto flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-[#8efa00]">Soluciones</span><br/>
                        <span className="text-white">tecnológicas para</span><br/>
                        <span className="text-white">tu empresa</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Impulsamos la eficiencia y productividad de tu negocio con desarrollo de software a medida y automatización de procesos.
                    </p>
                    <Link href={"/contacto"} className="bg-[#8efa00] text-black px-6 py-3 rounded-md font-semibold">
                        Contáctanos
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/banner.png"
                        alt="banner"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    );
}
