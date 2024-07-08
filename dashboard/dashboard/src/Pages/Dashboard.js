import React from 'react'
import Navbar from '../Components/Navbar'
import "./Dashboard.css"
import Docinfocard from '../Components/Docinfocard'
import Smallcard from '../Components/Smallcard'
import Appointmentcard from '../Components/Appointmentcard'

const Dashboard = () => {
  return (
    <>
    <div className='dashboard'>
      <div className='dashcon1'>
       <div className='element1'>
        <div className='item1'>
        <Docinfocard/>
        </div>
      
       </div>
       <div className='element2'>
        <div className='item2'>
          <Smallcard title="Total Appointments" color="white" back="blue" num="1500" />
        </div>
       </div>
       <div className='element3'>
        <div className='item3'>
        <Smallcard title="Requested Doctors" color="Red" back="white" num="10" />
        </div>
        
       </div>
      </div>
      <div className='dashcon2'>
      <div>
        <Appointmentcard/>
      </div>
      </div>
     
     </div>

    </>
  )
}

export default Dashboard
