import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  return (
    <main style={{ padding: 14 }}>
      <h1>DepoloyReady Store</h1>
      <p>
        section 24 Project : Deploy + env +Build Optimization .
      </p>
      <Link href={"/product"}>Go to products </Link>
    </main>
  );
}
