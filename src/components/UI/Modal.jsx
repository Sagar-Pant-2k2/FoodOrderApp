import { useRef } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom"

export default ({children,open,onClose,className=''})=>{
    const fwdRef = useRef();
    useEffect(()=>{
        const modal = fwdRef.current;
        if(open) {
            modal.showModal();
        }
        return ()=>modal.close();
    },[open]);
    return createPortal(<dialog ref = {fwdRef} className={`modal + ${className}`} onClose={onClose}>{children}</dialog>,document.getElementById('modal'));
}