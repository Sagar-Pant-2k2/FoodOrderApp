import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const initialCart = {
    items : [],
    addItem : (item)=>{},
    removeItem : (id)=>{},
    clearCart : ()=>{}
}

const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cart,dispatchCartAction] = useReducer(CartReducer,initialCart);
    const addItem = (item)=>{
        dispatchCartAction({type:'addItem',item});
    }
    const removeItem = (id)=>{
        dispatchCartAction({type:'removeItem',id});

    }

    const clearCart = ()=>{
        dispatchCartAction({type:'clearCart'});
    }
    const cartContext = {
        items : cart.items,
        addItem,
        removeItem,
        clearCart
    }
    // console.log(cartContext);
    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}
export {CartContext,CartContextProvider}