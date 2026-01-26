export default function ItemCard({ product, onRemove, onSelect, pricePls, priceMinus }) {
    return (
        <div key={product.id}>
            Name : {product.name} , Category : {product.category} , Price : ${product.price} , IsAvailable : {product.inStock ? "Yes" : "No"}
            <div className="DivBtn ">
                <button className="detBtn" onClick={() => onRemove(product.id)}>Delete</button>
                <button className="editBtn" onClick={() => onSelect(product.id)}>Edit</button>
                <button className="plus" onClick={() => pricePls(product.id)}>+</button>
                <button className="minus" onClick={() => priceMinus(product.id)}>-</button>
            </div>
        </div>
    );
}
