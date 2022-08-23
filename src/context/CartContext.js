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
            setPrecioTotal(listaProds[0].price)
        }else{
            setPrecioTotal( listaProds.reduce((acc,prod) => acc.price + prod.price))
        }
        console.log("PRECIO TOTAL:",precioTotal)
    }
    const removeProduct=(prod)=>{
        const productsFiltered = cart.filter((item) => item.id !==prod.id)
        setCart(productsFiltered);
        handleTotalPrice(productsFiltered);
    }
    const addItemToCart=(producto)=>{
        /* setCart([...cart,producto]) */
        /* if(cart.length===0){
            setCart([{...producto, price: producto.price*producto.quantity}])
        }else{
            const isInCart=cart.find(item=>item.id==producto.id)
            if(!isInCart){
                setCart([...cart, {...producto, price: producto.price*producto.quantity}])
            }else{
                isInCart.quantity=producto.quantity+isInCart.quantity;
                isInCart.price= isInCart.price*isInCart.quantity;
                setCart([...cart,isInCart])
               
            }
        } */
     
       

        const listaActualizada = cart.find(
            (itemEnCarrito) => itemEnCarrito.id === producto.id
                )?cart.map((itemEnCarrito) => {
                    if (itemEnCarrito.id === producto.id) {
                        return {
                            ...itemEnCarrito,
                            quantity: itemEnCarrito.quantity + producto.quantity,
                            price: itemEnCarrito.price*itemEnCarrito.quantity
                        };
                   
                    }
                    return itemEnCarrito;
                })
            : [...cart, {...producto, price: producto.price*producto.quantity}];
        setCart(listaActualizada);
        handleTotalPrice(listaActualizada)
        /* console.log(">> elementos del carrito actualmente: ", listaActualizada); */
        /* handleTotalPrice(cart) */
        console.log(">> elementos del carrito actualmente: ", cart);
        console.log("elementos=>",cart.length)
        console.log("elementos=>",cart)
        console.log("PRECIO TOTAL:",precioTotal)
       
    }
   
  return (
    <CartContext.Provider value={{addItemToCart,cart,precioTotal,removeProduct, handleTotalPrice}}>
        {children}
    </CartContext.Provider>
  )
}

