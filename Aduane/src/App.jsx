import React from 'react'
import Navbar from './components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


const App = () => {
  return (
    <div className='myapp'>

    < Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/placeorder' element={<PlaceOrder />} />
    </Routes>
    

    </div>
  )
}

export default App