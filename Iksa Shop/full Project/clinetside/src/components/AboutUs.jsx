
import React, { useEffect, useState, useRef } from "react";


function AboutUs() {
    const aboutUsArry = [{ title: "ESTABLISHEMNT", header: "On 2018", body: "our story started with a small workshop on Dead Sea road - Addasihay Village 20 Km from Amman, as Bait Iksa Gardens a small business specialized in handmade outdoor-furniture and landscaping. On 2023 we saw it was time to have a showroom in the heart of Amman to be closer to our costumers; Thus Iksa shop was established", iamgeURL: "/imges/SOCAIL SOLIDARITY.jpeg" },
    { title: "MISSION & VISION", header: "high quality handmade", body: "Deliver high quality handmade furniture and gifts with a reasonable price to locals and tourists, by doing so we'll spread the good traditional taste, and help crafters by increasing their income", iamgeURL: "/imges/MISSION & VISION.jpeg" },
    { title: "SOCAIL SOLIDARITY", header: "crafters", body: "As it was hard on us to reach costumers while we had a workshop far away from the city, we know it's even harder for crafters working from home, therefore we saved a space for real talented crafters to showcase and sell their products, and support them in all possible means.", iamgeURL: "/imges/SOCAIL SOLIDARITY.jpeg" },
    ]
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

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
            { threshold: 0.01 }
        );

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);
    return (
        <section>
            <div className="responsive-container-block bigContainer">
                {aboutUsArry.map((item, index) => (
                    <div key={index} ref={domRef} className={`responsive-container-block Container animated ${index % 2 === 0 ? "bottomContainer fadeInLeft" : "fadeInRight"} `}>
                        <img className="mainImg" src={`${item.iamgeURL}`} />
                        <div className="allText aboveText">
                            <p className="text-blk headingText">
                                {item.title}
                            </p>
                            <p className="text-blk subHeadingText">
                                {item.header}
                            </p>
                            <p className="text-blk description">
                                {item.body}
                            </p>
                        </div>
                    </div>))}
            </div>
        </section>
    )
}

export default AboutUs