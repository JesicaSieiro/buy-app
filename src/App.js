
import './App.css';
import { Routes , Route  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart';
import CartCustomContext from './context/CartContext';



function App() {

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
