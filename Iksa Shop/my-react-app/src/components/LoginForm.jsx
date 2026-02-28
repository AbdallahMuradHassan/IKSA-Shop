
import React, { useState } from "react";
import BackButton from "./BackButton"


function Login({ onCreateAccount }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let err = {};

        if (!formData.email) err.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            err.email = "Invalid email format";

        if (!formData.password) err.password = "Password is required";

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("LOGIN DATA:", formData);
            alert("Login successful ✅");
            // 👉 call API here
        }
    };


    return (
        <div className="ms-form-container">
            <form id="msform" onSubmit={handleSubmit}>
                <fieldset>
                    <h2 className="fs-title">Sign In</h2>
                    <h3 className="fs-subtitle">Welcome back</h3>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <span className="error">{errors.email}</span>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password *"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span className="error">{errors.password}</span>

                    <button type="submit" className="submit action-button">
                        Login
                    </button>
                    <br />
                    <button type="" className="action-button cont">
                        contewith
                    </button>
                    <p className="form-footer">
                        Don’t have an account?{" "}
                        <span
                            className="link"
                            onClick={onCreateAccount}
                            style={{ cursor: "pointer", color: "#27ae60" }}
                        >
                            Create New
                        </span>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login