import React from 'react'
import pic01 from './Assets/new-arrivals/product_1.jpg'
import pic02 from './Assets/new-arrivals/product_2.jpg'
import pic03 from './Assets/new-arrivals/product_3.jpg'
import pic04 from './Assets/new-arrivals/product_4.jpg'
import Card from './Card'

function NewArrivals() {
  return (
    <div className='newarrival-container'>
        <h5>ONLY THE BEST</h5>
        <h2>New Arrivals</h2>
        <div>
            <Card img={pic01} price={2700}/>
            <Card img={pic02} price={3000}/>
            <Card img={pic03} price={3500}/>
            <Card img={pic04} price={3600}/>
        </div>
    </div>
  )
}

export default NewArrivals