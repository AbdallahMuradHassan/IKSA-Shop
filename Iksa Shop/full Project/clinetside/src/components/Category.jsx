function Category() {
    const cards = [
        "/imges/slider/slider1.jpeg"
    ];

    // Duplicate for infinite scroll effect
    const duplicatedCards = [...cards];

    const handleViewDetails = () => {
        alert("View Details Clicked");
    };

    return (

        <section className=".slider-section">
            <div className="mid">
                our category

            </div>
            <div className="wrapper img-box track">

                {duplicatedCards.map((img, index) => (
                    <div key={index}>
                        <div className="single-card single-cards" >
                            <img className="img-Cards" src={`/imges/slider/slider${index}.jpeg`} alt="category" />
                            <div className="overlay" >
                                <button
                                    className="view-details"
                                    onClick={handleViewDetails}
                                >
                                    View Details
                                </button>
                            </div></div>  </div>
                ))}


            </div>
        </section>
    );
}

export default Category;
