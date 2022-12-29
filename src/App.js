import { Routes, Route, BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Dragon from "./pages/Dragon"
import Falcon9 from "./pages/Falcon9"
import FalconHeavy from "./pages/FalconHeavy"
import Home from "./pages/Home"

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/react-spacex" element={<Home />} />
                    <Route path="/falcon9" element={<Falcon9 />} />
                    <Route path="/falcon-heavy" element={<FalconHeavy />} />
                    <Route path="/dragon" element={<Dragon />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
