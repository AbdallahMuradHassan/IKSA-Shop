import { useState } from "react";

function HeroSection() {
    const sliders = [
        {
            title: "MAGIC SLIDER",
            type: "FLOWER",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            url: "/imges/slider/slider1.jpeg",
        },
        {
            title: "MAGIC SLIDER",
            type: "FLOWER",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            url: "/imges/slider/slider2.jpeg",
        },
        {
            title: "MAGIC SLIDER",
            type: "FLOWER",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            url: "/imges/slider/slider3.jpeg",
        },
    ];

    const [index, setIndex] = useState(0);

    const next = () =>
        setIndex((prev) => (prev + 1) % sliders.length);

    const prev = () =>
        setIndex((prev) => (prev - 1 + sliders.length) % sliders.length);

    const current = sliders[index];

    return (
        <section className="slider-section">
            <div className="slider">
                <div className="list">
                    <div className="item">
                        <img src={current.url} alt={current.title} />

                        <div className="content">
                            <div className="title">{current.title}</div>
                            <div className="type">{current.type}</div>
                            <div className="description">{current.description}</div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="thumbnail">
                    {sliders.map((item, i) => (
                        <div
                            key={i}
                            className={`item ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        >
                            <img src={item.url} alt={item.title} />
                        </div>
                    ))}
                </div>

                <div className="nextPrevArrows">
                    <button onClick={prev}>{'<'}</button>
                    <button onClick={next}>{'>'}</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
