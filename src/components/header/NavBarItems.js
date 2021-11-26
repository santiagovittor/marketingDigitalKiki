import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {NavLink} from "react-router-dom"



const NavBarItems = () => {

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);

    const goTop = () =>{   
            window.scrollTo(0, 0)
    }


    return ( 
        <>
        <div className="navBarItems" data-aos="fade">
            <div className="navLinks">
            <NavLink to="/main" onClick={goTop} >Inicio</NavLink>
            </div>
            <div className="navLinks">
            <NavLink to="/marketing-digital" onClick={goTop}>Marketing Digital</NavLink>
            </div>
            <div className="navLinks">
            <NavLink to="/diseño-web" onClick={goTop}>Diseño Web</NavLink>
            </div>
            <div className="navLinks">
            <NavLink to="/e-commerce" onClick={goTop}>E-Commerce</NavLink>
            </div>
            <div className="navLinks">
            <NavLink to="/contacto" onClick={goTop}>Contacto</NavLink>
            </div>
        </div>
        </>

     );
}
 
export default NavBarItems;