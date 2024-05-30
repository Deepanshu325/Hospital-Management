import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [Gmail , setGmail] = useState("");
    const [Password , setPassword] =useState("");
    const Navigate = useNavigate();

   


        const login = async ()=>{
          try{
          let Target =  await axios.post("http://localhost:5000/adminlogin",{Gmail,Password }
            );
            if(Target.data.result === 'no user found'){
             alert("user not found")
            }
            else{
              localStorage.setItem("auth",JSON.stringify(Target.data.auth))
              alert("Login sucessfully")
              Navigate("/dashboard")

            }
          }catch(error){
            console.log("not found ")
           }
      
           
            
          }
        
  return (
    <div className='Login'>
      <img src='https://img.freepik.com/premium-vector/medical-care-logo-design-vector_304830-667.jpg?size=626&ext=jpg&ga=GA1.1.89755386.1716571368&semt=ais_user' width={350} height={100}  alt='img'></img>
      <h1>Welcome to medical</h1>
      <p>Only Admin Are Allowed To Access These Resources!</p>
      <div className='inputs'>
        <div className="gmail" 
        ><input placeholder='Gmail' value={Gmail}  onChange={(event)=>{
            setGmail(event.target.value)
        }}></input></div>
        <div className="gmail"><input placeholder='Password' value={Password} onChange={(event)=>{
            setPassword(event.target.value)
        }}></input></div>
        <div className="gmail"><input placeholder='Confirm Password'></input></div>




      </div>
      <button  onClick={login}>Login</button>
    </div>
  )
}

export default Login
