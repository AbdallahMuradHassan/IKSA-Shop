import Link from "next/link";
import ProductCard from "./ProductCard";
import Git from "../api/products/route"
import { get } from "http";
const products = Git();
export default function HomePage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1>Home</h1>

      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Link href="/">Go to Products</Link>
    </div>
  );
}
