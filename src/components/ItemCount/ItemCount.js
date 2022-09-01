import Button from '@mui/material/Button';
import './ItemCount.css'
import { useState  } from 'react';
import Swal from 'sweetalert2'

function ItemCount({producto, initial, setShowButton,onItemToAdd}){
    const [cantidad, setCantidad]=useState(initial)
    
    const addCount=()=>{
       setCantidad(cantidad+1)
    }
    const removeCount=()=>{
       setCantidad(cantidad-1)
    }
    const onAdd=()=>{
        if(producto.stock-cantidad<0){
            Swal.fire({
                title: "No se puede comprar esa cantidad de productos.",
                text:"Por favor intente con una cantidad menor",
                icon: 'error',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
        else{
            producto.quantity=cantidad;
            onItemToAdd(producto)
            setShowButton(true)
        }
    }
    
    return(
        <div >
            <div className="count_item">
                <Button  onClick={removeCount} disabled={cantidad==1} className="simbolosCount">-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount} disabled={cantidad==producto.stock} className="simbolosCount">+</Button>
            </div>
            <Button variant="outlined" onClick={()=>{onAdd(producto)}}  className="btn-add" >Agregar al carrito</Button>
           
        
        </div>
    );
}
export default ItemCount;