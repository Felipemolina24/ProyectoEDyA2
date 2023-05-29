import { useContext } from "react"
import { authContext } from "../../context/AuthContext"
import './CartContent.css'
import CartItemCounter from "./CartItemCounter"

const CartElment = () => {

    const {car, setCar} = useContext(authContext)

    const eliminarProducto = (id) =>{
        const buscarId = car.find((element) => element.id === id)

        const newCar = car.filter((element) =>{
            return element !== buscarId
        })

        setCar(newCar)
    }
    return car.map((producto) =>{
        return(
            <div className="cartContent" key={producto.id}>
                <img src={producto.img} alt=""/>
                <h3 className="name">{producto.nombre}</h3>
                <CartItemCounter producto={producto} />
                <h4 className="price">{producto.precio * producto.quanty}$</h4>
                <h3 className="cart-delete-button" onClick={() => eliminarProducto(producto.id)}>🗑</h3>
            </div>
        )
    })
  
}

export default CartElment