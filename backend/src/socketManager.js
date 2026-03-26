const roomService = require("./roomService");

module.exports = function(io) {

  io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    socket.on("join_room", ({ roomId, username }) => {

      socket.join(roomId);

      roomService.joinRoom(roomId, username);

      const code = roomService.getCode(roomId);

      socket.emit("sync_code", code);

      io.to(roomId).emit("user_joined", username);

    });


    socket.on("code_change", ({ roomId, code }) => {

      roomService.updateCode(roomId, code);

      socket.to(roomId).emit("receive_code", code);

    });


    socket.on("disconnect", () => {
      console.log("User disconnected");
    });

  });

};