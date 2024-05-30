import React from 'react'
import Navbar from '../Components/Navbar'
import "./Dashboard.css"
import Docinfocard from '../Components/Docinfocard'
import Smallcard from '../Components/Smallcard'
import Appointmentcard from '../Components/Appointmentcard'

const Dashboard = () => {
  return (
    <>
    <div className='container'>
      <div className='nav' >
      <Navbar/>
      </div>
    
    <div className='dashboard'>
        
        <Docinfocard/>
        <Smallcard title="Total Appointments" num="1500" color="white" back="rgb(1, 1, 194)"/>
        <Smallcard title="Rejected Doctors" num="10" color="red" back="white"/>

    
     <div>
     <Appointmentcard/>
     
     </div>
     </div>
    </div>
    

    </>
  )
}

export default Dashboard
