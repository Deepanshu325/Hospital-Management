import React from 'react'
import "./Appointmentform.css"

const Appointmentform = () => {
  return (
       <div className='feedback'>
        <h3>Appointment</h3>
        <div className="First">
        <input placeholder='First Name'></input>
        <input placeholder='Last Name'></input>
        </div>
        <div className="Second">
        <input placeholder='Email'></input>
        <input placeholder='Mobile Number'></input>
        </div>
        <div className="Second">
        <input placeholder='NIC'></input>
        <input  type="Date" placeholder="Date of Birth"></input>
        </div>
        <div className="Second">
        <select>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        
        <input type="Date" placeholder='Appointment Date'></input>
        </div>
        <div className="Second">
        <input placeholder='Pediatics'></input>
        <select>
          <option>Select Doctor</option>
          <option>Jony</option>
          <option>Rony</option>
          <option>Adward</option>
          <option>Elina</option>
          <option>Fredy</option>
        </select>
        </div>

        <div className="Third">
        <input placeholder='Address'></input>
        </div> 
        <div className='send'>
        <button id="send">Get Appointment</button>
        </div>


      
    </div>
  
  )
}

export default Appointmentform
