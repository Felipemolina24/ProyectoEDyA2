import CartElment from "./CartElment"
import CartTotal from "./CartTotal"
import { useContext } from "react"
import { authContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
const CartContent = () => {

  const { car } = useContext(authContext)


  return car.length > 0 ? (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <Link to='/tienda' className="navbar-title"> <i class="fas fa-shopping-cart"></i> TIENDA</Link>

        </nav>
        <CartElment />
        <CartTotal />
      </div>

    </>
  ) : (
    <h2 className="cart-message">El carro esta vacio</h2>
  )
}



export default CartContent