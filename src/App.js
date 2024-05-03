import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Contato from './components/contato';
import Quem from './components/quemsomos';

function App() {
  return (
    
    <div className="App">
    <NavBar />

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contato' element={<Contato />} />
    <Route path='/quem' element={<Quem />} />

    </Routes>
    </BrowserRouter>
    
    <Footer />

    </div> 
  );
    
} 
  

export default App;
