import useInView from "./useInViews";
import Card from "./Card";

export default function AnimatedCard({ product, effect = "fadeInUp" }) {
    const [ref, isVisible] = useInView({ threshold: 0.15 });

    return (
        <div
            ref={ref}
            className={`animate-box ${isVisible ? effect : ""}`}
            data-animate-effect={effect}
        >
            <Card product={product} />
        </div>
    );
}
