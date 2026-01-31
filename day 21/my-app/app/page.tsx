import Link from "next/link";
import CartSummary from "./CartSummary";

export default function HomePage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1>Home</h1>

      <CartSummary />

      <Link href="/products">Go to Products</Link>
    </div>
  );
}
