import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import SingUp from "./components/SingUp/SingUp";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AddItem from "./components/AddItem/AddItem";
import Footer from "./components/Footer/Footer";
import MyItem from "./components/MyItem/MyItem";

function App() {
    return (
        <div className="App">
            <HeaderNav></HeaderNav>
            <Routes>
                <Route path="/" element={<Hero></Hero>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/addItem" element={<AddItem></AddItem>}></Route>
                <Route path="/myItem" element={<MyItem></MyItem>}></Route>
                <Route
                    path="/manageInventory"
                    element={<ManageInventory></ManageInventory>}
                ></Route>
                <Route
                    path="/product/:productId"
                    element={<ProductDetail></ProductDetail>}
                ></Route>
                <Route path="/signup" element={<SingUp></SingUp>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
