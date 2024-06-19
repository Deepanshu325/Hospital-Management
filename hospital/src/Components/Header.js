import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

  function menu(){
    document.getElementById("menu").addEventListener("click",()=>{
       document.getElementById("visible").style.display= "contents";
        
       document.getElementById("menu").style.opacity = 0;
       document.getElementById("cancel").style.display = "block";
       

    })
  }
  function cancel(){
    document.getElementById("cancel").addEventListener("click",()=>{
       document.getElementById("visible").style.display = "none";
       document.getElementById("menu").style.opacity = 1;
       document.getElementById("cancel").style.display = "none"
        document.getElementById("visible").style.width = "0%"
    })
  }

  return (
      <>
      <div className="Navbar" id='navbar'>
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
        <div className="block">
        <button id="menu" onClick={menu}>y</button>
        <button id="cancel" onClick={cancel}>x</button>
        </div>

        
      </div>

      <div className='Menu' id="visible">
      <ul type="none">
    <li> <Link to="/" >Home</Link></li>
   <li><Link to="/appointment">Appointment</Link></li>  
   <li>  <Link to="/aboutus"> About us</Link></li>
      </ul>
    </div>
    </>
   
  )
}

export default Header
