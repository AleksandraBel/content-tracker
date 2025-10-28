import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import History from "./pages/History";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
