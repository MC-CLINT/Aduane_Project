import React from 'react'
import './navbar.css'
import { images } from '../../assets/assets'

const navbar = () => {
  return (
    <div className='navbar'>
            <img src={images.logo} alt="" className='logo'/>
                  <ul className="navbar-menu">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Track Order</li>
                    <li>Contact Us</li>
                  </ul>

    <div className="navbar-right">
            <img src={images.search_icon} className='search-icon' alt="" />
            <div className="other-side">
            <img src={images.basket_icon} className='basket-icon' alt="" />
            <div className="basket-count"></div>
            </div>
            
            <button>Sign In</button>
    </div>

    </div>
  )
}

export default navbar