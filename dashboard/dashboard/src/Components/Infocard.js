import React, { useEffect, useState } from 'react'
import "./Infocard.css"
import axios from 'axios';
const Infocard = () => {


  const auth = JSON.parse(localStorage.getItem("auth"))

  function change (){

    alert("Patient Record updated Successfully")
    const values = document.getElementById("status").value;
     
    if(values === "select"){
    document.getElementById("status").style.color="green"

  }else{
    document.getElementById("status").style.color="red"
  }
  }

  function change2 (){

    alert("Patient Record updated Successfully")
    const values = document.getElementById("status2").value;
     
    if(values === "select2"){
    document.getElementById("status2").style.color="green"

  }else{
    document.getElementById("status2").style.color="red"
  }
  }
  
  

  const [Data , setData] = useState([]);
    useEffect(() => {
      
      axios.get("http://localhost:5000/appointment",
      {
        headers: { 'authorization': `Bearer ${auth}` }
      }
      )
          .then(res => {
            console.log(res.data)
              setData(res.data);
          })
          .catch(err => {
              console.error("Error fetching data:", err);
          });
  }, []);

  return (
<>
{
  Data.map((item)=>{
    return(
      <div className='infocard'key={item._id} >
      <div className='box' ><p>{item.FirstName} </p></div>
      <div className='box'><p>{item.Date}</p></div>
      <div className='box'><p>{item.Doctor}</p></div>
      <div className='box'><p>{item.Pendiatics}</p></div>
      <div className='status'>
        <select id="status" onChange={change}>
          <option id="reject">Rejected</option>
      <option id="select" value={"select"} >Selected</option>
      </select></div>

      <div className='status'>
        <select id="status2" onChange={change2}>
          <option id="reject">✖</option>
      <option id="select" value={"select2"} >✔</option>
      </select></div>
      
      
      </div>

    )
  })
}

           
          
       
      



      
      </>
    
  )
}

export default Infocard
