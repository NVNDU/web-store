import React from 'react'
import pic01 from './Assets/new-arrivals/product_1.jpg'
import pic02 from './Assets/new-arrivals/product_2.jpg'
import pic03 from './Assets/new-arrivals/product_3.jpg'
import pic04 from './Assets/new-arrivals/product_4.jpg'
import pic05 from './Assets/tops/product_t_5.jpg'
import pic06 from './Assets/tops/product_t_6.jpg'
import pic07 from './Assets/bottoms/product_b_1.jpg'
import pic08 from './Assets/bottoms/product_b_2.jpg'
import pic09 from './Assets/bottoms/product_b_3.jpg'
import pic10 from './Assets/bottoms/product_b_4.jpg'
import Card from './Card'

function NewArrivals() {
  return (
    <div className='product-template'>
        <h5>Only the best</h5>
        <h2>New Arrivals</h2>
        <div>
            <Card img={pic01} price={2700}/>
            <Card img={pic02} price={3000}/>
            <Card img={pic03} price={3500}/>
            <Card img={pic04} price={3600}/>
            <Card img={pic05} price={3400}/>
            <Card img={pic06} price={2100}/>
            <Card img={pic07} price={2700}/>
            <Card img={pic08} price={3000}/>
            <Card img={pic09} price={3500}/>
            <Card img={pic10} price={3600}/>
        </div>
    </div>
  )
}

export default NewArrivals