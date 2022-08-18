import React, { useState } from "react";
export const CartContext=React.createContext();


export default function CartCustomContext({children}) {
    const [cart, setCart]=useState([])
    const addItemToCart=(producto)=>{
        /* setCart([...cart,producto]) */
        if(cart.length===0){
            setCart([producto])
        }else{
            const isInCart=cart.find(item=>item.id==producto.id)
            if(!isInCart){
                setCart([...cart,producto])
            }else{
                isInCart.quantity=producto.quantity+isInCart.quantity;
                setCart([...cart,isInCart])
            }
        }
        console.log("elementos=>",cart.length)
       
    }
  return (
    <CartContext.Provider value={{addItemToCart,cart}}>
        {children}
    </CartContext.Provider>
  )
}

