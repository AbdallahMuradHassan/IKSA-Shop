// import { useState } from "react";

// function HeroSection() {
//     const sliders = [
//         {
//             title: "MAGIC SLIDER",
//             type: "FLOWER",
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             url: "/imges/slider/slider1.jpeg",
//         },
//         {
//             title: "MAGIC SLIDER",
//             type: "FLOWER",
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             url: "/imges/slider/slider2.jpeg",
//         },
//         {
//             title: "MAGIC SLIDER",
//             type: "FLOWER",
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             url: "/imges/slider/slider3.jpeg",
//         },
//     ];

//     const [index, setIndex] = useState(0);

//     const next = () =>
//         setIndex((prev) => (prev + 1) % sliders.length);

//     const prev = () =>
//         setIndex((prev) => (prev - 1 + sliders.length) % sliders.length);

//     const current = sliders[index];

//     return (
//         // <section className="slider-section">
//         //     <div className="slider">
//         //         <div className="list">
//         //             <div className="item">
//         //                 <img src={current.url} alt={current.title} />

//         //                 <div className="content">
//         //                     <div className="title">{current.title}</div>
//         //                     <div className="type">{current.type}</div>
//         //                     <div className="description">{current.description}</div>
//         //                     <div className="button">
//         //                         <button>SEE MORE</button>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>

//         //         <div className="thumbnail">
//         //             {sliders.map((item, i) => (
//         //                 <div
//         //                     key={i}
//         //                     className={`item ${i === index ? "active" : ""}`}
//         //                     onClick={() => setIndex(i)}
//         //                 >
//         //                     <img src={item.url} alt={item.title} />
//         //                 </div>
//         //             ))}
//         //         </div>

//         //         <div className="nextPrevArrows">
//         //             <button onClick={prev}>{'<'}</button>
//         //             <button onClick={next}>{'>'}</button>
//         //         </div>
//         //     </div>
//         // </section>
//         <aside id="fh5co-hero" className="js-fullheight">
//             <div className="flexslider js-fullheight">
//                 <ul className="slides">
//                     {sliders.map((item, i) => (
//                         <li
//                             key={i}
//                             style={{ backgroundImage: `url(${item.url})` }}
//                         >
//                             <div className="overlay-gradient"></div>
//                             <div className="container">
//                                 <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
//                                     <div className="slider-text-inner">
//                                         <div className="desc">
//                                             <span className="price">{item.price}</span>
//                                             <h2>{item.title}</h2>
//                                             <p>{item.description}</p>
//                                             <p>
//                                                 <a
//                                                     href="single.html"
//                                                     className="btn btn-primary btn-outline btn-lg"
//                                                 >
//                                                     Purchase Now
//                                                 </a>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </aside>
//     );
// }
//  export default HeroSection;
//
import React, { useState, useEffect } from "react";


function HeroSection() {
    const sliders = [
        { title: "MAGIC SLIDER", url: "/imges/slider/slider1.jpeg", price: "$800" },
        { title: "MAGIC SLIDER", url: "/imges/slider/slider2.jpeg", price: "$900" },
        { title: "MAGIC SLIDER", url: "/imges/slider/slider3.jpeg", price: "$1000" }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sliders.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [sliders.length]);

    return (
        <aside id="fh5co-hero" className="hero-slider">
            {sliders.map((item, i) => (
                <div
                    key={i}
                    className={`slide ${activeIndex === i ? "active" : ""}`}
                    style={{ backgroundImage: `url(${item.url})`, height: "100vh" }}
                >
                    <div className="overlay-gradient"></div>
                    <div className="containers">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 slider-text">
                            <div className="slider-text-inner">
                                <div className={`desc ${activeIndex === i ? "fadeInUp" : ""}`}>
                                    <span className="price">{item.price}</span>
                                    <h2>{item.title}</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia...
                                    </p>
                                    <p>
                                        <a
                                            href="single.html"
                                            className="btn btn-primary btn-outline btn-lg"
                                        >
                                            Purchase Now
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </aside>
    );
}

export default HeroSection;