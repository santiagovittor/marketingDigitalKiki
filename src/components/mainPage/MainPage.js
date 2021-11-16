import BrandBanner from "../brandBanner/BrandBanner";
import Header from "../header/Header";
import Introduction from "../introduction/Introduction";
import Spirit from "../spirit/Spirit";

const MainPage = () => {
    return ( 
        <>
        <div className="mainContainer">
        <Header/>
        <Introduction/>
        <Spirit/>
        <BrandBanner/>
        </div>
        </>
     );
}
 
export default MainPage;