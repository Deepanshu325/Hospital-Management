import React, { useEffect, useState } from 'react'
import "./Messageform.css"
import axios from 'axios'

const Messageform = () => {

    const [Data, setData] = useState([]);
   const auth =  JSON.parse(localStorage.getItem("auth"))

    useEffect(() => {
        axios.get("http://localhost:5000/message",
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

    const deleted = async (id) =>{

      try{
        await   axios.delete(`http://localhost:5000/message/${id}`,
          {
            headers: { 'authorization': `Bearer ${auth}` }
          }
          )
          alert("Message Deleted Successfully")
        }catch{
          console.log("not found")
          alert("message not found")
        }
    
    }

    
  return (

    
    <>
    {
      Data.length?
      Data.map((item)=>{
        return(
          <div className='Messageform' key={item._id}>
        <p><strong>First Name : </strong>{item.FirstName}</p>
        <p><strong>Last Name : </strong>{item.LastName}</p>
        <p><strong>Email : </strong>{item.Email}</p>
        <p><strong>Phone : </strong>{item.Mobile}</p>
        <p><strong>Message : </strong>{item.Message}</p>
  </div>

        )
      }):<h1>No Messages Found</h1>
    }
    
    </>
  )
}

export default Messageform
