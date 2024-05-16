import React, { useState } from 'react'
import './Feedbackform.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Feedback = () => {

  const [firstname, setfirtname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [msg, setmsg] = useState("");

  const navigate = useNavigate();

  const message = () => {
    try {
      axios.post("http://localhost:5000/message", {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Phone: phone,
        Message: msg
      });
      alert("Message send successfully")
      setfirtname("");
      setlastname("");
      setemail("")
      setphone("");
      setmsg("")
      navigate("/")

    } catch {
      console.log("message not send successfully")
    }
  }
  return (
    <div className='head'>
      <h3>Send Us A Message</h3>
      <div className="First">
        <input placeholder='First Name' value={firstname}
          onChange={(event) => {
            setfirtname(event.target.value)
          }}></input>
        <input placeholder='Last Name' value={lastname}
          onChange={(event) => {
            setlastname(event.target.value)
          }}></input>
      </div>
      <div className="Second">
        <input placeholder='Email'

          value={email}
          onChange={(event) => {
            setemail(event.target.value)
          }} ></input>
        <input placeholder='Mobile Number' value={phone}
          onChange={(event) => {
            setphone(event.target.value)
          }}></input>
      </div>

      <div className="Third">
        <input placeholder='Message' value={msg}
          onChange={(event) => {
            setmsg(event.target.value)
          }}></input>
      </div>
      <div className='send'>
        <button id="send" onClick={message}>Send</button>
      </div>



    </div>
  )
}

export default Feedback
