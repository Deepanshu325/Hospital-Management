import React from 'react'
import Card from '../Components/Card'
import './Home.css'
import Gifcard from '../Components/Gifcard'
import Feedbackfrom from '../Components/Feedbackform'
import Imgcard from '../Components/Imgcard'
import Footer from '../Components/Footer'

const Home = () => {
  return (
  <div className="Home">

<div className="section1">
    <div className='cardd'>
    <Card heading1="Welcome to Our Hospital" heading2="Medical Institute | Your" heading3="Trusted Healthcare" heading4="Provider" info="Step into a world of care and compassion at Our Hospital. As your neighborhood healthcare provider, we're dedicated to serving you and your loved ones with excellence. From routine check-ups to specialized treatments, we're here to guide you on your journey to wellness. Explore our website to learn more about our services, meet our team, and discover how we can support your health needs. Welcome to a place where your well-being always comes first."/>
    </div>
    <div className="gif">
    <Gifcard src="https://media.tenor.com/PnK2BK4oq0cAAAAM/television-tv.gif" />
    </div>
    </div>
    <div className="section2">
    <div className="gif2">
    <Gifcard src=    "https://media.tenor.com/b5J9lCPQlAEAAAAj/democracyrising-our-time-now-for-our-health.gif" />
    </div>
    <div className="cardd2">
    <Card heading1="Biography" heading3="Who we are" info="Founded in [Year], [Hospital Name] has grown from humble beginnings into a cornerstone of healthcare excellence in [City/Town]. With a mission rooted in compassion and innovation, it offers comprehensive medical services, pioneering research, and unwavering dedication to patient care.
Through decades of challenges and triumphs, [Hospital Name] has remained steadfast in its commitment to serving the community with dignity and respect. Today, it stands as a beacon of hope and healing, touching countless lives and shaping the future of healthcare in the region."/>
    </div>
    </div>
   

    <div className="section3">
      <h3>Department</h3>
      <div className="imgcards">
      <Imgcard name="PEDIATRICS" src="https://media.istockphoto.com/id/1373259632/photo/lovely-nurse-take-care-of-child-at-clinic.jpg?s=612x612&w=0&k=20&c=ngpz3zvgC73kvjsDpWnT2Dkc9d_b9GZXnPm0BhiP2cc="/>
      <Imgcard name="ORTHOPEDICS" src="https://media.istockphoto.com/id/592647720/photo/vigilantly-monitoring-his-patients-vitals.jpg?s=612x612&w=0&k=20&c=cKQ6XPw8X98Z-9XQDR0DqnpTdvFsiHiXzYptGbKdD40=" />
      <Imgcard name="CARDIOLOGY" src="https://media.istockphoto.com/id/886541828/photo/human-heart.jpg?s=612x612&w=0&k=20&c=ORyU-PvIJV7l2jbOieysoqIB81ig8EHKKeWbw1MYMuw="/>
      <Imgcard name="NEUROLOGY" src="https://media.istockphoto.com/id/1168179082/photo/man-with-brain-stroke-symptoms.jpg?s=612x612&w=0&k=20&c=eYZ9ayO0rR0Su3vN3EU48CxOOnwxUXDgXhpAYb2s7L4="/>
      </div>
      
      <div className="section4">
        <Feedbackfrom/>
      </div>
      <div className="section5">
        <Footer/>
      </div>
    </div>

    
  </div>
  )
}

export default Home
