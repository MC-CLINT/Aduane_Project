import React from 'react'
import Navbar from './components/Navbar/navbar'


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