import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
const Ruter = () => {
    return (
        <div className="container">
            <h1>Belajar react routing</h1>
            <nav>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </nav>
        </div>

    )
}
export default Ruter;