"use client";

function Card({ product }) {

    return (<>

        <div className="single-card" >
            <div className="img-area">
                <img
                    src={product.images}
                    alt={product.name}
                />
                <div className="overlay">
                    <button
                        className="view-details"
                        onClick={() => window.location.href = `../singleCard/${product.id}`}
                    >
                        View Details
                    </button>
                </div>
            </div>

            <div className="info">
                <h3>{product.title}</h3>
                <h5>Category Name: {product.category}</h5>
                <p>{product.description}</p>
                <p className="price">Price: {product.price} JOD</p>
            </div>
        </div>
    </>);
}

export default Card;
