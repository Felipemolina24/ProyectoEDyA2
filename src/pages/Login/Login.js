import React from "react";
import { useState, useEffect } from "react";
import Label from "./components/Label/Label";
import Titulo from "./components/Titulo/Titulo";

import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";


const Login = () => {


    const navigate = useNavigate()
    const auth = useAuth()
    
    

    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError("")
        if (!correo) return setError("Ingrese un correo");

        try {
            await auth.login(correo, password)
            navigate('/home')

        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/user-not-found" || error.code === "auth/missing-password" || error.code === "auth/wrong-password") {
                setError("El correo o la contraseña son incorrectos")
            }
            else if (error.code === "auth/invalid-email") {
                setError("Ingrese un correo válido")
            }
        }

        
    }

    const handleGoogle = async (e) => {
        e.preventDefault()
        await auth.loginWithGoogle()
        navigate('/home')
    }

    const handleFacebook = async (e) => {
        e.preventDefault()
        await auth.loginWithFacebook()
        navigate('/home')
    }


    return (
        <>
            <div className="login-page" style={{ backgroundImage: `url(./gradient.png)` }}>
                <div className="container " >

                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div>
                                    <Titulo text="¡Bienvenidos a nuestra comunidad en línea!" className="ifgt"/>
                                </div>
                                <div>
                                    <center>
                                        <Titulo text="Iniciar sesión" />
                                    </center>
                                </div>

                                <div className="text-center">



                                </div>
                                <Label text="Correo" />
                                <input className="input-lo form-control" type="email" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />


                                <br></br>
                                <Label text="Contraseña" />
                                <input className="input-lo form-control" type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} /><br></br>

                                {error && <p className="email-invalid form-control " >{error}</p>}
                                <br></br>

                                <div className="text-center">



                                </div>

                                <button type="submit" className="form-control inicio" onClick={(e) => handleLogin(e)} ><i className="fas fa-sign-in-alt"></i> <strong>Ingresar</strong> </button>

                                {/* Inicio de sesion con face y google */}
                                <div className="fg"> Inicia sesión con Facebook o Google</div>
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-outline-primary w-100 my-1" onClick={(e) => handleFacebook(e)} >
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <img src="facebook.png" width="32" />
                                                </div>

                                                <div className="col-10 text-center">
                                                    Facebook
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-outline-danger w-100 my-1" onClick={(e) => handleGoogle(e)} >
                                            <div className="row align-items-center">
                                                <div className="col-2">
                                                    <img src="google.png" width="32" />
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
                            <img src="imagen.png" className="login-img"/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login