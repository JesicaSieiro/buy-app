import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import  "./CardWidget.css"
import {CartContext} from "../../context/CartContext"
import { useContext , useState } from "react"
function CardWidget(){
    const{cart}=useContext(CartContext);
   
  const totalQuantityProds = cart.reduce((prev, next) => {
    return prev + next.quantity;
  }, 0);

    return(
        <div class="widgetContainer">
            <p>{totalQuantityProds}</p>
            <AddShoppingCartIcon color="primary" />
        </div>
        
    )
}
export default CardWidget