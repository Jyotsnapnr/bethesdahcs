import React from 'react'
import { FcConferenceCall } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import {FcLike } from "react-icons/fc";
import Footer from '../footer/Footer'
import NavigationBar from '../nav/NavigationBar'
import about from '../../assets/images/aboutpage.jpg'

function AboutPage() {
  return (
    <div>
    <NavigationBar/>
   
    <div className="container-fluid image-container mt-4">
      <div className="row">
        <div className="col-md-12 mt-5">
          <img src={about} alt="about" className="img-fluid" />
          </div>
      </div>
   
  
    <div className="row mt-5">
     <div className="col-lg-4 text-center">
      <FcConferenceCall className="fs-1"/>
        <h2 className="fw-normal">Our Mission</h2>
        <p>We provide comfort to the soul and focus on individuals wholesome health & wellness, providing nourishment
         and compassionate care to enhance quality of life, dignity and independance. The care is embeded in the love of Christ and echoes His
         great faithfulness during the time of need.</p>
      </div>
      <div className="col-lg-4 text-center"> 
      <FcCollaboration className="fs-1 text-center" />

        <h2 className="fw-normal">Our Vision</h2>
        <p>To walk the talk of servant leaders, fulfilling Christ’s commission, compassion and
love for the community where service excellence overflows.</p>
      </div>
      <div className="col-lg-4 text-center">
      <FcLike className="fs-1 text-center" />

        <h2 className="fw-normal">Our Values</h2>
        <p>We are guided by the following values and assure: </p>
        <p>Respect –  We treat every individual under our care with utmost respect and
dignity.</p>
        <p>Knowledgeable and Accountable — Continuous enhancement of skills,
being innovative and responsible for our actions with all integrity.</p>
<p>Diversity — Serve individuals from different backgrounds, cultures and
religious beliefs.</p>
  
    </div>
    </div>
    </div>
    
      <Footer />
    </div>
  )
}

export default AboutPage