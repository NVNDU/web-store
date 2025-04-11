import React from 'react'
import Records from '../records.json'

function Sleep() {
  return (
  <div>
    <h1>Sleep</h1>
    <div className='inner'>
      {Records && Records.map(record =>{
        return(
          <div className='box'>
            {/* <img src={record.icon} style={{width:"200px", height:"200px"}}/> */}
            <br/>
            <p>{record.caption}</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default Sleep