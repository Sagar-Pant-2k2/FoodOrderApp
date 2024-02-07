import { createContext,useState} from "react";


const UserProgressContext = createContext();

const UserProgressContextProvider = ({children})=>{
    const [userProgress,setUserProgress] = useState('');
    const showCart = ()=>{
        setUserProgress('cart');
    }
    const hideCart = ()=>{
        setUserProgress('');
    }
    const showCheckout = ()=>{
        setUserProgress('checkout');
    }
    const hideCheckout = ()=>{
        setUserProgress('');
    }
    const userProgressContext = {
        progress : userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return (
        <UserProgressContext.Provider value={userProgressContext}>{children}</UserProgressContext.Provider>
    )
}

export {
    UserProgressContext,
    UserProgressContextProvider
}