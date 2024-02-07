import { useContext } from "react"
import Modal from "./UI/Modal"
import Button from './UI/Button';
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./UI/CartItem";
export default () => {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);
    const cartTotal = ()=>cartContext.items.reduce((totalPrice, item) => { return totalPrice + item.price * item.quantity }, 0)
    const handleClose = ()=>{
        // console.log("close was clicked")
        userProgressContext.hideCart();
    }
    const handleCheckout = ()=>{
        userProgressContext.showCheckout();
    }
    return (
        <Modal className="cart" open={userProgressContext.progress === "cart"} onClose={userProgressContext.progress==='cart'?handleClose:null}>
            <h2>Your Cart</h2>
            <ul>{cartContext.items.map(meal => <CartItem key={meal.id} item={meal}></CartItem>)}</ul>
            <p className="cart-total">${cartTotal()}</p>
            <p className="modal-actions">
                <Button textOnly={true} onClick={handleClose}>Close</Button>
               {cartContext.items.length>0 && <Button onClick={handleCheckout}>Go to Checkout</Button>} 
            </p>
        </Modal>
    )
}