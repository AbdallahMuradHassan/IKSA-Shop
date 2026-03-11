import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import LoadingPage from "../pages/LoadingPage";
import NotFound from "../pages/NotFound";
import Card from "../components/Card";
import { productRoutes } from "../admin/api/prductroute";
function ProductList({ productsPerPage = 12 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "auto" });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(productRoutes.basceURL.server + productRoutes.URLs.get);
        const data = await res.json();
        setProducts(data.products);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filter products by selected product category
  const filteredProducts = selectedProduct
    ? products.filter((p) => p.category === selectedProduct.category)
    : products;

  if (loading) return <LoadingPage />;
  if (error) return <NotFound />;

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const slicedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      {/* Autocomplete */}
      <Autocomplete
        options={products}
        getOptionLabel={(option) => option.title}
        onChange={(event, newValue) => {
          setSelectedProduct(newValue);
          setCurrentPage(1); // reset page when selection changes
          scrollToTop();
        }}
        renderInput={(params) => <TextField {...params} label="Search Products" />}
        sx={{ width: 300, mb: 4 }}
      />

      {/* Product Cards */}
      <div className="wrapper">
        {slicedProducts.map((product, index) => (
          <Card key={product._id} product={product} index={index} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <ul className="pagination">
          <li>
            <button
              disabled={currentPage === 1}
              className={`buttonPaygeNumberPrev ${currentPage === 1 ? "activeButtonPaygeNumber" : ""}`}
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                scrollToTop();
              }}
            >
              &laquo;
            </button>
          </li>

          {[...Array(totalPages)].map((_, i) => (
            <li key={i + 1}>
              <button
                className={`buttonPaygeNumber ${currentPage === i + 1 ? "activeButtonPaygeNumber" : ""}`}
                onClick={() => {
                  setCurrentPage(i + 1);
                  scrollToTop();
                }}
              >
                {i + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              disabled={currentPage === totalPages}
              className={`buttonPaygeNumberNext ${currentPage === totalPages ? "activeButtonPaygeNumber" : ""}`}
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                scrollToTop();
              }}
            >
              &raquo;
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProductList;