import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { io } from "socket.io-client"; 
function App() {
  
  return (
    <>
     <Router>
      {/* Route de redirection vers la page d'accueil */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      {/* Route de la page d'accueil */}
      <Route path="/home" component={Home} />
      {/* Ajoutez d'autres routes ici, si nécessaire */}

    </Router>
   
    </>
  )
}

export default App
