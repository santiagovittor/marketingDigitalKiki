import upArrow from "../../assets/svgs/upArrow.svg"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const GoTopArrow = () => {

    const scrollTop = () =>{
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }
    
    useEffect(() =>{
        AOS.init()
    },[]);


    return ( 

        <div id="goTopArrow" data-aos="fade-left">

            <button onClick={scrollTop}><img src={upArrow} alt="up arrow to go top"/></button>
        </div>


     );
}
 
export default GoTopArrow;