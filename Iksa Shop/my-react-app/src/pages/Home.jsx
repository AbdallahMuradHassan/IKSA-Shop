
import { useEffect, useState } from "react";


import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import AboutUs from "../components/AboutUs";
import ProductList from "../components/ProductList";
function Home() {
    return (
        <>
            <HeroSection />
            <Category />
            <AboutUs />
            <section>
                <ProductList />
            </section>
        </>
    );
}
export default Home;