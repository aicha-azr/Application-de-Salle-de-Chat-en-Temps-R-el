import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import  io  from "socket.io-client"; 
import { useEffect, useState } from 'react';
import Message from './pages/Message';

function App() {
  const socket = io('http://localhost:5000');
 // const [socket, setSocket] = useState(undefined)
 // const [room, setRoom] = useState('');
 // const [username, setUsername] = useState('')
 const [message, setMessage] = useState([]);
 const [messageText, setMessageText] = useState();
  useEffect(()=>{
      socket.on('connect', ()=>{
        console.log('Connected to server');
      })
      socket.on('disconnect', ()=>{
        console.log('disconnected from server');
      })
    //setSocket(socket);
      //alert('you are at home page')
  },[])
  useEffect(()=>{
    socket.on('message', (message)=>{
      setMessage([...message, message]);
    })
  }, [message]);

  const sendMessage =()=>{
    socket.emit('message', {text: messageText});
    setMessageText('');
  }
  return (
    <>
   { 
    /*<Router>
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
          </Router> */} 

          <div className="flex justify-center border border-white">
            <h1>Real-Time Chat </h1>
            <div>
              {Array.isArray(message) && message.map((message, index)=>(
                <Message key={index} username={message.username} text={message.text} />
              ))}
            </div>
            <div>
              <input type="text" value={messageText}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Type pour message...' />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
  </>
  );
}

export default App;