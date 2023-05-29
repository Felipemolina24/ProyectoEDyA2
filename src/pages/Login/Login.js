import React from "react";
import { useState} from "react";
import Label from "./components/Label/Label";
import Titulo from "./components/Titulo/Titulo";
import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from '../../actions/auth'


const Login = () => {

   

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const estadoInicial = {email: '', password: ''}

    const [formData, setFormData] = useState(estadoInicial)


    const handleSubmit = async (e) => {
        e.preventDefault()
       
        dispatch(login(formData, navigate))
    }

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

   /*const handleGoogle = async (e) => {
        e.preventDefault()
        await auth.loginWithGoogle()
        navigate('/home')
    }

    //const handleFacebook = async (e) => {
        e.preventDefault()
        await auth.loginWithFacebook()
        navigate('/home')
    }*/


    return (
        <>
            <div className="login-page" style={{ backgroundImage: `url(./gradient.png)` }}>
                <div className="container " >

                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div>
                                    <Titulo text="¡Bienvenidos a nuestra comunidad en línea!" className="ifgt" />
                                </div>
                                <div>
                                    <center>
                                        <Titulo text="Iniciar sesión" />
                                    </center>
                                </div>

                                <div className="text-center">



                                </div>
                                <Label text="Correo" />
                                <input className="input-lo form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Correo"
                                    onChange={handleChange}
                                     />

                                <br></br>
                                <Label text="Contraseña" />
                                <input className="input-lo form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    onChange={handleChange}
                                     />
                                <br></br>


                                <br></br>

                            

                                <button type="submit" className="form-control inicio"  ><i className="fas fa-sign-in-alt"></i> <strong>Ingresar</strong> </button>

                                {/* Inicio de sesion con face y google */}
                                <div className="fg"> Inicia sesión con Facebook o Google</div>
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-outline-primary w-100 my-1" /*onClick={(e) => handleFacebook(e)}*/ >
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <img src="facebook.png" alt="" width="32" />
                                                </div>

                                                <div className="col-10 text-center">
                                                    Facebook
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-outline-danger w-100 my-1" /*onClick={(e) => handleGoogle(e)}*/ >
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <img src="google.png" alt=""  width="32" />
                                                </div>

                                                <div className="col-10 text-center">
                                                    Google
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                {/* Inicio de sesion con face y google */}
                                <br></br>

                                <div className=" text-center">
                                    <Link to='forgot'>¿Olvidaste tu Contraseña?</Link>
                                </div><br></br>

                                <div className=" text-center">
                                    <Link to='registro'>Registrate</Link>
                                </div>

                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="imagen.png" alt=""  className="login-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login