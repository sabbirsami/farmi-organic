import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import SingUp from "./components/SingUp/SingUp";

function App() {
    return (
        <div className="App">
            <HeaderNav></HeaderNav>
            <Routes>
                <Route path="/" element={<Hero></Hero>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/signup" element={<SingUp></SingUp>}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
