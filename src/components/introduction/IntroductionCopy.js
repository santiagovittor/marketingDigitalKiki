import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const IntroductionCopy = () => {
    
    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);

    
    return ( 

        <div className="introductionContainer__copy" data-aos="fade-down">
            <h3>TRABAJEMOS JUNTOS Y HAGAMOS CRECER TU EMPRESA</h3>
            <h1>Agencia de Marketing Online</h1>
            <p>Creamos experiencias digitales únicas. Con más de 10 años de conocimiento y experiencia, diseñamos  sitios web y los posicionamos primeros en su segmento, creamos marcas y las ayudamos a tener éxito</p>
        </div>
     );
}
 
export default IntroductionCopy;