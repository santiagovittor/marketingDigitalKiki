import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";


const Access = () => {

    const [logInEmail, setLogInEmail] = useState();
    const [logInPassword, setLogInPassword] = useState();
    const [errorLogIn, setErrorLogIn] = useState("");
    const [loggedUser, setLoggedUser] = useState({});


    onAuthStateChanged(auth, (currentUser) => {
        setLoggedUser(currentUser)
    });


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
            <div className="accessPage__form">
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
                {logInEmail&&logInPassword? <button onClick={logIn}>
                    Iniciar sesión
                </button>
                :
                <button id="registerDisabled" >
                    Iniciar sesión
                </button>

                }
                
                <Link to="/restore-password" >
                   <p id="forgotPasswordLink"> He olvidado mi contraseña</p>
                    </Link>
                    <Link to="/register" >
                   <p id="forgotPasswordLink"> Registrar una nueva cuenta</p>
                    </Link>

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