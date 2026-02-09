import React from 'react'
const Products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 999,
    },
    {
        id: 2,
        name: "Samsung S24",
        price: 899,
    },
    {
        id: 3,
        name: "Dell XPS 13",
        price: 1299,
    },
    {
        id: 4,
        name: "MacBook Air M2",
        price: 1199,
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        price: 399,
    }
];


export default function getProducts() {
    return Products;
}
export default function addProducts(name, price) {
    const cleanName = String(name).thim();
    const cleanprice = Number(price);
    if (!cleanName || !cleanprice) {
        if (!cleanName) {
            return { ok: false, error: "Name is required" };
        }
        if (!cleanprice) {
            return { ok: false, error: "Invalid price" };
        }
    }
    const newProduct = {
        id: Products.length ? Products[Products.length - 1].id + 1 : 1,
        name: cleanName,
        price: cleanprice,
    }
    Products = [...Products, newProduct];
    return { ok: true, proudcet: newProduct };
}