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
import React, { useEffect, useState } from "react";
import LoadingPage from "../pages/LoadingPage";
import NotFound from "../pages/NotFound";
import Card from "../components/Card";

function ProductList({ productsPerPage = 12 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
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

  if (loading) return <LoadingPage />;
  if (error) return <NotFound />;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const slicedProducts = products.slice(startIndex, endIndex);
  return (<>
    <div className="wrapper">
      {slicedProducts.map((product, index) => (

        <Card
          product={product}
          key={product.id}
          index={index}
        />

      ))}

    </div>
    <ul className="pagination">
      <li>
        <button
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? "active" : ""}`}
          onClick={() => { setCurrentPage(prev => Math.max(prev - 1, 1)), scrollToUp() }}
        >
          &laquo;
        </button>
      </li>

      {[...Array(totalPages)].map((_, i) => (
        <li key={i + 1}>
          <button
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => { setCurrentPage(i + 1), scrollToUp() }}
          >
            {i + 1}
          </button>
        </li>
      ))}

      <li>
        <button
          disabled={currentPage === totalPages}
          className={`${currentPage === totalPages ? "active" : ""}`}
          onClick={() => { setCurrentPage(prev => Math.min(prev + 1, totalPages)), scrollToUp() }}
        >
          &raquo;
        </button>
      </li>
    </ul></>
  );
} export default ProductList;