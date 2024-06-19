import React, { useState } from 'react'
import axios from 'axios';
import "./form.css"

const Form = () => {

  const auth = JSON.parse(localStorage.getItem('auth'))
const [FirstName , setFirstName] = useState();
    const [LastName , setLastName] = useState();
    const [Email , setEmail] = useState();
    const [MobileNumber , setMobileNumber] = useState();
    const [Nic , setNic ] = useState();
    const [DOB , setDOB] = useState();
    const [Gender , setGender] = useState();
    const [password, setpassword] = useState();

  const addadmin = () =>{

    


    try{
    axios.post("http://localhost:5000/admin",{

        FirstName:FirstName,
        LastName:LastName,
        Email: Email,
        MobileNumber:MobileNumber,
        Nic:Nic,
        DOB:DOB,
        Gender:Gender,
        password:password

    },
    {
      headers: { 'authorization': `Bearer ${auth}` }
    });

    if(!FirstName ||
      !LastName ||
      !Email ||
      !MobileNumber ||
      !Nic ||
      !DOB ||
      !Gender ||
      !password){
        alert("Please Enter All Details")
      }else {

      
    alert("New Admin Registration Successfull")
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("")
    setNic("")
    setDOB("")
    setGender("")
    setpassword("")
      }
  }catch{
    console.log("Registration not successfull")
  }


  }

  return (
    <div>
      <div className="contain">
      <div className='form_upper'>
        <img src="https://img.freepik.com/free-vector/doctor-office-logo-template_23-2149665590.jpg?size=626&ext=jpg&ga=GA1.1.89755386.1716571368&semt=ais_user" width={200} height={150} alt='img'></img>
        <h3>ADD NEW ADMIN</h3>
      </div>
      <div className='form_lower'>
        <input placeholder='First Name' value={FirstName} onChange={(event)=>{
          setFirstName(event.target.value)
        }}></input>
        <input placeholder='Last Name' value={LastName} onChange={(event)=>{
          setLastName(event.target.value)
        }}></input>
        <input placeholder='Email' value={Email} onChange={(event)=>{
          setEmail(event.target.value)
        }}></input>
        <input placeholder='Mobile Number' value={MobileNumber} onChange={(event)=>{
          setMobileNumber(event.target.value)
        }}></input>
        <input placeholder='Nic' value={Nic} onChange={(event)=>{
          setNic(event.target.value)
        }}></input>
        <input placeholder='DOB' value={DOB} onChange={(event)=>{
          setDOB(event.target.value)
        }}></input>
        <select placeholder='Gender' value={Gender} onChange={(event)=>
          setGender(event.target.value)}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        <input placeholder='password' type='password' value={password} onChange={(event)=>{
          setpassword(event.target.value)
        }}></input>
        <button id="admin" onClick={addadmin}>ADD NEW ADMIN</button>
      </div>
    </div>
    </div>
  )
}

export default Form
