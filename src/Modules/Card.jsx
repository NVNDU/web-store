import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import './Card.css'

function Card(props) {
  const { addItem } = useCart();

  return (
    <div className='card-container'>
        <Link to='/detailsPage' state={{price: props.price, name: props.name, image: props.img, id:props.id}}>
          <img src={props.img} alt='product_1.jpg'/>
        </Link>
        <span className='price-tag'>
            <h4>{props.name}</h4>
            <p>LKR {props.price}</p>
            {/* <p>id  {props.id} </p> */}
            <div>
              <Button variant="outline-primary" onClick={()=>addItem(props)}>
                  <i class="bi bi-bag-heart"/>
                  &nbsp;Add to Cart
              </Button>
            </div>
        </span>
    </div>
  )
}

export default Card