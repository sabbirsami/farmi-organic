import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import HeaderNav from "./components/HeaderNav/HeaderNav";

function App() {
    return (
        <div className="App">
            <HeaderNav></HeaderNav>
            <ToastContainer />
        </div>
    );
}

export default App;
