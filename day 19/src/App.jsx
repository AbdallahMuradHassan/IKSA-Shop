import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import "./assets/css/bootstrap-css-floder/bootstrap.min.css";

import "./assets/css/us.css";

import "./assets/css/header.css";
import "./assets/css/footer.css";
import "./assets/css/card.css";

import "./assets/css/ionicons.min.css";
import "./assets/css/slider.css";

import "./assets/css/line-awesome.css";
import "./assets/css/style.css";

import Header from "./components/includs/Header";
import Footer from "./components/includs/Footers";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute>
          <Profile />
        </ProtectedRoute>} />

        {/* This route matches any unknown URL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
