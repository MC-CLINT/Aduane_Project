import React from 'react'
import './menu.css'
import { menu_items } from '../../assets/assets'

const menu = ({category, setCategory}) => {

  return (
    <div className='menu' id='menu'>
        <h2>Explore Ghana's Culinary Treasures</h2>
        <p className='menu-text"'> Savor the authentic flavors of Ghana with dishes that celebrate our rich culinary heritage. 
            Let every bite take you on a journey through tradition and taste.</p>
        <div className='menu-container'>
            {menu_items.map((item, index) => (
                <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='menu-item' key={index}>
                    <img className='menu-image' src={item.menu_image} alt={item.menu_name} />
                    <h5 className={category===item.menu_name?"active":" "}>{item.menu_name}</h5>
                </div>
            ))}
            
        </div>
        <hr />
    </div>
  )
}

export default menu