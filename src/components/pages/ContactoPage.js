import ContactForm from "../contact/ContactForm";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import GoTopArrow from "../goTopArrow/GoTopArrow"
import WhatsappButton from "../whatsappButton/WhatsappButton"



const ContactoPage = () => {
    return ( 

        <>
        <header>
            <NavBar/>
        </header>
        <ContactForm/>
        <GoTopArrow/>
        <WhatsappButton/>
        <Footer/>
        </>


     );
}
 
export default ContactoPage;