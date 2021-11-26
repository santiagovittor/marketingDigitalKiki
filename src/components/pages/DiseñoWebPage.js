import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import GoTopArrow from "../goTopArrow/GoTopArrow"
import WhatsappButton from "../whatsappButton/WhatsappButton"

const DiseñoWebPage = () => {
    return ( 

        <>
        <header>
            <NavBar/>
        </header>
        <section className="diseñoWebContainer">
            <h1>
                DISEÑO WEB
            </h1>
        </section>
        <GoTopArrow/>
        <WhatsappButton/>
        <Footer/>
        </>


     );
}
 
export default DiseñoWebPage;