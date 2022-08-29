
import { DB } from "./AppFirebase";
import {collection, getDocs, getDoc, doc, query, where, increment, addDoc, updateDoc}from 'firebase/firestore'
import { async } from "@firebase/util";
//lista de productos
const backendProducts=[
    {id:"1", title:'Buzo corto', price:3500, imagen:'images/buzos/buzo.jpg',category: 'buzo', stock:7 ,quantity:0},
    {id:"2", title:'Buzo digonal gris', price:2000, imagen:'images/buzos/buzo1.jpg', category: 'buzo', stock:9,quantity:0},
    {id:"3", title:'Buzo triangulos', price:2500, imagen:'images/buzos/buzo3.jpg', category: 'buzo', stock:2,quantity:0},
    {id:"4", title:'Buzo flecos', price:2500, imagen:'images/buzos/buzo7.png', category: 'buzo', stock:10,quantity:0},
    {id:"5", title:'Buzo serpiente', price:4000, imagen:'images/buzos/buzo5.jpg', category: 'buzo', stock:20,quantity:0},
    {id:"6", title:'Buzo digonales corto', price:3500, imagen:'images/buzos/buzo6.jpg', category: 'buzo', stock:7,quantity:0},
    //REMERAS
    {id:"7", title:'Gato asomando', price:2000, imagen:'images/remeras/remera1.jpg',category: 'remera', stock:7 ,quantity:0},
    {id:"8", title:'Perro asomando', price:2000, imagen:'images/remeras/remera2.jpg', category: 'remera', stock:9,quantity:0},
    {id:"9", title:'Bolsillo mapache ', price:2500, imagen:'images/remeras/remera3.jpg', category: 'remera', stock:2,quantity:0},
    {id:"10", title:'Bolsillo perro', price:2000, imagen:'images/remeras/remera4.jpg', category: 'remera', stock:10,quantity:0},
    {id:"11", title:'Escandalosos larga', price:3000, imagen:'images/remeras/remera5.jpg', category: 'remera', stock:20,quantity:0},
    {id:"12", title:'Angels cordones', price:3000, imagen:'images/remeras/remera6.jpg', category: 'remera', stock:7,quantity:0}
]


 const getFetch= new Promise((res,rej)=>{

    //creo la referencia a la coleccion que quiero traer
    const colRef=collection(DB,'productos');

    getDocs(colRef).then((snapshot)=>{
      console.log('snapshot docs',snapshot.docs);
      //PRUEBAS
      console.log('ID 0', snapshot.docs[0].id);
      console.log('Data del elemento 0', snapshot.docs[0].data());

      //obtengo un array con el id de los productos y la informacion de cada uno
      const productsFormated=snapshot.docs.map((rawDoc)=>{
       return{ id:rawDoc.id, ...rawDoc.data()}
      
      })
      console.log('Data formateada', productsFormated);
      res(productsFormated)
    },(error)=>{
      rej('error al traer los docs de snapshot', error);
    });
/* 
    let condition=true;
    if(condition){
        setTimeout(()=>{
            res(backendProducts)
        },2000);
    }
    else{
        rej(console.log("Hubo un error con los datos"))
    } */
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


        /* setTimeout(()=>{
            res(backendProducts.filter(prod=>prod.category===categoryId))
        },500) */
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
    console.log("orden generada: ", orderDoc.id)
    return newOrder
}
export async function setQuantityOrder (listCart){
    listCart.forEach(async(item)=>{
        const itemRef = doc(DB, 'productos', item.id);
        await updateDoc(itemRef, {
            stock: increment(-item.quantity)
        })
    })
}
/* export const createOrderDB=async(order)=>{
    const newOrder= collection(DB,'orders')
    const orderDoc = await setDoc(newOrder, order)
    console.log("orden generada: ", orderDoc.id)
    return newOrder
} */
/* const saveData = async (newOrder) => {
    const orderFirebase = collection(db, 'ordenes')
    const orderDoc = await addDoc(orderFirebase, newOrder)
    console.log("orden generada: ", orderDoc.id)
    setSuccess(orderDoc.id)
    cleanCartProducts()
} */
export default getFetch
/* export {getItem}
export{getProductsByCategory} */