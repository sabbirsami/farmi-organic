import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";

function App() {
    return (
        <div className="App">
            <HeaderNav></HeaderNav>
            <Routes>
                <Route path="/" element={<Hero></Hero>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="products" element={<Products></Products>}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
