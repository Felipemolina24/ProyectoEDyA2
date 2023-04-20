import { useState } from "react";
import Label from "../Login/components/Label/Label";
import Titulo from "../Login/components/Titulo/Titulo";
import './Forgot.css'
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Forgot = () =>{

    const { resetPassword} = useAuth()
    const [correoForgot, setCorreoForgot] = useState("")
    const [error, setError] = useState()

    const handleForgotPassword = async (e) =>{
        e.preventDefault()
        if(!correoForgot) return setError("Ingrese un correo")

        try{

        await resetPassword(correoForgot)
            setError("Te hemos enviado un enlace a tu correo para que restablezcas tu contraseña")
        }catch (error){
            console.log(error.code)
            if(error.code === "auth/invalid-email"){
            setError("Ingrese correo un válido")
            }
            else{
                if(error.code === "auth/user-not-found"){
                    setError("Este correo aún no ha sido registrado")
                }
            }

        }

    }

    return(
        <>
        <div className="forgot-page" style={{ backgroundImage: `url(./gradient.png)` }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6"><br></br>
                   <img src="candado.png" className="mx-auto d-block" /> 
                   <form><br></br>
                   <div className="text-center">
                   <Titulo text="¿Tienes problemas para iniciar sesión?"/>
                    <Label text="Introduce tu correo electrónico y te enviaremos un enlace para que vuelvas a entrar en tu cuenta." />
                    </div><br></br>
                    {error && <p className="email-invalid form-control " >{error}</p>}
                    <input className="input-lo form-control" type="email" placeholder="Correo" onChange={(e) => setCorreoForgot(e.target.value)} /><br></br>
                    <button type="submit" className="form-control forgot" onClick={(handleForgotPassword)}>Enviar Enlace</button><br></br>
                    <div className="text-center">
                        <Link to='/registro'>Crear cuenta</Link>
                    </div>
                   </form>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Forgot