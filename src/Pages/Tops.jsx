import React from 'react'
import Card from '../Card'
import pic01 from '../Assets/tops/Linen Top  Blue.jpg'
import pic02 from '../Assets/tops/Lisa Shirt.jpg'
import pic03 from '../Assets/tops/Lounge Tunic  Black.jpg'
import pic04 from '../Assets/tops/Lounge Tunic  Blue.jpg'
import pic05 from '../Assets/tops/Lounge Tunic  Cream.jpg'
import pic06 from '../Assets/tops/Poplin Shirt.jpg'
import pic07 from '../Assets/tops/Sonia Skirt.jpg'
import pic08 from '../Assets/tops/Terra Cotta Studio Top.jpg'
import data from '../Data'
import NavBar from '../NavBar'

function Tops() {
  return (
    <>
    <NavBar/>
    <div className='product-template'>
      <div>
        <h2>Tops</h2>
      </div>
      <div>
        {data.tops.map((x, index)=>{
          return(
            <Card img={x.img} price={x.price} name={x.name} id={x.id}/>
          )
        })}
      </div>
    </div>
    </>
    
   
    
  )
}

export default Tops