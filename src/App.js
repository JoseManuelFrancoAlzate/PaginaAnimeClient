import './App.css';

import { BrowserRouter as Router, Redirect, Routes, Route, Navigate } from 'react-router-dom';
import axios from "axios" 
import Home from './Components/Home';
import Personajes from './Components/Personajes/Personajes';
import Powers from './Components/allPowers/Powers/Powers';
import AnimesPersonajesId from './Components/CardsAnime/AnimesPersonajesId/AnimesPersonajesId';
import PersonajesPowersId from './Components/Personajes/PersonajesPowersId/PersonajesPowersId';
import Register from './Components/Register/Register';
import React, { useState } from 'react';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';


axios.defaults.baseURL = "http://localhost:3001/";

function App() {
const [isLoggedIn, setIsLoggedIn]= useState(false)


  return (
     
    <div className="App">
      {isLoggedIn ? (
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/powers" element={<Powers/>}/>
        <Route path="/personajes/:id" element={<AnimesPersonajesId/>} />
        <Route path="/powers/:id" element={<PersonajesPowersId/>} />
<Route path="/register" element={<Register/>}/>
<Route path="*" element={<NotFoundPage/>}/>
      </Routes>
  ) :( 
      
    <Routes>
    <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
    <Route path="*" element={<Navigate replace to="/"/>}/>
    <Route path="/register" element={<Register/>}/>

    </Routes>
  )
  }
    </div>
  );
}

export default App;
