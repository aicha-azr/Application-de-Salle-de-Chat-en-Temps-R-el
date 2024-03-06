// server/index.js

const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
app.use(cors()); // Add cors middleware

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello world');
  console.log('hello world')
});

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
/***
 * 
 * 
const io = new Server(server, {
    cors: {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST'],
    },
  });

  // Add this
  // Listen for when the client connects via socket.io-client
  io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

  });
 */

  const io = require('socket.io')(4041, {
    cors: {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST'],
    },
  })
  io.on('connection', ()=>{
    console.log('User connected')
  })
    // We can write our socket event listeners in here...
server.listen(4040, () => 'Server is running on port 4040');