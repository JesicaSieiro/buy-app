import logo from './logo.svg';
import './App.css';
import { Routes , Route  } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer titulo={"Productos"}/>}></Route>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
      </Routes>
      {/* 
      <ItemListContainer titulo={"Productos"}/> */}
      <Container></Container>
    </div>
  );
}

export default App;
