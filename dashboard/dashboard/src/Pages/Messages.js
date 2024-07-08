import React from 'react'
import Navbar from '../Components/Navbar'
import "./Messages.css"
import Messageform from '../Components/Messageform'
import Appointmentcard from '../Components/Appointmentcard'

const Messages = () => {
  return (
    <div className='messages'>
      <div className='mess'>
        <h1>MESSAGE</h1>
        <Messageform/>
        
      </div>

    </div>
    
  )
}

export default Messages
