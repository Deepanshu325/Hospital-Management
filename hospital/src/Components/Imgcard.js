import React from 'react'
import './Imgcard.css'

const Imgcard = (props) => {
  return (
    <div className="Imgcard">
        <button>{props.name}</button>
     <img src= {props.src}/> 
    </div>
  )
}

export default Imgcard
