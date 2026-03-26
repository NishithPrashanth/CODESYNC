import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../sockert";

export default function Editor() {

  const { roomId } = useParams();

  const [code, setCode] = useState("");

  useEffect(()=>{

    const username = localStorage.getItem("username");

    socket.emit("join_room", {
      roomId,
      username
    });

    socket.on("receive_code",(newCode)=>{
      setCode(newCode);
    });

  },[]);

  const handleChange = (e)=>{

    const newCode = e.target.value;

    setCode(newCode);

    socket.emit("code_change",{
      roomId,
      code:newCode
    });

  };

  return (

    <textarea
      value={code}
      onChange={handleChange}
      style={{
        width:"100%",
        height:"100vh"
      }}
    />

  );

}