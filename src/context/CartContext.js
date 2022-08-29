import React, { useState } from "react";
export const CartContext=React.createContext();


export default function CartCustomContext({children}) {
    const isInCart=(producto)=>{
        return cart.find((prod)=>prod.id===producto.id)?true:false;
    }
    const [cart, setCart]=useState([])
    const[precioTotal, setPrecioTotal]=useState(0);

    const handleTotalPrice=(listaProds)=>{
        if(listaProds.length===1){
            setPrecioTotal(listaProds[0].price*listaProds[0].quantity)
        }else{
            setPrecioTotal( listaProds.reduce((acc,prod) => acc.price*acc.quantity + prod.price*prod.quantity))
        }
        console.log("PRECIO TOTAL:",precioTotal)
    }
    const removeList=()=>{
        setCart([]);
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
     
       

       
        console.log(">> elementos del carrito actualmente: ", cart);
        console.log("elementos=>",cart.length)
        console.log("elementos=>",cart)
        console.log("PRECIO TOTAL:",precioTotal)
       
    }
   
  return (
    <CartContext.Provider value={{addItemToCart,cart,precioTotal,removeProduct, handleTotalPrice, removeList}}>
        {children}
    </CartContext.Provider>
  )
}

