import React from "react";
import './Input.css'



const Input = ({atributo, evt, parametro}) =>{
    return (
        <div className="form-group" >
            <input
            id={atributo.id}
            name={atributo.name}
            placeholder={atributo.placeholder}
            type={atributo.type}
            onChange={(e) => evt(e.target.name, e.target.value )}
            className={parametro ? 'input-error' : 'form-group' }
            />
        </div>
    )
}

export default Input