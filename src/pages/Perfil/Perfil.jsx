
import './Perfil.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes'
import decode from 'jwt-decode'
import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from "react-router-dom";

const Perfil = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  

  const logout = useCallback(() => {
    dispatch({ type: actionType.LOGOUT });
    navigate("/");
    setUser(null);
  }, [dispatch, navigate]);


  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [logout, user?.token]);

  return (
    <div className="sidebar">
      <div className="profile">
        <img alt={user.result.email} src={user.result.imageUrl} className='d-inline-block align-top' />
        {user.result.email}
      </div>
      <br></br>
      <ul className="list-group menu">
        <li className="list-group-item">
          <NavLink to='/home' className="nav-link active">
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to='' className="nav-link active">
            <i className="fas fa-users"></i> Amigos
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to='' className="nav-link">
            <i className="fas fa-clock"></i> Actividad
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to='' className="nav-link">
            <i className="fas fa-cogs"></i> Configuración
          </NavLink>
        </li>
        <li className="list-group-item">
          <i className="fas fa-sign-out-alt"></i> <span className='logout' onClick={logout}> Cerrar sesión </span>
        </li>
      </ul>
    </div>
  );
}

export default Perfil;
