import './ItemList.css'
import Item from '../Item/Item';
function ItemList({products}){
    return(
        <div className='list-cards'>
            {products.map(product=>
                
                <Item key={product.id} producto={{...product}}></Item>
            )}
            
            
        </div>
    )
}
export default ItemList;