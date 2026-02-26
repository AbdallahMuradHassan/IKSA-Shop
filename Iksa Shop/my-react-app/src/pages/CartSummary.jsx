'use client';
import { useCart } from "../components/cart/CartContext"
export default function CartSummary() {
    const { items, clear } = useCart();
    const totalQty = items.reduce((sum, x) => sum + x.qty, 0);
    const totalPrice = items.reduce((sum, x) => sum + x.price * x.qty, 0);
    return (
        <>
            <div style={{ padding: 12, border: "1px soled #ddd", borderRadius: 8 }}>
                <h3 style={{ margin: 0 }}>Cart</h3>
                <p style={{ margin: "8px 0" }} >total Items : {totalQty}</p>
                <p style={{ margin: "8px 0" }} >total Price : {totalPrice}</p>
                <button onClick={() => clear()}> Clear Cart</button>
            </div>
        </>
    )
}