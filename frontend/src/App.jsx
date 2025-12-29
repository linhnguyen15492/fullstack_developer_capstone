import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import './App.css'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );

}

export default App
