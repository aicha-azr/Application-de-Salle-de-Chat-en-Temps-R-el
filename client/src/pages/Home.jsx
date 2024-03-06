import { io } from "socket.io-client"; 
import { useEffect } from 'react';
import { useState } from 'react';
const Home = ()=>{
    const [socket, setSocket] = useState(undefined)
    useEffect(()=>{
        const socket = io('http://localhost:4041');
        alert('you are at home page')
    },[])
    return(<>
        <h1>you are at home page</h1>
    </>)
}
export default Home;