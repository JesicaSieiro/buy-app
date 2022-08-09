import './Item.css';
import ItemCount from "../ItemCount/ItemCount"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Item({ id, title, price, stock, imagen }){
    const getItem=()=>{
        console.log("PRODUCTO ID:", id)
    }
    return(
        <div className='buy_item'>
           <img src={`${imagen}`}/>
            <h4>{title}</h4>
           {/*  <p>Buzo de manga larga con capucha</p> */}
            <p>${price}</p>
            <Link to={`/detail/${id}`}>
             <Button variant="outlined" className="btn_detail"  >Detalle</Button>
            </Link>
            
            <ItemCount stock={stock} initial={1}></ItemCount>
        </div>
    )
}
export default Item;