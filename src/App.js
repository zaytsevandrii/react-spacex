import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"

function App() {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/react-spacex" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
