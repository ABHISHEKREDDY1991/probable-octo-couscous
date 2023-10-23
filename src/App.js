import Contact from "./component/Contact";
import Home from "./component/Home";
import Aboutus from "./component/Aboutus";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Create from"./component/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./component/Update";
// import Switch from "react-switch";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path="/home" element={<Home />} />

                    <Route exact path="/create" element={<Create/>} />

                    <Route exact path="/update" element={<Update/>} />
                    
                    <Route exact path="/contact" element={<Contact />} />

                    <Route exact path="/about" element={<Aboutus />} />
                    
                    <Route exact path="/login" element={<Login />} />
                </Routes>

            </div>
        </Router>
    )
}

export default App;
