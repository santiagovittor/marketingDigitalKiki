import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";
import GoTopArrow from "../goTopArrow/GoTopArrow"
import WhatsappButton from "../whatsappButton/WhatsappButton"



const MarketingDigitalPage = () => {
    return ( 

        <>
        <header>
            <NavBar/>
        </header>
        <section className="diseñoWebContainer">
            <h1>
                MARKETING DIGITAL
            </h1>
        </section>
        <GoTopArrow/>
        <WhatsappButton/>
        <Footer/>
        </>



     );
}
 
export default MarketingDigitalPage;