const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const socketManager = require("./socketManager");
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET","POST"]
}));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET","POST"]
  }
});

io.on("connection",(socket)=>{
  console.log("User connected:", socket.id);
});

socketManager(io);

server.listen(5000,()=>{
  console.log("Server running on port 5000");
});