import HeaderAboutGoline from "@/app/sobre-goline/components/header";
import CompanyGoline from "@/app/sobre-goline/components/company";
import ContactoGoline from "@/app/contacto/components/contact";
import Especiales from "@/app/sobre-goline/components/especiales";
import Goline from "@/app/sobre-goline/components/goline";


export default function SobreGoline() {
    return (
        <div>
            <HeaderAboutGoline/>
            <CompanyGoline/>
            <Goline/>
            <Especiales/>
            <ContactoGoline/>
        </div>
    );
}
