import React from 'react'
import { FcConferenceCall } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import {FcLike } from "react-icons/fc";


function AboutUS() {
  return (
    <div className="container-fluid">
<div className="mt-5">
    <div className="row">
    <h1 className="text-center fs-1 align-items-center">About Us </h1> 
    <hr style={{width:'50%', marginLeft:'25%', marginRight:'25%'}}  />
     <div className="col-lg-4 text-center">
      <FcConferenceCall className="fs-2"/>
        <h2 className="fw-normal">Our Mission</h2>
        <p>We provide comfort to the soul and focus on individuals wholesome health & wellness, providing nourishment
         and compassionate care to enhance quality of life, dignity and independance. The care is embedded in the love of Christ and echoes His
         great faithfulness during the time of need.</p>
      </div>
      <div className="col-lg-4 text-center"> 
      <FcCollaboration className="fs-2 text-center" />

        <h2 className="fw-normal">Our Vision</h2>
        <p>We provide comfort to the soul and focus on individuals wholesome health & wellness, providing nourishment
         and compassionate care to enhance quality of life, dignity and independance. The care is embeded in the love of Christ and echoes His
         great faithfulness during the time of need.</p>
      </div>
      <div className="col-lg-4 text-center">
      <FcLike className="fs-2" />

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
    </div>
  )
}

export default AboutUS