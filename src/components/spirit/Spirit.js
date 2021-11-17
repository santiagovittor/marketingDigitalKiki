import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Spirit = () => {

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);

    return ( 
             <section className="spiritContainer">
            <div className="spiritContainer__box" data-aos="fade-left">
                <h1>Soluciones creativas a problemas comunes & corrientes.</h1>
                <h3>Ofrecemos un servicio integral, lo que significa que contamos con cobertura desde el diseño y el contenido hasta la planificación de objetivos comerciales.</h3>
                <hr/>
                <p>Formarás una relación duradera con nosotros, la colaboración y comunicación es fundamental para nosotros y para el desarrollo de soluciones creativas.</p>
            </div>
        </section>

     );
}
 
export default Spirit;