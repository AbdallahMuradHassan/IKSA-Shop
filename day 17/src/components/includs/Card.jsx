function Card({ products }) {
    return (
        <div className="wrapper">
            {products.map((product) => (
                <div className="single-card" key={product.id}>
                    <div className="img-area">
                        <img
                            src={product.images}
                            alt={product.name}
                        />
                        <div className="overlay">
                            <button
                                className="view-details"
                                onClick={() => window.location.href = "#"}
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
            ))}
        </div>
    );
}

export default Card;
