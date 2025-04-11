import React from 'react'
import Card from '../Card'
import pic01 from '../Assets/tops/product_t_1.jpg'
import pic02 from '../Assets/tops/product_t_2.jpg'
import pic03 from '../Assets/tops/product_t_3.jpg'
import pic04 from '../Assets/tops/product_t_4.jpg'
import pic05 from '../Assets/tops/product_t_5.jpg'
import pic06 from '../Assets/tops/product_t_6.jpg'

function Tops() {
  return (
    <div className='product-template'>
      <div>
        <h2>Tops</h2>
      </div>
      <div>
        <Card img={pic01} price={2700}/>
        <Card img={pic02} price={3000}/>
        <Card img={pic03} price={3500}/>
        <Card img={pic04} price={3600}/>
        <Card img={pic05} price={3600}/>
        <Card img={pic06} price={3600}/>
      </div>
    </div>
   
    
  )
}

export default Tops