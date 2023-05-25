import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import './Products.css'


const Products = () => {

    const {data, buyProducts} = useContext(authContext)

    return data.map((producto) => {
        return(
            <div className="card" key={producto.id}>
                <img src={producto.img} className="imagen-juego "/>
                <h3>{producto.nombre }</h3>
                <h4>{producto.precio } $</h4>
                <button onClick={() => buyProducts(producto)}>Añadir</button>
            </div>
        )
    })
}

export default Products