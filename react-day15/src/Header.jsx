import logo from './imges/LOGO2.png'

function Header() {
    return (

        <navbar className="navbar-container shadow-lg p-3 mb-5 bg-white rounded">
            <div className="logo-container">
                <img src={logo} className="profile-image" alt="" />

            </div>

            <div className="bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className="nav-items">
                <li className="nav-link"><a href="index.html">Home</a></li>
                <li className="nav-link"><a href="prodect.html">prodect</a></li>
                <li className="nav-link"><a href="contact.html">Contact</a></li>
                <li className="nav-link"><a href="about.html">About</a></li>
                <div className="login-register">
                    <a href="Login_Register.php" className="button">Login</a>

                </div>
            </ul>
        </navbar>

    );

}
export default Header;