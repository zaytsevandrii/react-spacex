import React from "react"
import { Link } from "react-router-dom"
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                <Link to='/react-spacex'>
                    <img src={logo} alt="SpaceX" />
                </Link>
            </div>
            <nav className="desktop-main-menu">
                <ul>
                    <li><Link>Falcon 9</Link></li>
                    <li><Link>Falcon Heavy</Link></li>
                    <li><Link to='/'>Dragon</Link></li>
                    <li><Link>Starship</Link></li>
                    <li><Link>Human Spaceflight</Link></li>
                    <li><Link>Rideshare</Link></li>
                    <li><Link>Starlink</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
