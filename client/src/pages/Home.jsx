import { io } from "socket.io-client"; 
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = ({ username, setUsername, room, setRoom, socket })=>{
    const navigate = useNavigate();

    const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }

    // Redirect to /chat
    navigate('/chat', { replace: true }); // Add this
  };
  
    return(<>
        <div className='bg-white text-black flex flex-col items-center border border-black'>
      
        <h1 className="bg-slate-300 text-black">{`<>DevRooms</>`}</h1>
        <input className='' placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />

        <button className='btn btn-secondary' onClick={joinRoom}>Join Room</button>
      </div>
    
    </>)
}
export default Home;