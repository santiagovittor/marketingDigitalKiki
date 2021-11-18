import { useState,useEffect } from "react";
import BrandBanner from "../brandBanner/BrandBanner";
import GoTopArrow from "../goTopArrow/GoTopArrow";
import Header from "../header/Header";
import Introduction from "../introduction/Introduction";
import Spirit from "../spirit/Spirit";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import AOS from "aos";
import 'aos/dist/aos.css';



const MainPage = () => {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);


    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


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
        {scrolling? <GoTopArrow data-aos="flip-left"/> : <></>}
        <WhatsappButton/>
        </div>
        </>
     );
}
 
export default MainPage;