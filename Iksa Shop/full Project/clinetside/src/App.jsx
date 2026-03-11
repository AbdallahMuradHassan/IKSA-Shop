import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./assets/css/Loading.css"
import "./assets/css/bootstrap-css-floder/bootstrap.min.css";

import "./assets/css/us.css";
import "./assets/css/animate.css";
import "./assets/css/header.css";
import "./assets/css/footer.css";
import "./assets/css/card.css";

import "./assets/css/ionicons.min.css";
import "./assets/css/slider.css";

import "./assets/css/line-awesome.css";
import "./assets/css/style.css";
import "./assets/css/contact.css"

import Header from "./components/includs/Header";
import Footer from "./components/includs/Footers";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import LoginRegistration from "./pages/LoginRegistration.jsx"

import Carts from "./pages/Carts"


function App() {
  const location = useLocation();

  const hideFooterRoutes = ["/contact", "/loginregistration"];
  const hideHeaderRoutes = ["/contact", "/loginregistration"];
  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/carts" element={<Carts />} /> */}
        <Route path="/loginregistration" element={<LoginRegistration />} />
        {/* This route matches any unknown URL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}

    </>
  );
}

export default App;
