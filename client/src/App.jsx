import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import { io } from "socket.io-client"; 
import { useEffect, useState } from 'react';

function App() {
  const [socket, setSocket] = useState(undefined)
  const [room, setRoom] = useState('');
  const [username, setUsername] = useState('')
  useEffect(()=>{
      const socket = io('http://localhost:4041');
      setSocket(socket);

      //alert('you are at home page')
  },[])
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home 
            username={username}
            setUsername={setUsername}
            room={room}
            setRoom={setRoom}
            socket={socket} />} />
          <Route path='/chat' element={<Chat socket={socket} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;