import React from 'react'
import Card from '../Components/Card'
import Gifcard from '../Components/Gifcard'
import "./Appointment.css"
import Appointmentform from '../Components/Appointmentform'
import Footer from "../Components/Footer"


const Appointment = () => {
  return (
    <div className="Appointment">

      <div className="appointment-section1">
       <div className="carrd">
      <Card heading1="Schedule Your" heading2="Appointment | ZeeCare" heading3 = "Medical Institute" info="Step into a world of care and compassion at Our Hospital. As your neighborhood healthcare provider, we're dedicated to serving you and your loved ones with excellence. From routine check-ups to specialized treatments, we're here to guide you on your journey to wellness. Explore our website to learn more about our services, meet our team, and discover how we can support your health needs. Welcome to a place where your well-being always comes first."/>
      </div>
      <div className="giff1">
        <Gifcard src="https://cdn.dribbble.com/users/12094645/screenshots/20560963/media/6d460459a2b2447c8025a4e8ba704c8c.png?resize=768x576&vertical=center"/>
      </div>
      </div>
      <div className="appointment-form">
        <Appointmentform/>
      </div>
      <div className="section6">
        <Footer/>
      </div>
    </div>
  )
}

export default Appointment
