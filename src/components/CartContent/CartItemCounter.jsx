import { useContext } from "react"
import { authContext } from "../../context/AuthContext"


const CartItemCounter = ({ producto }) => {

    const { car, setCar, buyProducts} = useContext(authContext)

    const restar = () =>{
        const productoRepetido = car.find((item) => item.id === producto.id)
        
        productoRepetido.quanty !== 1 &&
        setCar(car.map((item) => item.id === producto.id ? {...producto, quanty: productoRepetido.quanty -1} : item))
    }
    return (
        <>

            <p className="counter-button" onClick={restar}>-</p>
            <p>{producto.quanty}</p>
            <p className="counter-button" onClick={() => buyProducts(producto)}>+</p>
            

        </>

    )
}

export default CartItemCounter