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
import Products from "./Prodect";
function App() {

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;
