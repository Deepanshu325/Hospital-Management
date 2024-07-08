import React from 'react'
import "./Appointment.css"
import Card from '../Components/Card'
import Gifcard from '../Components/Gifcard'
import Appointmentform from '../Components/Appointmentform'
import Footer from '../Components/Footer';

const Appointment = () => {
  return (
    <div className='container'>
      <div className='section1'>
        <div className='section1left'>
          <div className="con1">
          <Card heading1="Schedule Your" heading2="Appointment | ZeeCare" heading3 = "Medical Institute" info="Step into a world of care and compassion at Our Hospital. As your neighborhood healthcare provider, we're dedicated to serving you and your loved ones with excellence. From routine check-ups to specialized treatments, we're here to guide you on your journey to wellness. Explore our website to learn more about our services, meet our team, and discover how we can support your health needs. Welcome to a place where your well-being always comes first."/>
          </div>
        </div>
        <div className='section1right'>
          <div className='con2'>
          <Gifcard src="https://cdn.dribbble.com/users/12094645/screenshots/20560963/media/6d460459a2b2447c8025a4e8ba704c8c.png?resize=768x576&vertical=center"/>
          </div>
        </div>
      </div>
      <div className='container2'>
      <Appointmentform/>
      </div>
      <div className='container3'>
        <Footer/>
      </div>
      
      
    </div>
  )
}

export default Appointment
