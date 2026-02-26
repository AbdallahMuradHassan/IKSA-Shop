// import { useEffect, useState } from "react";
// import Card from "../components/Card";
// import LoadingPage from "../pages/LoadingPage";
// import NotFound from "../pages/NotFound";

// function ProductList({ firstIndex = 0, lastIndex = 12 }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();
//         setProducts(data.products);
//       } catch {
//         setError("Failed to load data");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [1000]);

//   const slicedProducts = products.slice(firstIndex, lastIndex);
//   const pagesCount = Math.ceil(products.length / 12);

//   if (loading) return <LoadingPage />;
//   if (error) return <NotFound />;

//   return (
//     <div className="wrapper">
//       {slicedProducts.map((product) => (
//         <Card product={product} key={product.id} />
//       ))}

//     </div>
//   );
// }

// export default ProductList;
// import { useEffect, useState } from "react";
// import LoadingPage from "../pages/LoadingPage";
// import NotFound from "../pages/NotFound";
// import AnimatedCard from "./AnimatedCard";

// function ProductList({ firstIndex = 0, lastIndex = 12 }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();
//         setProducts(data.products);
//       } catch {
//         setError("Failed to load data");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   const slicedProducts = products.slice(firstIndex, lastIndex);

//   if (loading) return <LoadingPage />;
//   if (error) return <NotFound />;

//   return (
//     <div className="wrapper">
//       {slicedProducts.map((product, i) => {
//         // Alternate effects for variety
//         const effects = ["fadeInUp", "fadeInLeft", "fadeInRight"];
//         const effect = effects[i % effects.length];
//         return <AnimatedCard key={product.id} product={product} effect={effect} />;
//       })}
//     </div>
//   );
// }

// export default ProductList;
import React, { useEffect, useState, } from "react";
import LoadingPage from "../pages/LoadingPage";
import NotFound from "../pages/NotFound";
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
  }, []); // Fixed the dependency array from [1000] to []

  const slicedProducts = products.slice(firstIndex, lastIndex);

  if (loading) return <LoadingPage />;
  if (error) return <NotFound />;

  return (
    <div className="wrapper">
      {slicedProducts.map((product, index) => (
        <Card
          product={product}
          key={product.id}
          index={index} // Pass index here
        />
      ))}
    </div>
  );
} export default ProductList;