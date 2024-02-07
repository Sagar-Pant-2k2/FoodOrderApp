import Button from './UI/Button'
import logo from '../assets/logo.jpg'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext'
import { UserProgressContext } from '../store/UserProgressContext'
export default () => {
    const userProgressContext = useContext(UserProgressContext);
    const handleShowCart = ()=>{
        userProgressContext.showCart();
    }
    const cartContext = useContext(CartContext);
    return <div id = "main-header">
        <div id="title"><img src={logo}/><h1>Food App Ui</h1></div>
        <nav><Button textOnly={true} onClick={handleShowCart}>Cart ({cartContext.items.length})</Button></nav>
    </div>
}