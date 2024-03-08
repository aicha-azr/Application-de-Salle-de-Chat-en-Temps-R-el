const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors')
const app = express();

app.use(cors({
  origin: '*'
}));

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket=>{
  console.log('New user connected');

  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  })
}))

const Port = 5000;
server.listen(Port, ()=>{
  console.log(`server running on port ${Port}`)
})