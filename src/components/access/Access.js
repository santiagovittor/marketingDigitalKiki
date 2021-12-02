import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import googleAuth from "../../assets/svgs/googleAuth.svg";
import facebookAuth from "../../assets/svgs/facebookAuth.svg";


const Access = () => {

    const [logInEmail, setLogInEmail] = useState();
    const [logInPassword, setLogInPassword] = useState();
    const [errorLogIn, setErrorLogIn] = useState("");
    const [loggedUser, setLoggedUser] = useState({});


    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then((re)=>{
            console.log(re)
        })
        .catch((err)=>{
            console.error(err)
        })
    }

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth,provider)
        .then((re)=>{
            console.log(re)
        })
        .catch((err)=>{
            console.error(err)
        })
    }


    onAuthStateChanged(auth, (currentUser) => {
        setLoggedUser(currentUser)
    });

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


    const logIn = async () => {

        try {
            const user = await signInWithEmailAndPassword(auth, logInEmail, logInPassword)
            console.log(user)
        }
        catch (error) {
            setErrorLogIn(error.message)
            console.error(error.message)
        }

    };

    const logOut = async () => {

        await signOut(auth)

    };




    return (
        <>
            <section className="accessPage">
                <div className="accessPage__form" data-aos="fade-in">
                    <h2>Iniciar Sesión</h2>
                    <input
                        type="text"
                        placeholder="Ingresa tu mail"
                        onChange={(event) => {
                            setLogInEmail(event.target.value);
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(event) => {
                            setLogInPassword(event.target.value);
                        }}
                    />
                    <h4 className="accessPage__form--error">{errorLogIn}</h4>
                    {logInEmail && logInPassword ? <button onClick={logIn}>
                        Iniciar sesión
                    </button>
                        :
                        <button id="registerDisabled" >
                            Iniciar sesión
                        </button>

                    }

                    <Link to="/resetpassword">
                        <p id="forgotPasswordLink"> He olvidado mi contraseña</p>
                    </Link>
                    <Link to="/register" >
                        <p id="forgotPasswordLink"> Registrar una nueva cuenta</p>
                    </Link>
                    <h5>O inicia sesión con estos servicios</h5>
                    <div className="signInWithService">
                    {loggedUser? <button className="signInWithServiceButton__disabled" ><img src={googleAuth} alt="logo de google para autentificacion"/></button> :<button className="signInWithServiceButton" onClick={signInWithGoogle}><img src={googleAuth} alt="logo de google para autentificacion"/></button>}
                    {loggedUser? <button className="signInWithServiceButton__disabled" ><img src={facebookAuth} alt="logo de facebook para autentificacion"/></button> :<button className="signInWithServiceButton" onClick={signInWithFacebook} ><img src={facebookAuth} alt="logo de facebook para autentificacion"/></button>}
                    </div>
                    {loggedUser ?
                        <div>
                            <h4>Usuario logueado: {loggedUser?.email}</h4>
                            <button onClick={logOut}>
                                Cerrar sesión
                            </button>
                            <Link to="/joke">
                                <button>Ingresar al sitio</button>
                            </Link>
                        </div>
                        :
                        <>
                        </>
                    }
                </div>
            </section>
        </>
    );
}

export default Access;