import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Login() {
    const [name, setName] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    function submit(e) {
        e.preventDefault();
        if (!name.trim()) {
            return
        } login(name.trim());
        navigate("/profile");
    }
    return (
        <div style={{ marginTop: 50, }}>
            <h1>login</h1>

            <form onSubmit={submit} style={{
                display: "grid",
                gap: 10,
                maxWidth: 320,
            }}>


                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>

        </div>
    )
}
export default Login;