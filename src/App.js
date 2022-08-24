import React, { useEffect } from 'react';
import './App.css';
import { Routes , Route  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart';
import CartCustomContext from './context/CartContext';
/* import {getFirestore,collection, getDocs}from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDVXnXmbr1X1sTHlKKnTQ3wsl1aPRlHrw",
  authDomain: "buy-app-coder.firebaseapp.com",
  projectId: "buy-app-coder",
  storageBucket: "buy-app-coder.appspot.com",
  messagingSenderId: "347174437209",
  appId: "1:347174437209:web:96088214dfd92d2da50c48"
};
 */


function App() {
  useEffect(()=>{
 /*    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //selecciono la bdd
    const db=getFirestore(app); */
    /* //creo la referencia a la coleccion que quiero traer
    const colRef=collection(db,'productos');

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
    },(error)=>{
      console.log('error al traer los docs de snapshot', error);
    }); */
    
  },[])
  return (
    <div className="App">
      <CartCustomContext>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer titulo={"Productos"}/>}></Route>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </CartCustomContext>
    </div>
  );
}

export default App;
