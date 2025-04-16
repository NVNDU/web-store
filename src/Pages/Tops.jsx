import React from 'react'
import Card from '../Modules/Card'
import data from '../Data'
import NavBar from '../Modules/NavBar'

function Tops() {
  return (
    <>
      <NavBar/>
      <div className='product-template'>
        <div>
          <h2>Tops</h2>
        </div> 
        <div>
          {data.tops.map((x)=>{
            return(
              <Card img={x.img} price={x.price} name={x.name} id={x.id} description={x.description} details={x.details}/>
            )
          })}
        </div>
      </div>
    </>
    
   
    
  )
}

export default Tops