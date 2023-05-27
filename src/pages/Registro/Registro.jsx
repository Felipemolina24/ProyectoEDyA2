import React, { useState} from "react";
import Titulo from "../Login/components/Titulo/Titulo";
import Label from "../Login/components/Label/Label";
import './Registro.css'
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { registro } from "../../actions/auth"


const Registro = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const estadoInicial = {email: '', password: ''}

    const [formData, setFormData] = useState(estadoInicial)


    const handleSubmit = async (e) => {
        e.preventDefault()
       
        dispatch(registro(formData, navigate))
    }

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="registro-page" style={{ backgroundImage: `url(./gradient.png)` }}>
                <div className="container registro-page">
                    <div className="row justify-content-center">
                        <div className="col-md-6">

                            <form onSubmit={ handleSubmit} >
                                <br></br>
                                <center>
                                    <Titulo text="REGISTRATE" />
                                </center>
                                <Label text="Correo" />

                                <input className="input-lo form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Correo"
                                    onChange={handleChange}
                                     /><br></br>

                                <br></br>


                                <Label text="Contraseña" />
                                <input className="input-lo form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    onChange={handleChange}
                                     /><br></br>



                                <br></br>

                                <button type="submit" className="form-control registro" >Registrarse</button>
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