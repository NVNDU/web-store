import React from 'react'
import ProductCard from './ProductCard'

function Products() {
  return (
    <div className='products-container'>
        <h2>Products</h2>
        <ProductCard productName="Bras" discription=""/>
        <ProductCard productName="Panties" discription=""/>
        <ProductCard productName="Linegerie" discription=""/>
        <ProductCard productName="Sleep" discription=""/>
        <ProductCard productName="Spport & Lounge" discription=""/>
        <ProductCard productName="Swim" discription=""/>
        <ProductCard productName="Beauty" discription=""/>
        <ProductCard productName="Accessories" discription=""/>
    </div>
  )
}

export default Products