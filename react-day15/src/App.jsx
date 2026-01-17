import { useState } from 'react'


//import './App.css'
import './assets/css/header.css'
import './assets/css/footer.css'
import './assets/css/card.css'
import './assets/css/style.css'
import './assets/css/bootstrap-css-floder/bootstrap.min.css'
import './Header'
import Header from './Header'
import Footer from './Footers'
import Card from './Card'

function App() {

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

export default App;

