import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/lobby.css";

export default function Lobby() {

  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const createRoom = () => {
    const id = uuid();
    navigate(`/editor/${id}`);
  };

  const joinRoom = () => {
    if(roomId.trim() === ""){
      alert("Enter Room ID");
      return;
    }
    navigate(`/editor/${roomId}`);
  };

  return (

    <div className="lobby-page">

        <h1 className="lobby-title">
            CodeRoom
        </h1>

        <p className="lobby-subtitle">
            Start or join a collaborative coding session
        </p>

        <button
          className="create-room-btn"
          onClick={createRoom}
        >
          Create Room
        </button>

        <div className="join-section">

            <input
              className="room-input"
              placeholder="Enter Room ID"
              onChange={(e)=>setRoomId(e.target.value)}
            />

            <button
              className="join-room-btn"
              onClick={joinRoom}
            >
              Join Room
            </button>

        </div>

    </div>

  );
}