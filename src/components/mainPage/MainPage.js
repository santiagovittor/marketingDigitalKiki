import BrandBanner from "../brandBanner/BrandBanner";
import Header from "../header/Header";
import Introduction from "../introduction/Introduction";
import Spirit from "../spirit/Spirit";
import WhatsappButton from "../whatsappButton/WhatsappButton";

const MainPage = () => {
    return ( 
        <>
        <div className="mainContainer">
        <Header/>
        <Introduction/>
        <Spirit/>
        <BrandBanner/>
        <WhatsappButton/>
        </div>
        </>
     );
}
 
export default MainPage;