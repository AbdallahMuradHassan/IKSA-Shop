// lib/productsStore.js
let Products = [
    { id: 1, name: "iPhone 15", price: 999 },
    { id: 2, name: "Samsung S24", price: 899 },
    { id: 3, name: "Dell XPS 13", price: 1299 },
    { id: 4, name: "MacBook Air M2", price: 1199 },
    { id: 5, name: "Sony WH-1000XM5", price: 399 },
];

// Named export for getting products
export function getProducts() {
    return Products;
}
