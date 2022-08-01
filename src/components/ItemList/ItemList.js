import './ItemList.css'
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
function ItemList({products}){

    console.log(products)
    return(
        <div className='list-cards'>
            {products.map(product=>
                
                <Item key={product.id} title={product.title} price={product.price} imagen={product.imagen} stock={product.stock}></Item>
            )}
            
            
        </div>
    )
}
export default ItemList;