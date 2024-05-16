import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="hospitallogo">
        <img src='https://t4.ftcdn.net/jpg/05/55/46/25/240_F_555462560_Wp4odSeE4lSsOXOlVXMHdkerJbW6VMR4.jpg' alt='logo' />
        </div>
        <div className='quicklinks'>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Appointments</p>
            <p>About us</p>
        </div>
        <div className="days">
            <h3>Hours</h3>
            <p>Monday       </p>
            <p>Tueday       </p>
            <p>Wednesday       </p>
            <p>Thursday     </p>
            <p>Friday       </p>
            <p>Saturday     </p>


        </div>
        <div className="hours">
          
            <p>10:00AM | 11:PM</p>
            <p>10:00AM | 11:PM</p>
            <p>10:00AM | 11:PM</p>
            <p>10:00AM | 11:PM</p>
            <p>10:00AM | 11:PM</p>
            <p>10:00AM | 11:PM</p>
        </div>
        <div className='contact'>
            <h3>Contact Us</h3>
            <p>999-999-9999</p>
            <p>deepanshu@gmail.com</p>
            <p>Gurugram , Haryana</p>
        </div>
      
    </div>
  )
}

export default Footer
