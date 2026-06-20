import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home_page from './Landing_page/Home/Home_Page'
import SignUp_page from './Landing_page/signUp/SignUp_page'
import About_page from './Landing_page/about/About_page'
import Product_page from './Landing_page/products/Product_page'
import Pricing_page from './Landing_page/pricing/Pricing_page'
import Support_page from './Landing_page/support/Support_page'
import Navbar from './Landing_page/Navbar'
import Footer from './Landing_page/Footer'
import NoPageFount from './Landing_page/NoPageFound'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home_page/>}/>
      <Route path='/signUp' element={<SignUp_page/>}/>
      <Route path='/about' element={<About_page/>}/>
      <Route path='/product' element={<Product_page/>}/>
      <Route path='/pricing' element={<Pricing_page/>}/>
      <Route path='/support' element={<Support_page/>}/>
      <Route path='*' element={<NoPageFount/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
