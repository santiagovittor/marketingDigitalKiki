import BrandBanner from "../brandBanner/BrandBanner";
import ContactContainer from "../contact/ContactContainer";
import GoTopArrow from "../goTopArrow/GoTopArrow";
import Header from "../header/Header";
import Introduction from "../introduction/Introduction";
import Spirit from "../spirit/Spirit";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import Footer from "../footer/Footer";



const MainPage = () => {

    

    return ( 
        <>
        <div className="mainContainer">
        <Header/>
        <Introduction/>
        <Spirit/>
        <BrandBanner/>
        <ContactContainer/>
        <GoTopArrow/>
        <WhatsappButton/>
        <Footer/>
        </div>
        </>
     );
}
 
export default MainPage;