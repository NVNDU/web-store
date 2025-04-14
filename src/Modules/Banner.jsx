import React from 'react'
import banner01 from './Assets/banner/banner_01.png'
import banner02 from './Assets/banner/Gray and Black Minimalist Fashion Style Banner.png'
import { Link } from 'react-router-dom'
import './Banner.module.css'

function Banner() {
  return (
    <div className='banner-container'>
        <img src={banner02} alt='banner_01' className='d-block w-100'/>
        <h2>Products</h2>
                <ul>
                  <li><Link to="/tops">Tops</Link></li>
                  <li><Link to="/bottoms">Bottoms</Link></li>
                  <li><Link to="/sale">Sale</Link></li>
                </ul>
    </div>
  )
}

export default Banner