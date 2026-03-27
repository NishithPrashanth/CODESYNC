const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const socketManager = require("./socketManager");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://codesync-frontend-2c0y.onrender.com"
  ],
  methods: ["GET","POST"]
}));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://codesync-frontend-2c0y.onrender.com"
    ],
    methods: ["GET","POST"]
  }
});

socketManager(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});