import React from 'react'
import "./Doctorform.css"
import { useState } from 'react'
import axios from 'axios'

const Doctorform = () => {

  const auth = JSON.parse(localStorage.getItem('auth'))
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Mobile, setMobile] = useState();
  const [Nic, setNic] = useState();
  const [Dob, setDob] = useState();
  const [Gender, setGender] = useState();
  const [Department, setDepartment] = useState();
  const [Password , setPassword] = useState();
  const [Photo, setPhoto] = useState();
  const doctor = async ()=>{

    try{

    await  axios.post("http://localhost:5000/doctor",
        {
          FirstName :FirstName,
          LastName : LastName,
          Email :  Email , 
          Mobile : Mobile, 
          Nic : Nic, 
          Dob :  Dob,
          Gender:Gender,
          Department :  Department,
          Password:Password
          ,
          Photo:Photo

      
        },
        {
          headers: { 'authorization': `Bearer ${auth}` }
        }
      );
      if( !FirstName|| !LastName|| !Email || !Mobile|| !Nic|| !Dob|| !Gender|| !Department|| !Password || !Photo){
      alert("Please Enter All Details")
    }else{
      alert("Doctor Register Successfully")
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setNic("");
      setDob("");
      setGender("");
      setDepartment("");
      setPassword("");
      setPhoto("");
    }
    }catch{
       console.log("No Doctor Found")
       alert("Doctor Registration not Successfull")
    }
  }
  return (
    <div className='Doctorform'>
        <div className='doc_img'>
            <img src='https://img.freepik.com/free-vector/doctor-office-logo-template_23-2149665590.jpg?size=626&ext=jpg&ga=GA1.1.89755386.1716571368&semt=ais_user' width={200} height={150} alt=''></img>
            <h3>REGISTER NEW DOCTOR</h3>
        </div>
        <div className='doc_form'>
            <div>
            <img src="https://img.freepik.com/premium-vector/man-doctor-silhouette-vector-illustration_136875-5834.jpg?w=740" width={200} alt='img'></img>
            
            </div>

            <div className='inp'>
        <input placeholder='First Name' value={FirstName}
         onChange={(event)=>{
          setFirstName(event.target.value)
        }}></input>
        <input placeholder="Last Name" value={LastName} onChange={(event)=>{
          setLastName(event.target.value)
        }}></input>
        <input placeholder='Email' value={Email} onChange={(event)=>{
          setEmail(event.target.value)
        }}></input>
        <input placeholder='Mobile Number' value={Mobile} onChange={(event)=>{
          setMobile(event.target.value)
        }}></input>
        <input placeholder='NIC' value={Nic} onChange={(event)=>{
          setNic(event.target.value)
        }}></input>
        <input type="text" placeholder='DOB' onFocus={(event)=>(event.target.type = "date")} onBlur={(event)=>(event.target.type="text")}  value={Dob} onChange={(event)=>{
          setDob(event.target.value)
        }}></input>
        <select placeholder='Gender'  value={Gender} onChange={(event)=>{
          setGender(event.target.value)
        }}>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input placeholder='password' type='password' value={Password}  onChange={(event)=>{
          setPassword(event.target.value)
        }}></input>
        <select placeholder='Department'  value={Department} onChange={(event)=>{
          setDepartment(event.target.value)
        }}>
        <option>Select Department</option>
          <option >Orthopendics</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Oncology</option>
          <option>Radiology</option>
          <option>Physical Therapy</option>
          <option>Dermatology</option>
          <option>Ent</option>
        </select>
        <input type='text'  Placeholder="Paste Doctor Photo Url" value={Photo}  onChange={(event)=>{
          setPhoto(event.target.value)
        }}></input>
    <button id="regdoc" onClick={doctor}>REGISTER NEW DOCTOR</button>
        </div>
        
        

        </div>
      
    </div>
  )
}

export default Doctorform
