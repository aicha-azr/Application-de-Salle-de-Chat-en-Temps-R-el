import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { io } from "socket.io-client"; 
function App() {
  const [socket, setSocket] = useState(undefined)
  useEffect(()=>{
      const socket = io('http://localhost:4041');
      alert('you are at app page')
  },[])
  return (
    <>
    <h1>hello</h1>
     {/* <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
  </Router>*/}
    </>
  )
}

export default App
