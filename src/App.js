import "./Style/App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./contexts/StateContext";
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />

            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />}></Route>
              <Route path="/" element={<Chat />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
