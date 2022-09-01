import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItem } from '../../utils/productosMock'
function  ItemDetailContainer(){
    
    const [product,setProduct]=useState({})
    const {id}=useParams()
  
    useEffect(()=>{
     getItem(id).then(prod=>{setProduct(prod)}).catch(err=>{console.log(err)})
     
    },[id])
    
    return(
        <div>
            <ItemDetail producto={{...product}}></ItemDetail>
        </div>
    )
}
export default ItemDetailContainer