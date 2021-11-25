import { Link } from "react-router-dom";
import logoKiki from "../../assets/pngs/logoKikiTransparent.png"


const Footer = () => {
    return (

        <footer className="footerContainer">
            <div className="footerItems">
                <div className="footerItems__column--brand">
                    <Link id="navBarLogo" to="/main">
                        <img src={logoKiki} alt="logoKiki" />
                    </Link>

                    <p> Ofrecemos un servicio integral para optimizar tu negocio en forma online.</p>
                </div>
                <div className="footerItems__column">
                    <h3>Recursos</h3>
                    <ul>
                        <li> 1 </li>
                        <li> 2 </li>
                        <li> 3 </li>
                        <li> 4 </li>
                    </ul>
                </div>
                <div className="footerItems__column">
                    <h3>Nosotros</h3>
                    <ul>
                        <li> 1 </li>
                        <li> 2 </li>
                        <li> 3 </li>
                        <li> 4 </li>
                    </ul>
                </div>
                <div className="footerItems__column">
                    <h3>Contacto</h3>
                    <ul>
                        <li> <a href="mailto:svittordev@gmail.com">svittordev@gmail.com</a> </li>
                        <li> 1162300345 </li>
                    </ul>
                </div>
            </div>
            <div className="footerItems__footer">
                <p>Hecho con ❤️ por KikiDigital™  </p>
            </div>
        </footer>

    );
}

export default Footer;