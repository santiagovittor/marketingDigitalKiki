import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";




const Register = () => {

    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();
    const [successRegister, setSuccessRegister] = useState("");
    const [errorRegister, setErrorRegister] = useState();


    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);

    
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
            setSuccessRegister("Tu usuario se registró correctamente.")
            setErrorRegister("")
        }
        catch (error) {
            setSuccessRegister("")
            setErrorRegister(error.message)
            console.error(error.message)
        }

    };




    return ( 

        <section className="accessPage">
        <div className="accessPage__form" data-aos="fade">

      <h4>Hola! Aquí puedes</h4>
                <h2>Registrar tu cuenta</h2>
                <input
                    type="text"
                    placeholder="Ingresa tu mail"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <h4 className="accessPage__form--error">{errorRegister}</h4>
                <p className="accessPage__form--success">{successRegister}</p>
                {registerEmail&&registerPassword? <button 
                    onClick={register}
                >
                    Registrar usuario
                </button>
                :
                <button id="registerDisabled"
                onClick={register}
            >
                Registrar usuario
            </button>

                }
    <Link to="/login">
    <button>
        Volver
        </button>
    </Link>
     </div>
     </section>


     );
}
 
export default Register;