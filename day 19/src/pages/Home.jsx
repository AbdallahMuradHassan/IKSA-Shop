
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import AboutUs from "../components/AboutUs";
import ProductList from "../components/ProductList";
function Home() {
    const user = useAuth();
    return (
        <>
            <p> {user ? user.name : "Guest"}</p>
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