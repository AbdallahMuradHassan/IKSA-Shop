function Card({ products }) {
    let x = 0;

    return (
        <>
            <div className="wrapper">
                {products.map((product) => (

                    <div className="single-card" key={x}>
                        <div className="img-area">
                            <img
                                src={`/assets/imges/prodects/${product.name}s/${product.name}1.jpeg`}
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
                            <h3>{product.name}</h3>
                            <h5>Category Name: {product.name}</h5>
                            <p>{product.dicrption}</p>
                            <br />
                            <p className="price">
                                Price: {product.price} JOD
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}

export default Card;
