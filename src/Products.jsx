import React from 'react'
import { Link } from 'react-router-dom'


function Products() {
  return (
    <div className='products-container'>
        <h2>Products</h2>
        <ul>
          <li><Link to="/tops">Tops</Link></li>
          <li><Link to="/bottoms">Bottoms</Link></li>
          <li><Link to="/sale">Sale</Link></li>
        </ul>
    </div>
  )
}

export default Products