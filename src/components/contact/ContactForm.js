import { addDoc, collection } from "@firebase/firestore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import db from "../../firebase/firebaseConfig";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";





const ContactForm = () => {

    const [sentForm, setSentForm] = useState(false);
    const [messageId, setMessageId] = useState();


    const colRef = collection(db, 'mensajes')   


    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


    return ( 

        <div className="contactContainer__form" data-aos="fade-down">
            <div className="contactContainer__form--img">

            </div>
            <div className="contactContainer__form--text">
                <div>
                <h1>Nos encantaría conocer tu negocio</h1>
                <p>Enviamos un mensaje por medio de nuestro formulario de contacto o comunicate al 1162300345</p>
                <p>Te invitamos a tener una reunión para poder conocer más en detalle tu negocio o proyecto.</p>
                </div>
                <div className="inputContainer">
                <Formik
                validateOnMount
                initialValues={{
                    nombre: '',
                    celular: '',
                    correo: '',
                    mensaje:''
                }}
                validate={(valores) => {
                    let errores = {}
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa un nombre.'
                    }
                    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios.'
                    }

                    if (!valores.correo) {
                        errores.correo = ' Por favor ingresa un correo electrónico.'
                    }
                    else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
                    }

                    if (!valores.celular) {
                        errores.celular = 'Por favor ingresa un celular.'
                    }
                    else if (!/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(valores.celular)) {
                        errores.celular = 'Ingresa un celular válido.'
                    }

                    if (!valores.mensaje) {
                        errores.mensaje = 'Por favor escribe tu mensaje.'
                    }
                   

                    return errores
                }}
                onSubmit={(valores, {resetForm}) => {

                    let date = new Date();
                    let currentDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();

                    const selfGeneratedMessage = {
                        client: {
                            nombre: valores.nombre,
                            phone: valores.celular,
                            email: valores.correo,
                            message: valores.mensaje
                        },
                        date: currentDate,
                    };


                  const postMessage = async() => {
                      try {
                          const datos = await addDoc(colRef,{selfGeneratedMessage});
                      setMessageId(datos.id)
                      setSentForm(true)
                      }
                      catch (error){
                        console.error("Error enviando el documento: " + error)
                      }
                  }
                  resetForm()
                  postMessage()
                  setTimeout(() => setSentForm(false), 15000)

                }}
                >
                    {({ errors, isValid }) => ( 
                    <Form>
                    <div className="inputContainer__each">
                                <label htmlFor="nombre">Nombre </label>
                                <Field
                                    type="text"
                                    name="nombre"
                                    placeholder="Tu nombre"
                                    id="nombre"
                                />
                            </div>
                            <ErrorMessage name="nombre" component={() => (
                                <div className="inputContainer__each--error">{errors.nombre}</div>
                            )} />

                            <div className="inputContainer__each">
                                <label htmlFor="correo">Mail</label>
                                <Field
                                    type="email"
                                    name="correo"
                                    placeholder="mail@mail.com"
                                    id="correo"
                                />
                            </div>
                            <ErrorMessage name="correo" component={() => (
                                <div className="inputContainer__each--error">{errors.correo}</div>
                            )} />
                            <div className="inputContainer__each">
                                <label htmlFor="celular">Celular</label>
                                <Field
                                    type="text"
                                    name="celular"
                                    placeholder="1162300345"
                                    id="celular"
                                />
                            </div>
                            <ErrorMessage name="celular" component={() => (
                                <div className="inputContainer__each--error">{errors.celular}</div>
                            )} />
                            <div className="inputContainer__each">
                                <label htmlFor="Description">Mensaje</label>
                                <Field
                                    type="textarea"
                                    name="mensaje"
                                    placeholder="Dejanos tu mensaje aquí."
                                    id="mensaje"
                                />
                            </div>
                            <ErrorMessage name="mensaje" component={() => (
                                <div className="inputContainer__each--error">{errors.mensaje}</div>
                            )} />
                            {isValid? (<button className="inputContainer__button" type="submit">Enviar mensaje</button>) : (<button className="inputContainer__button--disabled" type="submit" >Enviar mensaje</button>)}
                            {sentForm ?
                                <div className="inputContainer__successAlert">Recibimos tu mensaje con éxito con el código {messageId}! Nos pondremos en contacto en menos de 24hs.</div>
                                :
                                <>
                                </>
                            }
                    </Form>
                    )}
                </Formik>
                </div>
            </div>


        </div>
    
     );
}
 
export default ContactForm;