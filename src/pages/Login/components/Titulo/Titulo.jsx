import React from "react";
import './Titulo.css';

const Titulo = ({text}) =>{
    return (
        <div>
            <h3 className="title-inicio"> {text}</h3>
        </div>
    )
}

export default Titulo