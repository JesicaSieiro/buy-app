
import { DB } from "./AppFirebase";
import {collection, getDocs, getDoc, doc, query, where, increment, addDoc, updateDoc}from 'firebase/firestore'



 const getFetch= new Promise((res,rej)=>{

    //creo la referencia a la coleccion que quiero traer
    const colRef=collection(DB,'productos');

    getDocs(colRef).then((snapshot)=>{
      

      //obtengo un array con el id de los productos y la informacion de cada uno
      const productsFormated=snapshot.docs.map((rawDoc)=>{
       return{ id:rawDoc.id, ...rawDoc.data()}
      
      })
      console.log('Data formateada', productsFormated);
      res(productsFormated)
    },(error)=>{
      rej('error al traer los docs de snapshot', error);
    });
});
export const getProductsByCategory=(categoryId)=>{
    return new Promise((res,rej)=>{
        const consulta = query( collection(DB, 'productos'), where('category','==',categoryId));
        getDocs(consulta).then(snapshot => {
            // es posible usar snapshot.size para ver si se encontraron elementos
            if (snapshot.size === 0) {
                console.log('No se encontraron productos');
                return;
            }
            const productos = snapshot.docs.map((rawDoc) => {
                return {
                id: rawDoc.id,
                ...rawDoc.data()
                }
            });
            res(productos)
            }, error => {  rej('error al traer los docs de snapshot', error);});


       })
}
 export const getItem=(id)=>{

    return new Promise((res,rej)=>{
        const itemRef = doc(DB, 'productos', id);
        getDoc(itemRef).then(snapshot => {
        // Con snapshot.exists() verificamos que el producto existe.
        if (snapshot.exists()) {
        // Si existe el doc, podemos utilizar la info de snapshot
        // recordando siempre de usar .data()
        const productFind={id: snapshot.id, ...snapshot.data()};
        console.log(productFind);
        res(productFind)
        }
        }, error => { rej('error al traer los docs de snapshot', error); });

    })
 }

 export async function createOrderDB (order){
    const newOrder= collection(DB,'orders')
    const orderDoc = await addDoc(newOrder, order)
    
    const orderCreated={id: orderDoc.id, newOrder};
    return orderCreated
}
export async function setQuantityOrder (listCart){
    listCart.forEach(async(item)=>{
        const itemRef = doc(DB, 'productos', item.id);
        await updateDoc(itemRef, {
            stock: increment(-item.quantity)
        })
    })
}

export default getFetch
