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
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
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
