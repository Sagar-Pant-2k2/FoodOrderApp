import { useContext } from "react"
import { CartContext } from "../../store/CartContext"

export default ({item}) => {
    const cartContext = useContext(CartContext);
    return <li className="cart-item">
        <p>{item.name} - {item.quantity} X ${item.price}</p>
        <p className="cart-item-actions">
            <button onClick={()=>cartContext.removeItem(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={()=>cartContext.addItem(item)}>+</button>
        </p>
    </li>
}