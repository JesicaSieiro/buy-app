import './Item.css';
import ItemCount from "../ItemCount/ItemCount"

function Item({title, price, stock, imagen }){
    return(
        <div className='buy_item'>
           <img src={`${imagen}`}/>
            <h4>{title}</h4>
           {/*  <p>Buzo de manga larga con capucha</p> */}
            <p>${price}</p>
            <ItemCount stock={stock} initial={1}></ItemCount>
        </div>
    )
}
export default Item;