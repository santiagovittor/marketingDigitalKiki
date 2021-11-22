import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {Link} from "react-router-dom"



const NavBarItems = () => {

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


    return ( 
        <>
        <div className="navBarItems" data-aos="fade">
            <div className="navLinks">
            <Link to="/main">Inicio</Link>
            </div>
            <div className="navLinks">
            <Link to="/main">Marketing Digital</Link>
            </div>
            <div className="navLinks">
            <Link to="/main">Diseño Web</Link>
            </div>
            <div className="navLinks">
            <Link to="/main">E-Commerce</Link>
            </div>
            <div className="navLinks">
            <Link to="/main">Contacto</Link>
            </div>
        </div>
        </>

     );
}
 
export default NavBarItems;