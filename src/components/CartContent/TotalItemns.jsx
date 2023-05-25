import { useContext } from "react"
import { authContext } from "../../context/AuthContext"

const TotalItemns = () => {

    const { car } = useContext(authContext)

    const itemsQuanty = car.reduce((acu, elm) => acu + elm.quanty, 0)

    return <span className="cart-items-total">{itemsQuanty}</span>
}
export default TotalItemns