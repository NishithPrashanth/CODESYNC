import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    if(username.trim() === ""){
      alert("Enter username");
      return;
    }

    localStorage.setItem("username", username);

    navigate("/lobby");
  };

  return (

    <div className="login-page">

        <h1 className="title">
            CodeRoom
        </h1>

        <p className="tagline">
            Real-time collaborative coding
        </p>

        <input
            className="username-input"
            placeholder="Enter username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
        />

        <button
            className="login-btn"
            onClick={handleLogin}
        >
            Continue
        </button>

    </div>

  );
}

export default Login;