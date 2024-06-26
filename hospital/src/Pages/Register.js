import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import "./Register.css"
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  
  const[firstname , setfirstname]=useState();
  const[lastname , setlastname]=useState();
  const[email , setemail]=useState();
  const[mobile , setmobile]=useState();
  const[nic , setnic]=useState();
  const[dateofbirth , setdateofbirth]=useState()
  const[gender , setgender]=useState()
  const[password , setpassword]=useState()

  const navigate = useNavigate();


  const register =()=>{

    try{
    axios.post("http://localhost:5000/register",
      {
        FirstName:firstname,
        LastName:lastname,
        Email:email,
        Mobile_No:mobile,
        NIC :nic,
        DateofBirth : dateofbirth,
        Gender:gender,
        Password:password

      }
    );
    toast.success('Registration Sucessfull', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      });
    setfirstname("")
    setlastname("")
    setemail("")
    setmobile("")
    setnic("")
    setdateofbirth("")
    setgender("")
    setpassword("")
    navigate("/login")
  
  }
    catch{

      console.log("registration not sucessfull")
      toast.error('Enter Correct Details', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        });

    }
  
  }
  return (
      <div className="Login1"> 
    
    <div className="upper">
    <h1>Sign Up</h1>
    <p>Please Sign Up To Continue</p>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
     <p>  Placeat culpa voluptas expedita iteque ex, totam ad quod error?
    </p>
    </div>
    <div className="reg">
        <div className="inpu">
        <input placeholder='First Name'  value={firstname} onChange={(event)=>{
            setfirstname(event.target.value)
        }}
        ></input>
        <input placeholder='Last Name' 
        value={lastname}

        onChange={(event)=>{
            setlastname(event.target.value)
          }
        }
        
        ></input>

        </div>
        <div className="inpu">
        <input placeholder='Email'
         value={email}

         
        onChange={(event)=>{
          setemail(event.target.value)
        }
      }
        
        ></input>
        <input placeholder='Mobile Number'
         value={mobile}

        
         onChange={(event)=>{
          setmobile(event.target.value)
        }
      }></input>
        </div>

      <div className="inpu">
      <input placeholder='NIC'
      
      value={nic}

     
      onChange={(event)=>{
        setnic(event.target.value)
      }
    }></input>
      <input type='Text' placeholder="Date Of Birth" onFocus={(event)=>(event.target.type = "Date")} onBlur={(event)=>(event.target.type = "Text")}
       value={dateofbirth}

      
       onChange={(event)=>{
        setdateofbirth(event.target.value)
      }
    }></input>
      </div>
      <div className="inpu">
      <input placeholder='Gender'
       value={gender}

       
       onChange={(event)=>{
        setgender(event.target.value)
      }
    }></input>
      <input  placeholder='Password'
       value={password}


       onChange={(event)=>{
        setpassword(event.target.value)
      }
    }></input>
      </div>
      <p> Already Registered? <Link to="/login">Login Now</Link></p>

      <button id="login-button" onClick={register}>Register</button>
      
    </div>
      <div className="section6">
        <Footer/>
      </div>
    </div>
  )
}

export default Register
