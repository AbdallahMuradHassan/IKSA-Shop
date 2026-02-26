import { useState } from "react";
import { href, Link } from "react-router-dom";
import { ImFacebook, ImInstagram } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { MdLocationOn } from 'react-icons/md';
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import logo from "../../assets/imges/LOGO2.png";


const PageLinks = [
    { pageName: "Home", To: "/" },
    { pageName: "Product", To: "/product" },
    { pageName: "about", To: "/about" },
    { pageName: "Contact", To: "/contact" },

]
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    };
    const OpenCloseMenu = () => { setIsOpen((prev) => !prev) };
    return (
        <nav className="navbar-container shadow-lg p-3 mb-5 bg-white rounded">

            <div className="logo-container">
                <img src={logo} className="profile-image" alt="Logo" />
            </div>

            <div className="bars" onClick={() => OpenCloseMenu()}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-items ${isOpen ? "active" : ""}`}>
                {PageLinks.map((link, index) => (
                    <li className="nav-link" key={index}>
                        <Link
                            to={link.To}
                            onClick={() => {
                                OpenCloseMenu();
                                scrollToUp();
                            }}
                        >
                            {link.pageName}
                        </Link>
                    </li>
                ))}
                <div className="login-register">
                    <Link to="/loginregistration" className="button">Login</Link>
                </div>
                <div className="social_follow" >
                    <ul className="ulSosal" >
                        <li title="facebook" className="liSosal"><a href="#" target="_blank"><ImFacebook className="Icon facebook" /><span className="facebook spanSoshal">Facebook</span></a>
                        </li>
                        <li title="whatsapp" className="liSosal"><a href="https://api.whatsapp.com/send/?phone=%2B962781021110&text&type=phone_number&app_absent=0" target="_blank"><AiOutlineWhatsApp className="Icon whatsapp" /><span className="whatsapp spanSoshal">whatsapp</span></a>
                        </li>
                        <li title="instagram" className="liSosal"><a href="https://www.instagram.com/iksaShop/" target="_blank"><AiOutlineInstagram className="Icon instagram-gradient" /><span className="instagram-gradient spanSoshal">instagram</span></a>
                        </li>
                    </ul>
                </div>
            </ul>

        </nav>
    );
}

export default Header;