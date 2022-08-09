import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import backendProducts from '../../utils/productosMock'
import { getItem } from '../../utils/productosMock'
function  ItemDetailContainer(){
    
    const [product,setProduct]=useState({})
    const {id}=useParams()
  
    useEffect(()=>{
     /* setProduct(   backendProducts.find((product)=>{
            return product.id==id
        })
     ) */
     getItem(id).then(prod=>{setProduct(prod)}).catch(err=>{console.log(err)})
     
    },[id])
    
    return(
        <div>
            <ItemDetail titulo={product.title} imagen={product.imagen} price={product.price}></ItemDetail>
        </div>
    )
}
export default ItemDetailContainer