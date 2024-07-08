import React from 'react'
import Navbar from '../Components/Navbar'
import './AddDoctors.css'
import Doctorform from '../Components/Doctorform'

const AddDoctors = () => {
  return (
    <div className='adddoctors'>
        
      <div className='Dform'>
        <Doctorform/>
      </div>
    </div>
  )
}

export default AddDoctors
