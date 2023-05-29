import Label from "../Login/components/Label/Label";
import Titulo from "../Login/components/Titulo/Titulo";
import './Forgot.css'
import { Link } from "react-router-dom";

const Forgot = () =>{


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
                    
                    <input className="input-lo form-control" type="email" placeholder="Correo"  /><br></br>
                    <button type="submit" className="form-control forgot" >Enviar Enlace</button><br></br>
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