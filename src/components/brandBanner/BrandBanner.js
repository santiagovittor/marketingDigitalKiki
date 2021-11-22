import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const BrandBanner = () => {

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


    return ( 

        <section className="brandBannerContainer" >
            <ul data-aos="fade" >
                <li >
                    <img src="https://www.svgrepo.com/show/303164/facebook-logo.svg" alt="facebookLogo"/>
                </li>
                <li>
                <img src="https://www.svgrepo.com/show/353798/google.svg" alt="googleLogo"/>
                </li>
                <li>
                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png" alt="instagramLogo"/>
                </li>
            </ul>
        </section>


     );
}
 
export default BrandBanner;