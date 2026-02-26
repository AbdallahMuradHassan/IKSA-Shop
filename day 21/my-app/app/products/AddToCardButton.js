'use client';


import { useCart } from "../CartContext";

function AddToCartButton({ product }) {
    const { addItem } = useCart();

    return (
        <button onClick={() => addItem(product)}>
            Add to cart
        </button>
    );
}
export default AddToCartButton