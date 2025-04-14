import React from 'react'
import Card from '../Resources/Card'
import data from '../Resources/Data'

function Bottoms() {
  return (
    <div className='product-template'>
      <div>
        <h2>Bottoms</h2>
      </div>
      <div>
        {data.bottoms.map((x)=>{
          return(
            <Card img={x.img} price={x.price} name={x.name} id={x.id}/>
          )
        })}
      </div>
    </div>
    
  )
}

export default Bottoms