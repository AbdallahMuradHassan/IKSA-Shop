import React, { createContext, useState, useEffect } from "react";
import api from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get("/users/profile")
            .then(res => setUser(res.data))
            .catch(() => setUser(null));
    }, []);

    const register = async (credentials) => {
        await api.post("/auth/register", credentials);
    };

    const login = async (credentials) => {

        const res = await api.post("/auth/login", credentials);

        localStorage.setItem("accessToken", res.data.accessToken);

        const userRes = await api.get("/users/profile");

        setUser(userRes.data);
    };

    const logout = async () => {

        await api.post("/auth/logout");

        localStorage.removeItem("accessToken");

        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};