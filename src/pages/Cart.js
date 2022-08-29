import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import {CartContext} from "../context/CartContext"
import {Link} from  'react-router-dom';
import {createOrderDB,setQuantityOrder}  from "../utils/productosMock";
import {serverTimestamp}from 'firebase/firestore'
import Swal from 'sweetalert2'
import "./Cart.css"


function Cart(){
    const{cart,precioTotal,removeProduct, removeList}=useContext(CartContext);
    console.log("cart list desde Checkout", cart)
    const mostrarConfirmacion=(id)=>{
        Swal.fire({
            title: 'Su compra se relizo con exito!',
            html:`<p><b>Identificardor de compra:</b></p>
            <p><b>${id}</b></p>`,
            icon: 'success',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    function createOrder(){
        const itemDB=cart.map(
            item=>({
                id:item.id,
                title:item.title,
                price:item.price
            })
        )
        let order={
            buyer:{
                name:"Julian Sotomayor",
                phone:"1121742925",
                email:"julian.sotomayor@gmail.com"
            },
            date:serverTimestamp(),
            items:itemDB,
            totalPrice:precioTotal
        }
        createOrderDB(order)
        .then(res=>{
           /*  alert("Su orden fue creada correctamente!",res.id) */
            console.log("resultado de orden>>",res)
            mostrarConfirmacion(res.id)
            setQuantityOrder(cart)
            removeList()
        })
        .catch(err=>{alert("Su orden no pudo der creada, por favor intente nuevamente",err)})
        console.log("ORDEN DE COMPRA: ",order)
        
    }
    return(
        
        <Container className='container-general'> 
        <h2>Checkout: </h2>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2>Producto</h2>
                <h2>Descripcion</h2>
                <h2>Precio</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cart.length===0 && <p className='cartEmptyTitle'>No hay productos agregados en el carrito</p>}
            {cart.map((item)=>{
                const{id,title,price,imagen,quantity}=item
                return(
                    <div className='cart-table__content' key={id} >
                        <div className='cart-table__content-img'>
                            <img src={`../${imagen}`}/>
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>{quantity}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className='btn-delete'>
                                <Delete onClick={() => removeProduct(item)} />
                            </button>
                        </div>
                    </div>
                )
            })}
                    
                
            <div className='cart-footer'>
                <a className='btn-custom'><Link to={`/`}>Continuar comprando</Link></a>
                <div className='cart-checkout-details'>
                    
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$  {precioTotal}</span>
                    </div>
                    <Button onClick={createOrder} className='btn-custom' >Completar Compra</Button>
                </div>
            </div>
        </div>
      
    </Container>
    )
}
export default Cart