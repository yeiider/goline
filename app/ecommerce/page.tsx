import SolutionsModule from "@/app/ecommerce/components/solutions-module";
import Banner from "@/app/ecommerce/components/banners-models";
import Services from "@/app/ecommerce/components/services";
import FaqSection from "@/app/ecommerce/components/faq-section";
import RelatedPosts from "@/app/ecommerce/components/related-posts";
import Link from "next/link";

export default function ModernisationsDigital() {
    return (
        <div>
            <Banner/>
            <SolutionsModule/>
            <Services/>
            <FaqSection/>
            <RelatedPosts/>
            <section className="w-full py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar tu transformación digital?</h3>
                <p className="mb-6">Contáctanos hoy para una asesoría personalizada y descubre cómo Goline puede
                    ayudarte a transformar tu negocio.</p>
                <Link className="bg-[#8efa00] text-black px-6 py-3 rounded-md font-semibold inline-block" href={"/contacto"}>Contáctanos</Link>
            </section>

        </div>
    );
}
