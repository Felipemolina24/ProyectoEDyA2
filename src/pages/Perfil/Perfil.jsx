import React from 'react'
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Perfil.css'

const Perfil = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    auth.logout()
    navigate('/')
  }



  return (
    <>
      
      <div>PERFIL</div>
      <button onClick={(e) => handleLogout(e)}> cerrar sesión</button>
    </>
  )
}

export default Perfil