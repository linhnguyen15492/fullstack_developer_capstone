import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/dealer/:id" element={<Dealer />} />
      </Routes>
    </>
  );

}

export default App
