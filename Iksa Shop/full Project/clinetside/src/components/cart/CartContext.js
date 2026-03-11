"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [items, setItems] = useState([]); // local cart state

    // Add product to cart (API + local state)
    async function addItem(product) {
        try {
            const res = await fetch("https://your-api-url.com/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${token}` // if you use auth
                },
                body: JSON.stringify({ productId: product.id, quantity: 1 }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to add to cart");
            }

            // Update local cart state
            setItems((prev) => {
                const found = prev.find((x) => x.id === product.id);
                if (found) {
                    return prev.map((x) =>
                        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                    );
                }
                return [...prev, { ...product, qty: 1 }];
            });

        } catch (err) {
            console.error("Add to cart error:", err);
            alert(err.message);
        }
    }

    function clear() {
        setItems([]);
    }

    const value = useMemo(() => ({ items, addItem, clear }), [items]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
}