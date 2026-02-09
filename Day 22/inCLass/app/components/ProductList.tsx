"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function ProductList({ firstIndex = 0, lastIndex = 12 }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    loadProducts();
  }, []);
  return (
    <div className="wrapper">
      {products.slice(firstIndex, lastIndex).map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
