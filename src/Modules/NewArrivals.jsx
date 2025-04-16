import React from 'react'
import data from '../Data'
import Card from './Card'
import './NewArrivals.module.css'

function NewArrivals() {

  const getRandomItems = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const allProducts = data.tops.concat(data.bottoms) //[...data.tops, ...data.bottoms]
  const randomProducts = getRandomItems(allProducts,10)

  return (
    <div className='product-template block'>
        <h5>Only the best</h5>
        <h2>New Arrivals</h2>
        <div>
          {randomProducts.map((x)=>{
            return(
              <Card img={x.img} price={x.price} name={x.name} id={x.id} description={x.description} details={x.details}/>
            )
          })}
        </div>
    </div>
  )
}

export default NewArrivals