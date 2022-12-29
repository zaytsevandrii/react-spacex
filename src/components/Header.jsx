import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import Hamburger from "./Hamburger"

const Header = () => {
    const [open, setOpen] = useState(false)
    const openModal = () => {
        setOpen(!open)
    }
    const firstPage=()=>{
        setOpen(false)
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        if (open) {
            document.body.classList.add("stop-scrolling")
        }else{
            document.body.classList.remove("stop-scrolling")
        }
    }, [open])
    return (
        <>
            <div className={`${open && "overlay-show"}`}></div>
            <div id="mobile-menu" className={`mobile-main-menu ${open && "show-menu"}`}>
                <ul>
                    <li>
                        <a href="">Mission</a>
                    </li>
                    <li>
                        <a href="">Launches</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Updates</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>

                    <li className="mobile-only">
                        <Link to="/falcon9" onClick={() => setOpen(false)}>
                            Falcon 9
                        </Link>
                    </li>
                    <li className="mobile-only">
                        <Link to="/falcon-heavy" onClick={() => setOpen(false)}>Falcon Heavy</Link>
                    </li>
                    <li className="mobile-only">
                        <Link to="/dragon" onClick={() => setOpen(false)}>Dragon</Link>
                    </li>
                    <li className="mobile-only">
                        <Link>Starship</Link>
                    </li>
                    <li className="mobile-only">
                        <Link>Human Spaceflight</Link>
                    </li>
                    <li className="mobile-only">
                        <Link>Rideshare</Link>
                    </li>
                    <li className="mobile-only">
                        <Link>Starlink</Link>
                    </li>
                </ul>
            </div>
            <header className="main-header">
                <div className="logo">
                    <Link to="/react-spacex" onClick={firstPage}>
                        <img src={logo} alt="SpaceX" />
                    </Link>
                </div>
                <nav className="desktop-main-menu">
                    <ul>
                        <li>
                            <Link to="/falcon9" onClick={() => setOpen(false)}>
                                Falcon 9
                            </Link>
                        </li>
                        <li>
                            <Link to="/falcon-heavy" onClick={() => setOpen(false)}>Falcon Heavy</Link>
                        </li>
                        <li>
                            <Link to="/dragon" onClick={() => setOpen(false)}>Dragon</Link>
                        </li>
                        <li>
                            <Link>Starship</Link>
                        </li>
                        <li>
                            <Link>Human Spaceflight</Link>
                        </li>
                        <li>
                            <Link>Rideshare</Link>
                        </li>
                        <li>
                            <Link>Starlink</Link>
                        </li>
                        <li>
                            <Link>Shop</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Hamburger open={open} openModal={openModal} />
        </>
    )
}

export default Header
