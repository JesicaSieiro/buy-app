import React, { useState } from "react";
export const CartContext=React.createContext();


export default function CartCustomContext({children}) {

    const [cart, setCart]=useState([])
    const[precioTotal, setPrecioTotal]=useState(0);

    const handleTotalPrice=(listaProds)=>{
        if(listaProds.length===0){
            setPrecioTotal(0)
        }
        else if(listaProds.length===1){
            setPrecioTotal(listaProds[0].price*listaProds[0].quantity)
        }else{
            setPrecioTotal( listaProds.reduce((acc,prod) => acc.price*acc.quantity + prod.price*prod.quantity))
        }
        console.log("PRECIO TOTAL:",precioTotal)
    }
    const removeList=()=>{
        setCart([]);
        setPrecioTotal(0)
    }
    const removeProduct=(prod)=>{
        const productsFiltered = cart.filter((item) => item.id !==prod.id)
        setCart(productsFiltered);
        handleTotalPrice(productsFiltered);
    }
    const addItemToCart=(producto)=>{
        if(cart.length===0){
            setCart([producto])
        }else{
            const isInCart=cart.find(item=>item.id==producto.id)
            if(!isInCart){
                setCart([...cart, producto])
            }else{
                isInCart.quantity=producto.quantity+isInCart.quantity;
                setCart([...cart])
               
            }
        }
        
    }
   
  return (
    <CartContext.Provider value={{addItemToCart,cart,precioTotal,removeProduct, handleTotalPrice, removeList}}>
        {children}
    </CartContext.Provider>
  )
}

