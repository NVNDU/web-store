import React from 'react'
import Button from 'react-bootstrap/Button';

function ProductCard(props) {
  return (
    <div className='pro-card'>
        <img src="https://via.placeholder.com/150" className='pro-card-img' alt="image"/>
        <h3>{props.productName}</h3>
        <ul>
            <li>name:  </li>
            <li>age:  </li>
            <li>city: </li>
        </ul>
        <Button variant="outline-dark">More Details</Button>
    </div>
  )
}

export default ProductCard