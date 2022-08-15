import './Item.css';
import ItemCount from "../ItemCount/ItemCount"
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Item({ producto }){
    const[showButton, setShowButton]=useState(false);
    const onAdd=(producto)=>{
        console.log("datos del producto:",producto);
        console.log("Cantidad Comprada:",producto.quantity);
    }
    return(
        <div className='buy_item'>
           <img src={`../${producto.imagen}`} />
            <h4>{producto.title}</h4>
            <p>${producto.price}</p>
            <Link to={`/detail/${producto.id}`}>
             <Button variant="outlined" className="btn_detail"  >Detalle</Button>
            </Link>
            
            {!showButton?
                   <ItemCount initial={1}  producto={producto} setShowButton={setShowButton} onAdd={onAdd}></ItemCount>
                  :
                   <Button variant="outlined" className='btn-buy'><Link  to='/cart'>Terminar compra</Link></Button> }
        </div>
    )
}
export default Item;