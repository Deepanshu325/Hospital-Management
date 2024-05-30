import React, { useEffect, useState } from 'react'
import "./Card.css"
import axios from 'axios'

const Card = () => {

  const auth = JSON.parse(localStorage.getItem("auth"))

  const [Data , setData] = useState([])
    useEffect(  ()=>{

      axios.get("http://localhost:5000/doctor",
      {
        headers: { 'authorization': `Bearer ${auth}` }
      }
      ).then((resp)=>{
       console.log(resp.data)
       setData(resp.data)
      }).catch((error)=>{
        console.log(error)
      })

    },[])

  
  return (
    <>
    
     {
    
      Data.length > 0 ?
      Data.map((item)=>{
        
        return(

          <div className='card' key={item._id}>

      
          <div className='image'>
              
              <img src={item.Photo} width={150} height={100}></img>
               <h3>{item.FirstName} {item.LastName}</h3>
          </div>
          <div className='details'>
              <p><strong>Email:</strong>{item.Email}</p>
              <p><strong>Phone:</strong> {item.Mobile}</p>
              <p><strong>DOB :</strong> {item.Dob}</p>
              <p><strong>Department :</strong>{item.Department} </p>
              <p><strong>Gender:</strong> {item.Gender}</p>
  
  
          </div>
        
      </div>
        )
      }):<h1>No Doctor Found</h1>
     }
    </>
  
  )
}

export default Card
