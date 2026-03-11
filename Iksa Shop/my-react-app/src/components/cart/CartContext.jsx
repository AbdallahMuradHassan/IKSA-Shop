"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import api from "../../admin/api/api"; // Axios instance with auth

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) setItems(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    async function addItem(product, quantity = 1) {
        try {
            await api.post("/cart", { productId: product._id, quantity });
            setItems(prev => {
                const found = prev.find(x => x.id === product.id);
                if (found) return prev.map(x => x.id === product.id ? { ...x, qty: x.qty + quantity } : x);
                return [...prev, { ...product, qty: quantity }];
            });
        } catch (err) {
            console.error("Add to cart error:", err);
            alert(err.response?.data?.message || "Failed to add to cart");
        }
    }

    function removeItem(productId) {
        setItems(prev => prev.filter(x => x.id !== productId));
    }

    function updateQuantity(productId, qty) {
        setItems(prev => prev.map(x => x.id === productId ? { ...x, qty } : x));
    }

    function clear() {
        setItems([]);
    }

    const value = useMemo(() => ({ items, addItem, removeItem, updateQuantity, clear }), [items]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
}