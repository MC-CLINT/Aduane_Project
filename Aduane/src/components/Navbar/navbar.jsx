import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { images } from '../../assets/assets'

const navbar = () => {

  const [menu, setMenu] = useState('menu')


  return (
    <div className='navbar'>
            <img src={images.logo} alt="" className='logo'/>
                  <ul className="navbar-menu">
                    <li className={menu==="Home" ? "active" : ""} onClick={() => setMenu("Home")}> Home </li>
                    <li className={menu==="Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</li>
                    <li className={menu==="Track-Order" ? "active" : ""} onClick={() => setMenu("Track-Order")}>Track Order</li>
                    <li className={menu==="Contact-Us" ? "active" : ""} onClick={() => setMenu("Contact-Us")}>Contact Us</li>
                  </ul>

    <div className="navbar-right">
            <img src={images.search_icon} className='search-icon' alt="" />
            <div className="navbar-basket">
            <img src={images.basket_icon} className='basket-icon' alt="" />
            <div className="basket-count"></div>
            </div>
            
            <button>Sign In</button>
    </div>

    </div>
  )
}

export default navbar