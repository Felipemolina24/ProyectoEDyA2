import React from "react";
import { useState } from "react";
import Label from "./components/Label/Label";
import Titulo from "./components/Titulo/Titulo";
import Input from "./components/Input/Input";
import './Login.css';

const Login = () =>{

    const[correo, setCorreo] = useState("")
    const[password, setPassword] = useState("")
    const[passwordCorto, setPasswordCorto] = useState(false)
    const[logeado, setLogeado] = useState(false)
    const[invalido, setInvalido] = useState(false)

    function evt  (name, value) {
        if(name === 'correo'){
            setCorreo(value)
        }
        else{
            if(value.length < 7){
            setPasswordCorto(true)
            }
            else{
                setPasswordCorto(false)
                setPassword(value)
            }
        }
    }

    function ifMatch(parametro){
        if(parametro.correo > 0 && parametro.password > 0){
            if(parametro.correo === 'juan_fel.gomez@uao.edu.co' && parametro.password === 'jfgm1003' ){
                const {correo, password} = parametro
                let u = {correo, password}
                let usuario = JSON.stringify(u)
                localStorage.setItem('usuario' , usuario)
                setLogeado(true)
            }
            else{
                setLogeado(false)
                setInvalido(true)
            }

        }
        else{
            setLogeado(false)
            setInvalido(true)
        }
    }

    function envio () {
        let usuario = {correo, password}
        if(usuario){
            ifMatch(usuario)
        }
    }

    

    return(
        
     <div className="col-sm-8 sección-principal">
        { logeado ?
          <>
          <h1 className="log"> !Te has logeado correctamente!</h1>
          </>
        :
    
       <div className="modal-content">
        <div className="form-group ">  
          <form className="col-12">
          <Titulo text='!BIENVENIDO!'/>
            <center> 
                {invalido &&
            <label className="label-invalido"> El correo o la contraseña son incorrectos</label>
                }
            </center>
            <Input
            atributo={{
                id: 'correo',
                name: 'correo',
                type: 'text',
                placeholder: ' Correo '
            }}
            evt={evt}
            />
            
            <Input 
            atributo={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Contraseña '
            }}
            evt={evt}
            parametro={passwordCorto}
            />
            <center>
                {passwordCorto &&
            <label className="label-error"> La contraseña debe ser mas larga </label>
                }
            </center>
            <center>
            <button type="submit" className="btn btn-dark" onClick={envio}><i className="fas fa-sign-in-alt"></i> Ingresar </button>
            </center>
         </form>
         
         <center>
         <div className="col-12 " id="forgot">
                 <a href="#"> ¿Olvido su Contraseña? </a>
                
              </div>

              <div className="col-12 ">
                <a href=""> Registrate Gratis </a>
             </div>
             <div className="Fa-go"> Inicia sesión con Facebook o Google</div>
             </center>
         
           </div> 
         
        </div>

            }
     </div>

            
    )
}

export default Login