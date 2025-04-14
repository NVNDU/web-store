import React from 'react'
import '../DetailsPage.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useCart } from 'react-use-cart'

function DetailsPage(props) {
  const location = useLocation();
  const {price, name, image, id} = location.state || {};
  const { addItem } = useCart();

 return (
    <div className='main-column'>
      <div className="preview-column">
        <img src={image} alt='loading...'/>
      </div>
      <div className="detail-column">
        <h1>{name}</h1>
        <p>LKR {price}</p>
        <p>id  {id}</p>
        <p>Size:</p>
        <select name="size" id="size">
          <option value="small">S</option>
          <option value="small">L</option>
          <option value="small">XL</option>
          <option value="small">XXL</option>
        </select>
        <input type="number" id="qty" defaultValue={1}/>
        <Link to='/cart'>
        <button>add to cart</button> 
        </Link>
      </div>
    </div>
  )
}

export default DetailsPage