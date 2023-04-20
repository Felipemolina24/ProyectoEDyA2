import TotalItemns from "../../components/CartContent/TotalItemns"
import Products from "../../components/Products/Products"
import './Tienda.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { authContext } from "../../context/AuthContext"
import CartTotal from "../../components/CartContent/CartTotal"


const Tienda = () => {

    const {car} = useContext(authContext)
    
    return (
        <>
            <div className="nav-container tienda-page">
                <nav className="navbar">
                    <Link to='/home' className="navbar-title" > <i class="fas fa-home"></i>HOME</Link>
                    <h1 className="title-off">¡Ofertas exlusivas!</h1>
                    <Link to='/cart' className="carrito">
                     🛒
                     {car.length > 0 ? <TotalItemns/> : null}
                    </Link>

                </nav>
                <div className="product-card-container">
                    <Products/>
                </div>
            </div>
        </>
    )
}

export default Tienda