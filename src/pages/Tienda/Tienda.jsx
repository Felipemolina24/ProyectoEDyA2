import TotalItemns from "../../components/CartContent/TotalItemns"
import Products from "../../components/Products/Products"
import './Tienda.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { authContext } from "../../context/AuthContext"
import CartTotal from "../../components/CartContent/CartTotal"
import Nabvar from '../../components/Nabvar'

const Tienda = () => {

    const { car } = useContext(authContext)

    return (
        <>
            <div className="nav-container tienda-page">
                <Nabvar />
                <Link to='/cart' className="carrito">
                    🛒
                    {car.length > 0 ? <TotalItemns /> : null}
                </Link>

                <div className="product-card-container">
                    <Products />
                </div>
            </div>
        </>
    )
}

export default Tienda