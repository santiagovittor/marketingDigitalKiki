import whatsapp from "../../assets/svgs/whatsapp.svg"


const WhatsappButton = () => {
    return ( 

        <div id="whatsappButtonContainer">
            <img src={whatsapp} alt="whatsapp icon"/>
            <a target="blank" href="https://api.whatsapp.com/send?phone=+541162300345&text=Hola!" id="whatsappButton">Estamos atendiendo</a>
        </div>

     );
}
 
export default WhatsappButton;