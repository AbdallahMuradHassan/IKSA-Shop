"use client";
function Category() {
    const cards = [
        "/imges/slider/slider1.jpeg",
        "/imges/slider/slider2.jpeg",
        "/imges/slider/slider3.jpeg",
        "/imges/slider/slider4.jpeg",

    ];

    // Duplicate for infinite scroll effect
    const duplicatedCards = [...cards, ...cards];

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
                            <img className="img-Cards" src={img} alt="category" />
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
