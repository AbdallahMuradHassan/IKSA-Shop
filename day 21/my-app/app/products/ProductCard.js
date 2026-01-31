import React from 'react'
import AddToCartButton from './AddToCardButton'
function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 12,
        display: "grid",
        gap: 8,
      }}
    >
      <strong>{product.name}</strong>
      <span>Price: ${product.price}</span>

      <AddToCartButton product={product} />
    </div>
  )
}

export default ProductCard