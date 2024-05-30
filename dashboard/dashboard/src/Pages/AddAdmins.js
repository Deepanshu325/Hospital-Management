import React from 'react'
import Navbar from '../Components/Navbar'
import './AddAdmins.css'
import Form from '../Components/Form'

const AddAdmins = () => {
  return (
    <div className='addadmins'>
      <div className='nav'>
      <Navbar/>
      </div>
      <div className='form'>
    <Form/>
      </div>
    </div>
  )
}

export default AddAdmins
