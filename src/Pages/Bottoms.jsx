import React from 'react'
import Card from '../Card'
import pic01 from '../Assets/bottoms/product_b_1.jpg'
import pic02 from '../Assets/bottoms/product_b_2.jpg'
import pic03 from '../Assets/bottoms/product_b_3.jpg'
import pic04 from '../Assets/bottoms/product_b_4.jpg'

function Bottoms() {
  return (
    <div className='product-template'>
      <div>
        <h2>Bottoms</h2>
      </div>
      <div>
        <Card img={pic01} price={2700}/>
        <Card img={pic02} price={3000}/>
        <Card img={pic03} price={3500}/>
        <Card img={pic04} price={3600}/>
      </div>
    </div>
    
  )
}

export default Bottoms