import './Item.css';
import ItemCount from "../ItemCount/ItemCount"
import Button from '@mui/material/Button';
import { useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
function Item({ producto }){
    const[showButton, setShowButton]=useState(false);
    const {addItemToCart,handleTotalPrice,cart}=useContext(CartContext)
    const onAdd=(producto)=>{
        addItemToCart(producto)
       
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
                   <ItemCount initial={1}  producto={producto} setShowButton={setShowButton} onItemToAdd={onAdd}></ItemCount>
                  :
                  <Button variant="outlined" onClick={()=>handleTotalPrice(cart)} className='btn-buy'><Link  to='/cart'>Terminar compra</Link></Button> }
        </div>
    )
}
export default Item;