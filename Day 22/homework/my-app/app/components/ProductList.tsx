import Card from "./Card";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div className="wrapper">
      {products.slice(0, 12).map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}