
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Category from "./components/Category";
import AboutUs from "./components/AboutUs";

import ProductList from "./components/ProductList";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Category />
      <AboutUs />
      <ProductList />
      <br />
    </div>
  );
}