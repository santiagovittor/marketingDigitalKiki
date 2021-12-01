import { sendPasswordResetEmail } from "@firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { auth } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const RestorePassword = () => {

    const [sentMail,setSentMail] = useState(false)
    const [errorSentMail,setErrorSentMail] = useState()

    return (

        <section className="accessPage">
            <div className="accessPage__restorePassword">
                <div className="accessPage__restorePassword--header">
                    <h1>Restablecer la contraseña</h1>
                </div>
                <div className="accessPage__restorePassword--description">
                    <p>Introduce el correo electrónico con el que estás registrado y te enviaremos un email para restablecer la contraseña.</p>
                </div>
                <Formik
                    validateOnMount
                    initialValues={{
                        correo: ''
                    }}
                    validate={(valores) => {
                        let errores = {}
                        if (!valores.correo) {
                            errores.correo = ' Por favor ingresa un correo electrónico.'
                        }
                        else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                            errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
                        }
                        return errores
                    }}
                    onSubmit={(valores, { resetForm }) => {

                        const resetPassword = async (valores) =>{

                            try{
                                const res = await sendPasswordResetEmail(auth,valores.correo)
                                console.log(res)
                                setSentMail(true)
                                setErrorSentMail(false)
                            }
                            catch(err){
                                console.error(err.message)
                                setErrorSentMail(err.message)
                            }
                    
                        }
                        resetPassword(valores)
                        resetForm()
                    }}
                >
                    {({ errors, isValid }) => (
                        <Form>
                            <div className="accessPage__restorePassword--inputBox">

                                <label htmlFor="correo">Mail</label>
                                <Field
                                    type="email"
                                    name="correo"
                                    placeholder="Ingresa tu email."
                                    id="correo"      
                                />
                                <ErrorMessage name="correo" component={() => (
                                    <div className="accessPage__form--error">{errors.correo}</div>
                                )} />
                                {sentMail? <p className="accessPage__form--success">El blanqueo se envió correctamente, revise su casilla de correo.</p>: <></>}
                                {errorSentMail? <p className="accessPage__form--error">{errorSentMail}.</p>: <></>}
                            </div>
                            <div className="accessPage__restorePassword--restoreButton">
                    
                    {isValid? <button type="submit" >Restablecer contraseña</button> : <button id="restorePasswordDisabled">Restablecer contraseña</button>}

                </div>

                        </Form>
                    )}
                </Formik>
                <Link to ="/login" className="accessPage__restorePassword--restoreButtonBack" > <button type="button">Volver</button></Link>


            </div>
        </section>


    );
}

export default RestorePassword;