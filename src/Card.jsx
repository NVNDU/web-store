import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className='card-container'>
        <Link to='/detailsPage'>
          <img src={props.img} alt='product_1.jpg'/>
        </Link>
        <span className='price-tag'>
            <p>LKR {props.price}</p>
            <a href='https://wa.me/message/2FFAKDWGT6LKI1'>
            <Button variant="outline-primary">
                <i class="bi bi-bag-heart"/>
                &nbsp;Buy Now
            </Button>
            </a>
        </span>
    </div>
  )
}

export default Card