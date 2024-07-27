import React from 'react'
import Button from 'react-bootstrap/Button';


function Card(props) {
  return (
    <div className='card-container'>
        <img src={props.img} alt='product_1.jpg'/>
        <span className='price-tag'>
            <p>LKR {props.price}</p>
            <Button variant="outline-primary">
                <i class="bi bi-bag-heart"/>
                &nbsp;Buy Now
            </Button>
        </span>
    </div>
  )
}

export default Card