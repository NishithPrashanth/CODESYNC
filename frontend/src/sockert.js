import { io } from "socket.io-client";

const socket = io("https://codesync-8gep.onrender.com");

export default socket;