import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='ccard'>
      <div className='Head'>
        <strong>{props.heading1}</strong><br></br> 
          <strong>{props.heading2}</strong> <br></br>
          <strong>{props.heading3} </strong><br></br>
          <strong>{props.heading4}</strong>

      </div>
      <div className='info'>
        <p>{props.info}</p>
      </div>
    </div>
  )
}

export default Card
