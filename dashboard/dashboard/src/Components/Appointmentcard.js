import React from 'react'
import "./Appointmentcard.css"
import Infocard from './Infocard'
const Appointmentcard = () => {
  return (
    <div className="appointmentcard">
      <h1>Appointments</h1>
      <div className='appoint'>
          <div className="opt">Patient</div>
          <div className="opt">Date</div>
          <div className="opt">Doctor</div>
          <div className="opt">Department</div>
          <div className="opt">Status</div>
          <div className="opt">Visited</div>
        
      </div>
      <Infocard />

    </div>
  )
}

export default Appointmentcard
