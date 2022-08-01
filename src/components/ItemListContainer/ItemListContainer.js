/* import ItemCount from "../ItemCount/ItemCount" */
import ItemList from "../ItemList/ItemList";

import { useState, useEffect  } from 'react';
import getFetch from "../../utils/productosMock.js"
function ItemListContainer({titulo}){
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        console.log(products)
        getFetch.
        then((resp)=>setProducts(resp))
        .catch(err=>console.log(err))
    },[])
    
    return(
        <div>
            <h3>{titulo}</h3>
           {/*  <ItemCount stock={5} initial={1}></ItemCount> */}
           <ItemList products={ products}></ItemList>
        </div>

        
    )
}
export default ItemListContainer