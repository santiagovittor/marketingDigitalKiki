import upArrow from "../../assets/svgs/upArrow.svg"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const GoTopArrow = () => {

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

    const goTop = () =>{
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }
    
    useEffect(() =>{
        AOS.init()
    },[]);


    return ( 

        scrolling? 
        <div id="goTopArrow" data-aos="fade-left">

            <button onClick={goTop}><img src={upArrow} alt="up arrow to go top"/></button>
        </div>
        : <></>

     );
}
 
export default GoTopArrow;