import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";




const RestorePassword = () => {

    const [sentMail,setSentMail] = useState(false)
    const [resetPasswordEmail, setResetPasswordEmail] = useState();
    const [errorSentMail,setErrorSentMail] = useState()

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


    const resetPassword = async () =>{

        try{
            await sendPasswordResetEmail(auth,resetPasswordEmail)
            setSentMail(true)
            setErrorSentMail(false)
        }
        catch(err){
            console.error(err.message)
            setErrorSentMail(err.message)
        }

    }

    return (

        <section className="accessPage">
            <div className="accessPage__restorePassword" data-aos="fade">
                <div className="accessPage__restorePassword--header">
                    <h1>Restablecer la contraseña</h1>
                </div>
                <div className="accessPage__restorePassword--description">
                    <p>Introduce el correo electrónico con el que estás registrado y te enviaremos un email para restablecer la contraseña.</p>
                </div>
                
                            <div className="accessPage__restorePassword--inputBox">

                                <label htmlFor="correo">Mail</label>
                                <input
                                    type="email"
                                    name="correo"
                                    placeholder="Ingresa tu email."
                                    id="correo"
                                    onChange={(event) => {setResetPasswordEmail(event.target.value);}}      
                                />
                                {sentMail? <p className="accessPage__form--success">El blanqueo se envió correctamente, revise su casilla de correo.</p>: <></>}
                                {errorSentMail? <p className="accessPage__form--error">{errorSentMail}.</p>: <></>}
                            </div>
                            <div className="accessPage__restorePassword--restoreButton">
                    
                    {resetPasswordEmail? <button onClick={resetPassword} >Restablecer contraseña</button> : <button id="restorePasswordDisabled">Restablecer contraseña</button>}
                    <Link to ="/login" > <button type="button">Volver</button></Link>

                </div>


            </div>
        </section>


    );
}

export default RestorePassword;