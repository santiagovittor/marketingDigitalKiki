import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {NavLink} from "react-router-dom"



const NavBarItems = () => {

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


    return ( 
        <>
        <div className="navBarItems" data-aos="fade">
            <div className="navLinks">
            <NavLink to="/main" >Inicio</NavLink>
            </div>
            <div className="navLinks">
            <NavLink to="/marketing-digital">Marketing Digital</NavLink>
            </div>
            <div className="navLinks">
            <NavLink to="/diseño-web">Diseño Web</NavLink>
            </div>
            <div className="navLinks">
            <NavLink to="/e-commerce">E-Commerce</NavLink>
            </div>
            <div className="navLinks">
            <NavLink to="/contacto">Contacto</NavLink>
            </div>
        </div>
        </>

     );
}
 
export default NavBarItems;