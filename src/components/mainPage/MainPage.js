import { useState,useEffect } from "react";
import BrandBanner from "../brandBanner/BrandBanner";
import ContactContainer from "../contact/ContactContainer";
import GoTopArrow from "../goTopArrow/GoTopArrow";
import Header from "../header/Header";
import Introduction from "../introduction/Introduction";
import Spirit from "../spirit/Spirit";
import WhatsappButton from "../whatsappButton/WhatsappButton";




const MainPage = () => {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
          let currentPosition = window.pageYOffset;
          if (currentPosition > 300) {
            setScrolling(true);
          }
          else{
              setScrolling(false)
          } 
        
          setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    return ( 
        <>
        <div className="mainContainer">
        <Header/>
        <Introduction/>
        <Spirit/>
        <BrandBanner/>
        <ContactContainer/>
        {scrolling? <GoTopArrow/> : <></>}
        <WhatsappButton/>
        </div>
        </>
     );
}
 
export default MainPage;