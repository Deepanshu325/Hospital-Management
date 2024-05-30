import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (

      <div className="Navbar">
        <div className="Name">
          <img src='https://t4.ftcdn.net/jpg/05/55/46/25/240_F_555462560_Wp4odSeE4lSsOXOlVXMHdkerJbW6VMR4.jpg' alt='logo' />
        </div>
        <div className="Nav-list">
          <ul type="none">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
           <li className="nav-item"><Link className="nav-link" to="/appointment">Appointment</Link></li>  
           <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link></li>  
          </ul>
        </div>
        <div className="Login">
       <Link to="login">  <button id="login">Login</button> </Link> 
        </div>
      </div>
   
  )
}

export default Header
