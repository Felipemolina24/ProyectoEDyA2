import { useContext } from "react"
import { authContext } from "../../context/AuthContext"

const CartTotal = () => {

    const {car} = useContext(authContext)

    const total = car.reduce((acu,elm) => acu + elm.precio * elm.quanty, 0)

  return (
    <div className="cartTotal">
        <h3>Total: {total} $ </h3>
    </div>
  )
}

export default CartTotal