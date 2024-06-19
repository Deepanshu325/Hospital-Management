import React from 'react'
import "./Appointmentform.css"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Appointmentform = () => {

  const auth = JSON.parse(localStorage.getItem("token"))
  console.log(auth)




  const [FirstName , setFirstname] = useState();
  const [LastName , setLastname] = useState();
  const [Email , setEmail] = useState();
  const [Mobile , setMobile] = useState();
  const [NIC , setNIC] = useState();
  const [Date , setDate] = useState();
  const [Gender , setGender] = useState();
  const [AppointmentDate , setAppointmentDate] = useState();
  const [Pendiatics , setPendiatics] = useState();
  const [Doctor , setDoctor] = useState();
  const [Address , setAddress] = useState();
  const Navigate = useNavigate();

  const submitt = () =>{
    if(auth){ 
      try{
        axios.post("http://localhost:5000/appointment"
          
        ,
        {
        FirstName : FirstName, 
        LastName  : LastName,   
        Email  : Email,    
        Mobile  :  Mobile,   
        NIC  : NIC,      
        Date  : Date,
        Gender : Gender,
        Date2  : AppointmentDate,
        Pendiatics : Pendiatics,  
        Doctor  : Doctor, 
        Address : Address
      },
      {
        headers: { 'authorization': `Bearer ${auth}` }
      }
        );
        if(!FirstName || 
          !LastName ||    
          !Email ||     
          !Mobile ||    
          !NIC ||      
          !Date || 
          !Gender || 
          !AppointmentDate || 
          !Pendiatics ||  
          !Doctor ||  
          !Address){
            toast.error("Please Enter All Details")
          }else {
        toast.success('Appointment form submitted sucessfully', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          });
          setFirstname("")
          setLastname("")
          setEmail("")
          setMobile("")
          setNIC("")
          setDate("")
          setGender("")
          setAppointmentDate("")
          setPendiatics("")
          setDoctor("")
          setAddress("")
        
          }
      }catch{
        toast.error('Appointment form is not submitted sucessfully', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          });
      }
  }else{
    toast.error('Please Enter your Login Details First', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      });
    Navigate("/login")

  }
}
  return (
       <div className='feedback'>
        <h3>Appointment</h3>
        <div className="First">
        <input placeholder='First Name' 
        value={FirstName} 
        onChange={(event)=>{
          setFirstname(event.target.value)
        }}

        ></input>
        <input placeholder='Last Name'
        value={LastName} 
        onChange={(event)=>{
          setLastname(event.target.value)
        }}
        ></input>
        </div>
        <div className="Second">
        <input placeholder='Email'
value={Email} 
onChange={(event)=>{
  setEmail(event.target.value)
}}
        ></input>
        <input placeholder='Mobile Number'
        value={Mobile} 
        onChange={(event)=>{
          setMobile(event.target.value)
        }}></input>
        </div>
        <div className="Second">
        <input placeholder='NIC'
        value={NIC} 
        onChange={(event)=>{
          setNIC(event.target.value)
        }}></input>
        <input placeholder="Date of birth" id="dob" type='text' onFocus={(e)=>(e.target.type ="date")} onBlur={(e)=>(e.target.type="text")}
        value={Date} 
        onChange={(event)=>{
          setDate(event.target.value)
        }}
        ></input>
        </div>
        <div className="Second">
        <select>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        
        <input type="text" id="ad" placeholder='Appointment Date' onFocus={(e)=>(e.target.type ="date" )} onBlur={(e)=>(e.target.type="text")}
        value={AppointmentDate} 
        onChange={(event)=>{
          setAppointmentDate(event.target.value)
        }}
        ></input>
        </div>
        <div className="Second">
        < select placeholder='Pendiatics'
        value={Pendiatics} 
        onChange={(event)=>{
          setPendiatics(event.target.value)
        }}

        >
          <option>Pendiatics</option>
          <option >Orthopendics</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Oncology</option>
          <option>Radiology</option>
          <option>Physical Therapy</option>
          <option>Dermatology</option>
          <option>Ent</option>
        </select>
        <select value={Doctor} onChange={(event)=>{
          setDoctor(event.target.value)
        }}>
          <option >Select Doctor</option>
          <option >Jony</option>
          <option >Rony</option>
          <option >Adward</option>
          <option >Elina</option>
          <option>Fredy</option>
          
        </select>
      
        
        
        </div>

        <div className="Third">
        <input placeholder='Address'
        
        value={Address} 
        onChange={(event)=>{
          setAddress(event.target.value)
        }}></input>
        </div> 
        <div className='send'>
        <button id="send" onClick={submitt}>Get Appointment</button>
        </div>


      
    </div>
  
  )
}

export default Appointmentform
