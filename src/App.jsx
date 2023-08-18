import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';


//COMPONENTES
import Header from "./components/Header/header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/*<ItemListContainer saludoscompa="Hola amigo, Hola amigo!" />
  <ItemDetailContainer/>
  <Header title="DonDron desde Componente"/>*/

function App() {
  //const [count, setCount] = useState(0)

  return (
    <main className='main'>
        <BrowserRouter>
          <Navbar />
          
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/marca/:marcaId' element={<ItemListContainer />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />            
          </Routes>
          <Footer />
        </BrowserRouter>
    </main>
  );
  
}

export default App;
