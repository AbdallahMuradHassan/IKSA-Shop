"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/api/product");
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            }
        }
        fetchData();
    }, []);

    return (
        <section>
            <div className="responsive-container-block bigContainer">
                <h1 className="text-blk headingText">Products</h1>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="responsive-container-block Container">
                            <div className="allText aboveText">
                                <p className="text-blk headingText">{product.name}</p>
                                <p className="text-blk subHeadingText">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }
            `}</style>
        </section>
    );
}