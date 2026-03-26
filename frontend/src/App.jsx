import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Lobby from "./pages/Lobby";
import Editor from "./pages/Editor";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/lobby" element={<Lobby />} />

        <Route path="/editor/:roomId" element={<Editor />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;