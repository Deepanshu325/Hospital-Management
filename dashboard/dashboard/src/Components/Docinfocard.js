import React from 'react'
import "./Docinfocard.css"

const Docinfocard = () => {
  return (
    <div className='docinfo'>
      <img src="https://img.freepik.com/premium-photo/doctor-dentist-vector-character-chibi-illustration-solid-white-background_631932-252.jpg?size=626&ext=jpg&ga=GA1.1.89755386.1716571368&semt=ais_user" width={200} height={200} alt='img'/>
      <div className='info'>
        <h1>Deepanshu Shrivastav</h1>
        <a>Hi i am here to help you out from the illness and make you fit and ready to work</a>
      </div>
    </div>
  )
}

export default Docinfocard
