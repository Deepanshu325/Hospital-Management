import React from 'react'
import "./Smallcard.css"

const Smallcard = (Props) => {
  return (
    <div className="smallcard" style={{color:Props.color , backgroundColor:Props.back}}>
        <p>{Props.title}</p>
        <h2>{Props.num}</h2>
      
    </div>
  )
}

export default Smallcard
