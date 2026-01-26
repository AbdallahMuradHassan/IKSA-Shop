import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            {/* Use Link instead of <a> to avoid full page reload */}
            <Link to="/" style={{ marginRight: "10px" }}>
                Home
            </Link>

            <Link to="/about" style={{ marginRight: "10px" }}>
                About
            </Link>

            <Link to="/profile">Profile</Link>
        </nav>
    );
}

export default Navbar;