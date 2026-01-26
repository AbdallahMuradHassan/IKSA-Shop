import { useEffect, useState } from "react";
import Card from "../components/Card";

function ProductList({ firstIndex = 0, lastIndex = 12 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const slicedProducts = products.slice(firstIndex, lastIndex);
  const pagesCount = Math.ceil(products.length / 12);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="wrapper">
      {slicedProducts.map((product) => (
        <Card product={product} key={product.id} />
      ))}

    </div>
  );
}

export default ProductList;
