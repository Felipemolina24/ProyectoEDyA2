import React, { useState, useEffect } from "react";
import Titulo from "../Login/components/Titulo/Titulo";
import Label from "../Login/components/Label/Label";
import './Registro.css'
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";



const Registro = () => {


    const auth = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState()

    const [correoRegistro, setCorreoRegistro] = useState("")
    const [passwordRegistro, setPasswordRegistro] = useState("")


    const handleRegister = async (e) => {
        e.preventDefault()
        if(!correoRegistro) return setError("Ingrese un correo")
        setError("")
        try {

            await auth.register(correoRegistro, passwordRegistro)
            navigate('/home')

        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/invalid-email") {
                setError("Ingrese un correo válido")
            } else {
                if (error.code === "auth/weak-password") {
                    setError("La contraseña es muy corta")
                }
                else if (error.code === "auth/missing-password") {
                    setError("Digite una contraseña")
                }


            }

        }
    }


    return (
        <>
            <div className="registro-page" style={{ backgroundImage: `url(./gradient.png)` }}>
                <div className="container registro-page">
                    <div className="row justify-content-center">
                        <div className="col-md-6">

                            <form>
                                <br></br>
                                <center>
                                    <Titulo text="REGISTRATE" />
                                </center>
                                <Label text="Correo" />
                                {error && <p className="email-invalid form-control" >{error}</p>}
                                <input className="input-lo form-control" type="email" placeholder="Correo" onChange={(ev) => setCorreoRegistro(ev.target.value)} /><br></br>

                                <br></br>


                                <Label text="Contraseña" />
                                <input className="input-lo form-control" type="password" placeholder="Contraseña" onChange={(ev) => setPasswordRegistro(ev.target.value)} /><br></br>



                                <br></br>

                                <button type="submit" className="form-control registro" onClick={(e) => handleRegister(e)}>Registrarse</button>
                                <br></br>

                                <div className="text-center">
                                    <Link to='/'>Ya tengo una cuenta</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Registro