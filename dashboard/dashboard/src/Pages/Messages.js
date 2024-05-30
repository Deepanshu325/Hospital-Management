import React from 'react'
import Navbar from '../Components/Navbar'
import "./Messages.css"
import Messageform from '../Components/Messageform'

const Messages = () => {
  return (
    <div className='messages'>
      <div>
      <Navbar/>
      </div>
        
      <div className='mess'>
        <h1>MESSAGE</h1>
        <Messageform/>
      </div>
    </div>
  )
}

export default Messages
