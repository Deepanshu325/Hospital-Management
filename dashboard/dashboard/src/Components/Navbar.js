import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
 const exit = () =>{

  navigate('/')
  console.log("exit")
  
 }

  return (
    <div className='Navbar'>


<div className='options'>
        <div className='icon'><Link to="/dashboard" >   <img src="https://cdn-icons-png.freepik.com/256/14034/14034325.png?ga=GA1.1.89755386.1716571368&semt=ais_hybrid" alt='img'></img> </Link></div>
        <div className='icon'><Link to="/doctors"><img src="https://cdn-icons-png.freepik.com/256/8752/8752202.png?ga=GA1.1.89755386.1716571368&semt=ais_hybrid" alt='img'></img></Link>   </div>
        <div className='icon'><Link to="/addadmins"><img src="https://cdn-icons-png.freepik.com/256/5217/5217882.png?ga=GA1.1.89755386.1716571368&semt=ais_hybridhttps://cdn-icons-png.freepik.com/256/5217/5217882.png?ga=GA1.1.89755386.1716571368&semt=ais_hybrid" alt='img'></img></Link></div>
        <div className='icon'><Link to="/adddoctors" >  <img src="https://cdn-icons-png.freepik.com/256/10948/10948122.png?ga=GA1.1.89755386.1716571368&semt=ais_hybrid" alt='img'></img> </Link></div>
        <div className='icon'><Link to="/messages"><img src="https://cdn-icons-png.freepik.com/256/9801/9801488.png?ga=GA1.1.89755386.1716571368&semt=ais_hybrid" alt='img'></img></Link>   </div>
        <div className='icon'><Link to="/"><img src="https://cdn-icons-png.freepik.com/256/10066/10066021.png?ga=GA1.1.89755386.1716571368&semt=ais_hybrid" alt='img'></img></Link>  </div>
        </div>
      
    </div>
  )
}

export default Navbar
