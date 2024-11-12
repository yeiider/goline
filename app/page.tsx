import Banner from "@/app/components/banners";
import ClientCarousel from "@/app/components/ClientCarousel";
import ServicesSection from "@/app/components/Services";
import Technology from "@/app/components/Technology";
import NewsletterSignup from "@/app/components/newsletter";
import ServiciosIa from "@/app/components/servicios-ia";

export default function Home() {
    return (
        <>
            <Banner />
            <ClientCarousel />
            <ServicesSection />
            <ServiciosIa/>
            <Technology />
            <NewsletterSignup />
        </>
    );
}
