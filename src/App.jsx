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


function App() {
  //const [count, setCount] = useState(0)

  return (
    <main className='main'>
        <Navbar />
        <Header title="DonDron desde Componente"/>
        <ItemListContainer saludoscompa="Hola amigo, Hola amigo!" />
        
        <ItemDetailContainer/>
        <Footer />
    </main>
  );
  
}

export default App;
