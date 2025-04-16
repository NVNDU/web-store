import React from 'react'
import Card from '../Modules/Card'
import data from '../Data'
import NavBar from '../Modules/NavBar'

function Bottoms() {
  return (
    <>
      <NavBar/>
      <div className='product-template'>
        <div>
          <h2>Bottoms</h2>
        </div>
        <div>
          {data.bottoms.map((x)=>{
            return(
              <Card img={x.img} price={x.price} name={x.name} id={x.id}  description={x.description} details={x.details}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Bottoms