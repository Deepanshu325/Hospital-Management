import React from 'react'
import "./Home.css"
import Card from '../Components/Card'
import Gifcard from '../Components/Gifcard'
import Imgcard from '../Components/Imgcard'
import Feedback from '../Components/Feedbackform'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className="Main">
       <div className="first">
       <div className='firstleft'>
        <div className='content1'>
        <Card heading1="Welcome to Our Hospital" heading2="Medical Institute | Your" heading3="Trusted Healthcare" heading4="Provider" info="Step into a world of care and compassion at Our Hospital. As your neighborhood healthcare provider, we're dedicated to serving you and your loved ones with excellence. From routine check-ups to specialized treatments, we're here to guide you on your journey to wellness. Explore our website to learn more about our services, meet our team, and discover how we can support your health needs. Welcome to a place where your well-being always comes first."/>
        </div>
       
       </div>
       <div className="firstright">
        <div className='content2'>
        <Gifcard src="https://media.tenor.com/PnK2BK4oq0cAAAAM/television-tv.gif" />
        </div>
       </div>
       </div>
       <div className="second">
       <div className='secondleft'>
        <div className='content3'>
          
           <Gifcard src=    "https://media.tenor.com/b5J9lCPQlAEAAAAj/democracyrising-our-time-now-for-our-health.gif" />
        </div>
       </div>
       <div className="secondright">
        <div className='content4'>
        <Card heading1="Biography" heading3="Who we are" info="Founded in [Year], [Hospital Name] has grown from humble beginnings into a cornerstone of healthcare excellence in [City/Town]. With a mission rooted in compassion and innovation, it offers comprehensive medical services, pioneering research, and unwavering dedication to patient care.
Through decades of challenges and triumphs, [Hospital Name] has remained steadfast in its commitment to serving the community with dignity and respect. Today, it stands as a beacon of hope and healing, touching countless lives and shaping the future of healthcare in the region."/>
        </div>
       </div>
       </div>
       <div className='Boxes'>
        <div className='box'> <Imgcard name="PEDIATRICS" src="https://media.istockphoto.com/id/1373259632/photo/lovely-nurse-take-care-of-child-at-clinic.jpg?s=612x612&w=0&k=20&c=ngpz3zvgC73kvjsDpWnT2Dkc9d_b9GZXnPm0BhiP2cc="/></div>
        <div className='box'>      <Imgcard name="ORTHOPEDICS" src="https://media.istockphoto.com/id/592647720/photo/vigilantly-monitoring-his-patients-vitals.jpg?s=612x612&w=0&k=20&c=cKQ6XPw8X98Z-9XQDR0DqnpTdvFsiHiXzYptGbKdD40=" /></div>
        <div className='box'><Imgcard name="CARDIOLOGY" src="https://media.istockphoto.com/id/886541828/photo/human-heart.jpg?s=612x612&w=0&k=20&c=ORyU-PvIJV7l2jbOieysoqIB81ig8EHKKeWbw1MYMuw="/></div>
        <div className='box'>      <Imgcard name="NEUROLOGY" src="https://media.istockphoto.com/id/1168179082/photo/man-with-brain-stroke-symptoms.jpg?s=612x612&w=0&k=20&c=eYZ9ayO0rR0Su3vN3EU48CxOOnwxUXDgXhpAYb2s7L4="/></div>
       

      

       </div>
       <div className='feedbacksection'>
        <div >
        <Feedback/>
        </div>
        
       </div>
       <div className='footersection'>
        <div className='content5'>
          <Footer/>
        </div>
       </div>
    </div>
  )
}

export default Home
