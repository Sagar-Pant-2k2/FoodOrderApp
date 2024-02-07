import { useContext } from "react"
import Button from "./UI/Button"
import { CartContext } from "../store/CartContext"

export default ({mealItem})=>{
    const cartContext = useContext(CartContext);
    const handleAddMealToCart = ()=>{
        cartContext.addItem(mealItem);
    }
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${mealItem.image}`} alt={mealItem.name}></img>
            <div>
                <h3>{mealItem.name}</h3>
                <p className="meal-item-price">${mealItem.price}</p>
                <p className="meal-item-description">{mealItem.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick = {handleAddMealToCart}>Add to Cart</Button>
            </p>
        </article>
    </li>
}