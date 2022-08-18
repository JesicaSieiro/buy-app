import Button from '@mui/material/Button';
import './ItemCount.css'
import { useState  } from 'react';

function ItemCount({producto, initial, setShowButton,onItemToAdd}){
    const [cantidad, setCantidad]=useState(initial)
    
    const addCount=()=>{
       setCantidad(cantidad+1)
    }
    const removeCount=()=>{
       setCantidad(cantidad-1)
    }
    const onAdd=()=>{
        producto.quantity=cantidad;
        onItemToAdd(producto)
    }
    
    return(
        <div >
            <div className="count_item">
                <Button  onClick={removeCount} disabled={cantidad==1} className="simbolosCount">-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount} disabled={cantidad==producto.stock} className="simbolosCount">+</Button>
            </div>
            <Button variant="outlined" onClick={()=>{setShowButton(true);onAdd(producto)}}  className="btn-add" >Agregar al carrito</Button>
           
        
        </div>
    );
}
export default ItemCount;