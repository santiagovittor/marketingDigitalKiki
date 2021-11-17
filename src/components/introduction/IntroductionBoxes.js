import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



const IntroductionBoxes = () => {

    useEffect(() =>{
        AOS.init()
    },[]);


    return ( 

        <div className="introductionContainer__boxesContainer" >
                <div className="introductionContainer__boxesContainer--box" data-aos="flip-left" data-aos-duration="2200">
                    <img src="https://buhomedia.com.ar/wp-content/uploads/2018/06/rocket.svg" alt="img1"/>
                    <h1>
                    MARKETING ONLINE
                    </h1>
                    <p>
                    Atraemos personas interesadas a tu negocio pero medio de campañas pubdivcitarias en las plataformas de Google Facebook e Instagram.
                    </p>
                </div>
                <div className="introductionContainer__boxesContainer--box" data-aos="flip-left" data-aos-duration="1700" > 
                    <img src="https://buhomedia.com.ar/wp-content/uploads/2018/06/web-design.svg" alt="img2"/>
                    <h1>
                    DISEÑO WEB
                    </h1>
                    <p>
                    Diseñamos páginas web para empresas y PyME que buscan mejorar su imagen en Internet e incrementar la interacción de sus clientes con su marca.

                    </p>
                </div>

                <div className="introductionContainer__boxesContainer--box" data-aos="flip-left" data-aos-duration="1200" >
                    <img src="https://buhomedia.com.ar/wp-content/uploads/2018/06/online-shop.svg" alt="img3"/>
                    <h1>
                    E-COMMERCE
                    </h1>
                    <p>
                    Creamos y administramos sistemas de ventas online para empresas o PyME que desean comercializar sus productos en Internet y expandir su negocio.

                    </p>
                </div>

        </div>


     );
}
 
export default IntroductionBoxes;