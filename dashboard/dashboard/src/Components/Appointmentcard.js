import React from 'react'
import "./Appointmentcard.css"
import Infocard from './Infocard'
const Appointmentcard = () => {
  return (
    <div className="appointmentcard">
      <h1>Appointments</h1>
      <div className='appoint'>
          <div className="opt"><p>Patient</p></div>
          <div className="opt"><p>Date</p></div>
          <div className="opt"><p>Doctor</p></div>
          <div className="opt"><p>Department</p></div>
          <div className="opt"><p>Status</p></div>
          <div className="opt"><p>Visited</p></div>
        
      </div>
      <Infocard />

    </div>
  )
}

export default Appointmentcard
