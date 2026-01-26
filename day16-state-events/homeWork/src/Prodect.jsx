import { useState } from 'react'


//import './App.css'
import './assets/css/header.css'
import './assets/css/footer.css'
import './assets/css/card.css'
import './assets/css/style.css'
import './assets/css/bootstrap-css-floder/bootstrap.min.css'
import './components/includs/Header'
import Header from './components/includs/Header'
import Footer from './components/includs/Footers'
import Card from './components/includs/Card'

function Products() {

    const products = [
        { name: "char", dicrption: "description one", price: 5 },
        { name: "char", dicrption: "description two", price: 10 },
        { name: "table", dicrption: "description three", price: 20 },
    ];
    return (
        <>
            <Header />
            <Card products={products} />
            <Footer />
        </>
    );
}

export default Products;

// import { useState } from "react";
// import ItemCard from "./components/task-manager/ItemCard";
// import Controls from "./components/task-manager/Controls";
// import "./assets/css/App.css";

// function Products() {
//     const initialItem = {
//         type: "person", // change to "product" to test product
//         name: "Abdallah Hassan",
//         age: 22,
//         major: "Computer Science",
//         price: 500,
//         specs: "16GB RAM, 512GB SSD"
//     };

//     const [item, setItem] = useState(initialItem);

//     const increaseValue = () => {
//         if (item.type === "person") {
//             setItem({ ...item, age: item.age + 1 });
//         } else {
//             setItem({ ...item, price: item.price + 50 });
//         }
//     };

//     const decreaseValue = () => {
//         if (item.type === "person") {
//             setItem({ ...item, age: item.age - 1 });
//         } else {
//             setItem({ ...item, price: item.price - 50 });
//         }
//     };

//     const changeName = () => {
//         const newName = prompt("Enter new name/title:");
//         if (newName) {
//             setItem({ ...item, name: newName });
//         }
//     };

//     const resetItem = () => {
//         setItem(initialItem);
//     };

//     return (
//         <div className="app">
//             <ItemCard item={item} />
//             <Controls
//                 onIncrease={increaseValue}
//                 onDecrease={decreaseValue}
//                 onChangeName={changeName}
//                 onReset={resetItem}
//             />
//         </div>
//     );
// }

// export default Products;
