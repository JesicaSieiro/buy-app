import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer({titulo}){
    return(
        <div>
            <h3>{titulo}</h3>
            <ItemCount stock={5} initial={1}></ItemCount>
        </div>

        
    )
}
export default ItemListContainer