import { useEffect, useState } from "react";

import "./assets/css/header.css";

import "./assets/css/card.css";
import "./assets/css/style.css";
import "./assets/css/ionicons.min.css";

import "./assets/css/bootstrap-css-floder/bootstrap.min.css";
import "./assets/css/line-awesome.css";

import "./assets/css/footer.css";
import Header from "./components/includs/Header";
import Footer from "./components/includs/Footers";
import Card from "./components/includs/Card";
import User from "./components/User";
function App() {
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />

      <div className="app">
        <Card products={products} />
      </div>
      {/* <div className="app">
        <User />
      </div> */}

      <Footer />
    </>
  );
}

export default App;
