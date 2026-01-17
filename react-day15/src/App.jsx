import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './bootstrap-css-floder/bootstrap.min.css'

//import './App.css'
import './header.css'
import './footer.css'
import './style.css'

import './Header'
import Header from './Header'
import Footer from './Footers'
function App() {
  const [count, setCount] = useState(0);

  return (

    <>
      <Header />
      <Footer />
    </>

  )

}

export default App
