// function Card({ product }) {

//     return (<>

//         <div className="single-card" >
//             <div className="img-area">
//                 <img
//                     src={product.images}
//                     alt={product.name}
//                 />
//                 <div className="overlay">
//                     <button
//                         className="view-details"
//                         onClick={() => window.location.href = "#"}
//                     >
//                         View Details
//                     </button>
//                 </div>
//             </div>

//             <div className="info">
//                 <h3>{product.title}</h3>
//                 <h5>Category Name: {product.category}</h5>
//                 <p>{product.description}</p>
//                 <p className="price">Price: {product.price} JOD</p>
//             </div>
//         </div>
//     </>);
// }
import React, { useEffect, useState, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Card({ product, index, effect = "fadeInUp" }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(domRef.current);
                    }
                });
            },
            { threshold: 0.15 }
        );

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const staggerDelay = `${(index % 12) * 200}ms`;

    const getAnimationClass = () => {
        if (!isVisible) return "";
        const baseClass = "animated-fast";
        switch (effect) {
            case "fadeIn":
                return `${baseClass} fadeIn`;
            case "fadeInLeft":
                return `${baseClass} fadeInLeft`;
            case "fadeInRight":
                return `${baseClass} fadeInRight`;
            default:
                return `${baseClass} fadeInUp`;
        }
    };
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: item,
        });
    };
    return (
        <div
            ref={domRef}
            className={`single-card animate-box ${getAnimationClass()}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transitionDelay: isVisible ? staggerDelay : "0ms",
            }}
        >
            <div className="img-area">
                <img src={product.thumbnail} alt={product.title} />
                <div className="overlay">
                    <button
                        className="view-details"
                        onClick={() => navigate("/carts")}
                    >
                        View Details
                    </button>

                    <button
                        className="mt-5 w-full cursor-pointer rounded-se-2xl bg-black p-3 text-white transition-colors duration-200 hover:bg-amber-800"
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>

            <div className="info">
                <h3>{product.title}</h3>
                <p className="price">{product.price} JOD</p>
            </div>
        </div>
    );
}

export default Card;