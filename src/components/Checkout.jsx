//TODO : Success Message missing
//Resolved
import { useContext } from 'react'
import { CartContext } from '../store/CartContext'
import { UserProgressContext } from '../store/UserProgressContext';
import Error from './Error';
import useHttp from '../hooks/useHttp';
import Modal from './UI/Modal'
import Input from './UI/Input';
import Button from './UI/Button';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default () => {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext)
    const cartTotal = cartContext.items.reduce((ans, item) => ans + item.price * item.quantity, 0);


    const {data,isLoading : isSending,error,sendRequest,handleClearData} = useHttp('http://localhost:3000/orders',requestConfig)


    
    const handleClose = () => {
        userProgressContext.hideCheckout();
    }

    const handleFinish = ()=>{
        userProgressContext.hideCheckout();
        cartContext.clearCart();
        handleClearData();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        sendRequest(JSON.stringify({
            order: {
                items: cartContext.items,
                customer: data
            }
        }));
    }

    let actions = ( isSending?<span>Sending order data...</span>:<><Button textOnly={true} type="button" onClick={handleClose}>Close</Button>
    <Button>Submit Order</Button></>);

    if(data && !error) {
        return (<Modal open={userProgressContext.progress==='checkout'} onClose={handleClose}>
            <h2>Success!</h2>
            <p>Your order is placed</p>
            <p>We will soon deliver</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>)
    }
    else{

        return (<Modal open={userProgressContext.progress === 'checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: ${cartTotal}</p>
            <Input label="Full Name" type="text" id="name" />
            <Input label="E-Mail Address" type="email" id="email" />
            <Input label="Street" type="text" id="street" />
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"></Input>
                <Input label="City" type="text" id="city"></Input>
            </div>
            {error && <Error title="Failed to submit order" message={error}></Error>}
            <p className='modal-actions'>
               {actions}
            </p>
        </form>
    </Modal>)
    }
}