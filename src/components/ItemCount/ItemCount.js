import Button from '@mui/material/Button';
import './ItemCount.css'
import { useState  } from 'react';

function ItemCount({stock, initial}){
    const [cantidad, setCantidad]=useState(initial)
    const addCount=()=>{
        setCantidad(cantidad+1)
    }
    const removeCount=()=>{
        setCantidad(cantidad-1)
    }
    return(
        <div className="buy_item">
            <div className="count_item">
                <Button  onClick={removeCount} disabled={cantidad==0} className="simbolosCount">-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount} disabled={cantidad==stock} className="simbolosCount">+</Button>
            </div>
            <Button variant="outlined" className="btn-add" >Agregar al carrito</Button>
        
        </div>
    );
}
export default ItemCount;