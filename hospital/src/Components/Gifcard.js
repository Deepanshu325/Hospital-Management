import React from 'react'

const Gifcard = (props) => {
  return (
    <div className="gifcard">
      <img src={props.src} alt="Gif" style={{width:400 , height:260}}></img>
    </div>
  )
}

export default Gifcard
