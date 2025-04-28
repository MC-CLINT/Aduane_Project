import React from 'react'
import './home.css'
import Header from '../../components/Header/header'
import Menu from '../../components/Menu/menu'
import { useState } from 'react'

const home = () => {

const [category, setCategory] = useState('All')
  return (
    <div>

        <Header/>
        < Menu  category={category} setCategory={setCategory}/>

    </div>
  )
}

export default home