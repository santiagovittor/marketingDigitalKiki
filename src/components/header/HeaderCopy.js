import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const HeaderCopy = () => {

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);

    return ( 

        <div className="headerCopy" data-aos="fade-right">
        <h2>Todo lo que necesitas para potenciar tu emprendimiento.</h2>
        <p>Mejoramos tu imagen digital y atraemos personas interesadas en tus productos o servicios a tu pagina web o negocio físico, analizamos los resultados y los multiplicamos.</p>
        </div>
     );
}
 
export default HeaderCopy;