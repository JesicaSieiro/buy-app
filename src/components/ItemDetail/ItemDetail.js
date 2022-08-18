import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState , useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
 /*  maxWidth: '100%',
  maxHeight: '100%', */
});


function ItemDetail({producto}){
    const {addItemToCart}=useContext(CartContext)
    const[showButton, setShowButton]=useState(false);
    /* const[cantidad, setCantidad]=useState(0); */
    const onAdd=(producto)=>{
        console.log("datos del producto:",producto);
        console.log("Cantidad Comprada:",producto.quantity);
        addItemToCart(producto)
    }
    return(
        <div>
            
        <Grid container spacing={2} className="container_detail">
            <Grid item xs={4}>
                <Img alt="complex" src={`../${producto.imagen}`}  className="img_detail"/>
            </Grid>
            <Grid item xs={4} className="txt_detail" >
                
                   <h2>{producto.title}</h2> 
            
                   <h3>${producto.price}</h3> 
                   {!showButton?
                   <ItemCount initial={1}  producto={producto} setShowButton={setShowButton} onItemToAdd={onAdd}></ItemCount>
                  :
                   <Button variant="outlined" className='btn-buy'><Link  to='/cart'>Terminar compra</Link></Button> }
                   
            </Grid>
        
        </Grid>
        </div>
    )
}
export default ItemDetail