import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import  "./CardWidget.css"
import {CartContext} from "../../context/CartContext"
import { useContext , useState } from "react"
function CardWidget(){
    const{handleTotalPrice,cart}=useContext(CartContext);
   
  const totalQuantityProds = cart.reduce((prev, next) => {
    return prev + next.quantity;
  }, 0);

    return(
        <div class="widgetContainer">
           <Button  onClick={()=>handleTotalPrice(cart)} >
            <Link to="/cart" className="btn-nav">
              <p>{totalQuantityProds}</p>
              <AddShoppingCartIcon color="primary" />
            </Link>
          </Button> 
        </div>
        
    )
}
export default CardWidget