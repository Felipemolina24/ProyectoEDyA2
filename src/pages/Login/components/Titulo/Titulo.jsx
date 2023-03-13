import React from "react";
import './Titulo.css';

const Titulo = ({text}) =>{
    return (
        <div>
            <h1 className="title-inicio"> {text}</h1>
        </div>
    )
}

export default Titulo