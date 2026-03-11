// import { useState } from "react";

// const initialItems = [
//     {
//         id: 1,
//         name: "Rose Petals Divine",
//         category: "Perfumes",
//         price: 120,
//         qty: 1,
//         image: "https://pagedone.io/asset/uploads/1701162850.png",
//     },
//     {
//         id: 2,
//         name: "Musk Rose Cooper",
//         category: "Perfumes",
//         price: 120,
//         qty: 2,
//         image: "https://pagedone.io/asset/uploads/1701162866.png",
//     },
//     {
//         id: 3,
//         name: "Dusk Dark Hue",
//         category: "Perfumes",
//         price: 120,
//         qty: 1,
//         image: "https://pagedone.io/asset/uploads/1701162880.png",
//     },
// ];

// export default function ShoppingCart() {
//     const [items, setItems] = useState(initialItems);

//     const updateQty = (id, type) => {
//         setItems((prev) =>
//             prev.map((item) =>
//                 item.id === id
//                     ? {
//                         ...item,
//                         qty:
//                             type === "inc"
//                                 ? item.qty + 1
//                                 : Math.max(1, item.qty - 1),
//                     }
//                     : item
//             )
//         );
//     };

//     const subtotal = items.reduce(
//         (sum, item) => sum + item.price * item.qty,
//         0
//     );

//     const shipping = 5;
//     const total = subtotal + shipping;

//     return (
//         <section className="relative z-10 bg-white">
//             <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-12 gap-8">

//                 {/* LEFT – CART */}
//                 <div className="col-span-12 xl:col-span-8">
//                     <div className="flex justify-between border-b pb-6">
//                         <h2 className="text-3xl font-bold">Shopping Cart</h2>
//                         <span className="text-gray-500">
//                             {items.length} Items
//                         </span>
//                     </div>

//                     {items.map((item) => (
//                         <div
//                             key={item.id}
//                             className="flex gap-6 py-6 border-b items-center"
//                         >
//                             <img
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="w-28 rounded-xl"
//                             />

//                             <div className="flex-1 grid grid-cols-4 gap-4 items-center">
//                                 <div className="col-span-2">
//                                     <h4 className="font-semibold">{item.name}</h4>
//                                     <p className="text-gray-500">{item.category}</p>
//                                     <p className="text-indigo-600 font-medium">
//                                         ${item.price.toFixed(2)}
//                                     </p>
//                                 </div>

//                                 {/* Quantity */}
//                                 <div className="flex items-center justify-center">
//                                     <button
//                                         onClick={() => updateQty(item.id, "dec")}
//                                         className="px-4 py-2 border rounded-l-lg"
//                                     >
//                                         −
//                                     </button>
//                                     <span className="px-6 border-y font-semibold">
//                                         {item.qty}
//                                     </span>
//                                     <button
//                                         onClick={() => updateQty(item.id, "inc")}
//                                         className="px-4 py-2 border rounded-r-lg"
//                                     >
//                                         +
//                                     </button>
//                                 </div>

//                                 {/* Total */}
//                                 <div className="text-right font-bold">
//                                     ${(item.price * item.qty).toFixed(2)}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* RIGHT – SUMMARY */}
//                 <div className="col-span-12 xl:col-span-4 bg-gray-50 rounded-xl p-8">
//                     <h3 className="text-2xl font-bold border-b pb-6">
//                         Order Summary
//                     </h3>

//                     <div className="space-y-4 mt-6">
//                         <div className="flex justify-between">
//                             <span>Items</span>
//                             <span>${subtotal.toFixed(2)}</span>
//                         </div>

//                         <div className="flex justify-between">
//                             <span>Shipping</span>
//                             <span>${shipping.toFixed(2)}</span>
//                         </div>

//                         <div className="flex justify-between text-xl font-bold pt-4 border-t">
//                             <span>Total</span>
//                             <span className="text-indigo-600">
//                                 ${total.toFixed(2)}
//                             </span>
//                         </div>

//                         <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
//                             Checkout
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// } 

import {
    FaTrash,
    FaHeart,
    FaMinus,
    FaPlus
} from "react-icons/fa";
const ShoppingCart = () => {
    const products = [
        {
            id: 1,
            name: "Latest N-5 Perfume",
            category: "Perfumes",
            price: 120.00,
            deliveryCharge: 15.00,
            imageUrl: "https://pagedone.io/asset/uploads/1701162850.png"
        },
        {
            id: 2,
            name: "Musk Rose Cooper",
            category: "Perfumes",
            price: 120.00,
            deliveryCharge: 15.00,
            imageUrl: "https://pagedone.io/asset/uploads/1701162850.png"
        }
    ];

    return (
        // <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        //     <div className="container py-5 h-100">
        //         <div className="row d-flex justify-content-center align-items-center h-100">
        //             <div className="col">
        //                 <div className="card">
        //                     <div className="card-body p-4">

        //                         <div className="row">

        //                             <div className="col-lg-7">
        //                                 <h5 className="mb-3">
        //                                     <a href="#!" className="text-body">
        //                                         <i className="fas fa-long-arrow-alt-left me-2"></i>
        //                                         Continue shopping
        //                                     </a>
        //                                 </h5>
        //                                 <hr />

        //                                 <div className="d-flex justify-content-between align-items-center mb-4">
        //                                     <div>
        //                                         <p className="mb-1">Shopping cart</p>
        //                                         <p className="mb-0">You have 4 items in your cart</p>
        //                                     </div>
        //                                     <div>
        //                                         <p className="mb-0">
        //                                             <span className="text-muted">Sort by:</span>{" "}
        //                                             <a href="#!" className="text-body">
        //                                                 price <i className="fas fa-angle-down mt-1"></i>
        //                                             </a>
        //                                         </p>
        //                                     </div>
        //                                 </div>

        //                                 {/* ITEM 1 */}
        //                                 <div className="card mb-3">
        //                                     <div className="card-body">
        //                                         <div className="d-flex justify-content-between">
        //                                             <div className="d-flex flex-row align-items-center">
        //                                                 <img
        //                                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
        //                                                     className="img-fluid rounded-3"
        //                                                     alt="Shopping item"
        //                                                     style={{ width: "65px" }}
        //                                                 />
        //                                                 <div className="ms-3">
        //                                                     <h5>Iphone 11 pro</h5>
        //                                                     <p className="small mb-0">256GB, Navy Blue</p>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="d-flex flex-row align-items-center">
        //                                                 <div style={{ width: "50px" }}>
        //                                                     <h5 className="fw-normal mb-0">2</h5>
        //                                                 </div>
        //                                                 <div style={{ width: "80px" }}>
        //                                                     <h5 className="mb-0">$900</h5>
        //                                                 </div>
        //                                                 <a href="#!" style={{ color: "#cecece" }}>
        //                                                     <i className="fas fa-trash-alt"></i>
        //                                                 </a>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 {/* ITEM 2 */}
        //                                 <div className="card mb-3">
        //                                     <div className="card-body">
        //                                         <div className="d-flex justify-content-between">
        //                                             <div className="d-flex flex-row align-items-center">
        //                                                 <img
        //                                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
        //                                                     className="img-fluid rounded-3"
        //                                                     alt="Shopping item"
        //                                                     style={{ width: "65px" }}
        //                                                 />
        //                                                 <div className="ms-3">
        //                                                     <h5>Samsung galaxy Note 10</h5>
        //                                                     <p className="small mb-0">256GB, Navy Blue</p>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="d-flex flex-row align-items-center">
        //                                                 <div style={{ width: "50px" }}>
        //                                                     <h5 className="fw-normal mb-0">2</h5>
        //                                                 </div>
        //                                                 <div style={{ width: "80px" }}>
        //                                                     <h5 className="mb-0">$900</h5>
        //                                                 </div>
        //                                                 <a href="#!" style={{ color: "#cecece" }}>
        //                                                     <i className="fas fa-trash-alt"></i>
        //                                                 </a>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 {/* ITEM 3 */}
        //                                 <div className="card mb-3">
        //                                     <div className="card-body">
        //                                         <div className="d-flex justify-content-between">
        //                                             <div className="d-flex flex-row align-items-center">
        //                                                 <img
        //                                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
        //                                                     className="img-fluid rounded-3"
        //                                                     alt="Shopping item"
        //                                                     style={{ width: "65px" }}
        //                                                 />
        //                                                 <div className="ms-3">
        //                                                     <h5>Canon EOS M50</h5>
        //                                                     <p className="small mb-0">Onyx Black</p>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="d-flex flex-row align-items-center">
        //                                                 <div style={{ width: "50px" }}>
        //                                                     <h5 className="fw-normal mb-0">1</h5>
        //                                                 </div>
        //                                                 <div style={{ width: "80px" }}>
        //                                                     <h5 className="mb-0">$1199</h5>
        //                                                 </div>
        //                                                 <a href="#!" style={{ color: "#cecece" }}>
        //                                                     <i className="fas fa-trash-alt"></i>
        //                                                 </a>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 {/* ITEM 4 */}
        //                                 <div className="card mb-3 mb-lg-0">
        //                                     <div className="card-body">
        //                                         <div className="d-flex justify-content-between">
        //                                             <div className="d-flex flex-row align-items-center">
        //                                                 <img
        //                                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
        //                                                     className="img-fluid rounded-3"
        //                                                     alt="Shopping item"
        //                                                     style={{ width: "65px" }}
        //                                                 />
        //                                                 <div className="ms-3">
        //                                                     <h5>MacBook Pro</h5>
        //                                                     <p className="small mb-0">1TB, Graphite</p>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="d-flex flex-row align-items-center">
        //                                                 <div style={{ width: "50px" }}>
        //                                                     <h5 className="fw-normal mb-0">1</h5>
        //                                                 </div>
        //                                                 <div style={{ width: "80px" }}>
        //                                                     <h5 className="mb-0">$1799</h5>
        //                                                 </div>
        //                                                 <a href="#!" style={{ color: "#cecece" }}>
        //                                                     <i className="fas fa-trash-alt"></i>
        //                                                 </a>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                             </div>

        //                             {/* RIGHT SIDE – PAYMENT */}
        //                             <div className="col-lg-5">
        //                                 <div className="card bg-primary text-white rounded-3">
        //                                     <div className="card-body">

        //                                         <div className="d-flex justify-content-between align-items-center mb-4">
        //                                             <h5 className="mb-0">Card details</h5>
        //                                             <img
        //                                                 src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        //                                                 className="img-fluid rounded-3"
        //                                                 style={{ width: "45px" }}
        //                                                 alt="Avatar"
        //                                             />
        //                                         </div>

        //                                         <p className="small mb-2">Card type</p>

        //                                         <form className="mt-4">
        //                                             <div className="form-outline form-white mb-4">
        //                                                 <input
        //                                                     type="text"
        //                                                     className="form-control form-control-lg"
        //                                                     size="17"
        //                                                     placeholder="Cardholder's Name"
        //                                                 />
        //                                             </div>

        //                                             <div className="form-outline form-white mb-4">
        //                                                 <input
        //                                                     type="text"
        //                                                     className="form-control form-control-lg"
        //                                                     size="17"
        //                                                     placeholder="1234 5678 9012 3457"
        //                                                     minLength={19}
        //                                                     maxLength={19}
        //                                                 />
        //                                             </div>

        //                                             <div className="row mb-4">
        //                                                 <div className="col-md-6">
        //                                                     <input
        //                                                         type="text"
        //                                                         className="form-control form-control-lg"
        //                                                         placeholder="MM/YYYY"
        //                                                         size="7"
        //                                                         minLength={7}
        //                                                         maxLength={7}
        //                                                     />
        //                                                 </div>
        //                                                 <div className="col-md-6">
        //                                                     <input
        //                                                         type="password"
        //                                                         className="form-control form-control-lg"
        //                                                         placeholder="•••"
        //                                                         minLength={3}
        //                                                         maxLength={3}
        //                                                     />
        //                                                 </div>
        //                                             </div>
        //                                         </form>

        //                                     </div>
        //                                 </div>
        //                             </div>

        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <CartItem />
    );
};

export default ShoppingCart;