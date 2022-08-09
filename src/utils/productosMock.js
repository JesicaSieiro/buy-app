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
    let condition=true;
    if(condition){
        setTimeout(()=>{
            res(backendProducts)
        },2000);
    }
    else{
        rej(console.log("Hubo un error con los datos"))
    }
});
export const getProductsByCategory=(categoryId)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(backendProducts.filter(prod=>prod.category===categoryId))
        },500)
       })
}
 export const getItem=(id)=>{
    return new Promise((res,rej)=>{
     setTimeout(()=>{
         res(backendProducts.find(prod=>prod.id===id))
     },500)
    })
 }

export default getFetch
/* export {getItem}
export{getProductsByCategory} */