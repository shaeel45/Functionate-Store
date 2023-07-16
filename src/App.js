import "./App.css";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "../src/containers/Home/Home";
import  About  from "../src/containers/About/About";
import  Signup  from "../src/containers/account/Signup";
import  Contact  from "../src/containers/contact/Contact";


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;