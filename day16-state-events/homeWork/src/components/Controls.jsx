import React, { useState, useRef } from "react";
import ProductList from "./ProductList";
import ItemCard from "./ItemCard";

function Controls() {
  const [products, setProducts] = useState(ProductList);
  const [singleProduct, setSingleProduct] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(false);
  const [error, setError] = useState("");
  const [IdProduct, setId] = useState("");
  const [updateStatus, setStatus] = useState(false);

  const nextId = useRef(
    products.length
      ? Math.max(...products.map(p => p.id)) + 1
      : 1
  );
  function Clear(singleProduct) {
    setCategory(singleProduct.category);
    setInStock(singleProduct.inStock);
    setName(singleProduct.name);
    setPrice(singleProduct.price);
    setId(singleProduct.id);
    setStatus(true);
  }
  function IncreasePrice(id) {

    setProducts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, price: p.price + 1 }
          : p
      )
    );
  }
  function DecreasePrice(id) {
    setProducts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, price: p.price - 1 }
          : p
      )
    );
  }

  function checkIfInputIsNotNull(input) {
    if (!input || input.trim() === "") {
      setError("Input cannot be empty");
      return false;
    }
    return true;
  }


  function addProduct(e) {
    e.preventDefault();

    if (
      !checkIfInputIsNotNull(name) ||
      !checkIfInputIsNotNull(category)
    ) {
      return;
    }

    const newProduct = {
      id: nextId.current++,
      name,
      price: Number(price),
      category,
      inStock
    };

    setProducts(prev => [...prev, newProduct]);
    setError(""); setName("");
    setPrice("");
    setCategory("");
    setInStock(false);
  }

  function removeProduct(id) {
    setProducts(prev => prev.filter(p => p.id !== id));

  }


  function getSingleProduct(id) {
    const singleProduct = products.find(p => p.id === id);
    if (singleProduct) {
      setCategory(singleProduct.category);
      setInStock(singleProduct.inStock);
      setName(singleProduct.name);
      setPrice(singleProduct.price);
      setId(singleProduct.id);
      setStatus(true);
      setSingleProduct(singleProduct);
    }
  }

  function updateProduct(id) {
    setProducts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, name, price: Number(price), category, inStock }
          : p
      )
    );
    setStatus(false);
    setError(""); setName("");
    setPrice("");
    setCategory("");
    setInStock(false);
    setSingleProduct(null);
  }

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        updateStatus ? updateProduct(IdProduct) : addProduct(e);
      }}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          style={{ border: error ? "2px solid red" : "" }}
        />

        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Price"
        />

        <input
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Category"
        />

        <label>
          <input
            type="checkbox"
            checked={inStock}
            onChange={e => setInStock(e.target.checked)}
          />
          In Stock
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button>{updateStatus ? "Update" : "Add Product"}</button>
      </form>
      <button style={{ display: !updateStatus ? "none" : "block" }} onClick={() => Clear(singleProduct)} >Clear</button>
      <button style={{ display: !updateStatus ? "none" : "block" }} onClick={() => setStatus(false)} >Back</button>

      <ul style={{ display: updateStatus ? "none" : "block" }}>
        {products.map(product => (
          <li key={product.id}>
            <ItemCard
              product={product}
              onRemove={removeProduct}
              onSelect={getSingleProduct}
              pricePls={IncreasePrice}
              priceMinus={DecreasePrice}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Controls;
