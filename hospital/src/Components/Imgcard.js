import React from 'react'
import './Imgcard.css'

const Imgcard = (props) => {
  return (
    <div className="Imgcard">
        
     <img src= {props.src} /> 
     <div>
     <button>{props.name}</button>
     </div>
    </div>
  )
}

export default Imgcard
