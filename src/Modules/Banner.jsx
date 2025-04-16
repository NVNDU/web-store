import React from 'react'
import banner01 from '../Assets/banner/banner_01.png'
import banner02 from '../Assets/banner/Gray and Black Minimalist Fashion Style Banner.png'
import banner03 from '../Assets/banner/blouse.png'
import banner04 from '../Assets/banner/pants_418125.png'
import banner05 from '../Assets/banner/sale.png'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='banner-container block'>
        <img src={banner02} alt='banner_01' className='d-block w-90 darkren'/>
        <div className="banner-text d-block w-100 h-100 col-lg-12">
          <h2>Products</h2>
          <div className='cat col-lg-3 ul'>
            <img src={banner03} alt="tops"/>
            <div className='link'>
              <Link to="/tops" class="text-decoration-none text-uppercase fs-2 fw-bold text-light mt-50" className='link'>Tops</Link>
            </div> 
          </div>
          <div className='cat col-lg-3 ul'>
            <img src={banner04} alt="tops" />
            <div className='link'>
            <Link to="/bottoms" class="text-decoration-none text-uppercase fs-2 fw-bold text-light mt-50" className='link'>Bottoms</Link>
            </div>
          </div>
          <div className='cat col-lg-3 ul'>
            <img src={banner05} alt="tops"/>
            <div className='link'>
            <Link to="/sale" class="text-decoration-none text-uppercase fs-2 fw-bold text-light mt-50" className='link'>Sale</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner