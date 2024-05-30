import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [Email, setemail] = useState("");
  const[Password, setpassword] = useState("");
  const navigate = useNavigate();
 

  const login = async ()=>{
    try{
    let Target =  await axios.post("http://localhost:5000/login",{Email,Password }
      );
      if(Target.data.result === 'no user found'){
        toast.error('User not Found', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          });
      }
      else{
        toast.success('Login sucessfully', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          });
       localStorage.setItem("user",JSON.stringify((Target.data)));
       
       localStorage.setItem("token",JSON.stringify((Target.data.auth)));
        navigate("/appointment")

      }
    }catch(error){
      console.log("not found ")
     }

     
      
    }
  
  return (

    <div className="Login1"> 
    
    <div className="upper">
    <h1>Sign In</h1>
    <p>Please Login To Continue</p>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
     <p>  Placeat culpa voluptas expedita iteque ex, totam ad quod error?
    </p>
    </div>
    <div className="Lower">
        <div className="inp">
        <input placeholder='Email'
        value={Email}
        onChange={(event)=>{
          setemail(event.target.value)
        }}></input>
        </div>
        <div className="inp">
        <input placeholder='Password'
        value={Password}
        onChange={(event)=>{
          setpassword(event.target.value)
        }}></input>
        </div>

      <div className="inp">
      <input placeholder='Confirm Password'></input>
      </div>
      <p>Not Registered? <Link to="/register">Register Now</Link></p>

      <button id="login-button" onClick={login}>Login</button>
      
    </div>
      <div className="section6">
        <Footer/>
      </div>
    
      
    </div>
  )
}

export default Login
