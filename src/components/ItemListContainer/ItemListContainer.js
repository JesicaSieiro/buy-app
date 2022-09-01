
import ItemList from "../ItemList/ItemList";
import { useState, useEffect  } from 'react';
import getFetch  from "../../utils/productosMock.js";
import {getProductsByCategory} from "../../utils/productosMock.js"
import {useParams} from "react-router-dom"

function ItemListContainer({titulo}){
    const [products, setProducts]=useState([]);
    const {categoryId}=useParams()

    useEffect(()=>{
        console.log(products)
        if(!categoryId){
            getFetch.
            then((resp)=>setProducts(resp))
            .catch(err=>console.log(err))
        }
        else{
            console.log(categoryId)
            getProductsByCategory(categoryId)
            .then(prod=>{setProducts(prod)})
            
        }

    },[categoryId])
    
    return(
        <div>
            <h3>{titulo}</h3>
           <ItemList products={products}></ItemList>
        </div>

        
    )
}
export default ItemListContainer