import React, { useState } from 'react'
import './DetailsPage.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import Alert from 'react-bootstrap/Alert';
import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import NavBar from '../Modules/NavBar'

function DetailsPage() {
  const location = useLocation();
  const {price, name, image, id, description, details} = location.state || {};
  const { addItem,updateItemQuantity } = useCart();

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [quantity, setQuantity] = useState(1);

  const radios = [
    { name: 'S', value: '1' },
    { name: 'M', value: '2' },
    { name: 'L', value: '3' },
    { name: 'XL', value: '4' },
  ];

 return (
  <>
    <NavBar/>
    <div className='main-column container col-lg-12'>
      <div class="col-lg-6 preview-column">
        <img src={image} alt='loading...'/>
      </div>
      <div class="col-lg-6 detail-column">
        <h1>{name}</h1>
        <p id='price'>LKR {price}</p>
        <p id='desc'>{description}</p>
        <ul id='list'>
        {details?.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
        </ul>
        <p id='p-size'>Size:</p>
       
        <ButtonGroup id='btn-size'>
        {radios.map((radio, idx) => (
          <ToggleButton
            className='toggle-btn'
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant= 'outline-dark'
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <p id='p-qty'>Qty:</p>
      <input type="number" 
      id="qty" 
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}/>
      <Button variant="dark" id='btn-cart' onClick={()=>
        {
          const selectedSize = radios.find(r => r.value === radioValue)?.name;

          const productWithSize = {
            ...location.state,
            id: `${location.state.id}-${selectedSize}`, // makes each size unique
            size: selectedSize,
            qty: quantity
          };
          addItem(productWithSize);
        }
      }>
            <i class="bi bi-bag-heart"/>
            &nbsp;Add to Cart
      </Button>
      </div>
    </div>
  </>
    
  )
}

export default DetailsPage