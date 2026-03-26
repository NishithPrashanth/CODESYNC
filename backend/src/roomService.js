const rooms = {};

function createRoom(roomId) {

  rooms[roomId] = {
    code: "",
    users: []
  };

}

function joinRoom(roomId, username) {

  if (!rooms[roomId]) {
    createRoom(roomId);
  }

  rooms[roomId].users.push(username);
}

function updateCode(roomId, code) {

  if (rooms[roomId]) {
    rooms[roomId].code = code;
  }

}

function getCode(roomId) {

  return rooms[roomId]?.code || "";

}

module.exports = {
  createRoom,
  joinRoom,
  updateCode,
  getCode
};