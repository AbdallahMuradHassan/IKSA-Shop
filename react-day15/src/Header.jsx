import { useState } from "react";
import logo from "./assets/imges/LOGO2.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar-container shadow-lg p-3 mb-5 bg-white rounded">

            <div className="logo-container">
                <img src={logo} className="profile-image" alt="Logo" />
            </div>

            <div className="bars" onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-items ${isOpen ? "active" : ""}`}>
                <li className="nav-link"><a href="#">Home</a></li>
                <li className="nav-link"><a href="#">Product</a></li>
                <li className="nav-link"><a href="#">Contact</a></li>
                <li className="nav-link"><a href="#">About</a></li>

                <div className="login-register">
                    <a href="#" className="button">Login</a>
                </div>
            </ul>

        </nav>
    );
}

export default Header;