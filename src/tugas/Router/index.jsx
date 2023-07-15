import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style/LandingPage.css";
import Home from "./Component/Home";
import About from "./Component/About/Komponen";
import Project from "./Component/Project/Komponen";
import Contact from "./Component/Contact/Komponen";
import NavigationBar from "./Component/Navbar/Navbar";

const Ruter = () => {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar />
                {/* <nav>
                    <Link to='/'>Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </nav> */}
                {/* <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Ruter;