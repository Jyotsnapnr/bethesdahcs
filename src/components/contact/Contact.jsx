import React from 'react'
import house from '../../assets/images/map.png';
import gmail from '../../assets/images/gmail.png';
import facebook from '../../assets/images/facebook.png';
import insta from '../../assets/images/instagram.png'
import call from '../../assets/images/call.png'
import phone from '../../assets/images/phone.png'
import './contact.css'

function Contact() {
  return (
    <div className="container-fluid z-depth-1" id="contact">
   <div className="container">
      <h2 className="pb-2 about_heading text-center fw-bolder mt-5">Contact Us</h2>
   
    
    
    
    <div className="row mt-4">
    <div id="map-container-google-1" className="col-md-6 z-depth-1 map-container mt-5">


<iframe title="Location Map" className="ms-2 me-2 align-items-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.6596497116816!2d-113.3913915842857!3d53.45667008000224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01975e58ef05b%3A0x9ca7a90758f8c220!2s2650%2032b%20St%20NW%2C%20Edmonton%2C%20AB%20T6T%201P8%2C%20Canada!5e0!3m2!1sen!2sus!4v1654997169406!5m2!1sen!2sus" 
></iframe>
</div>

<div className="col-md-6 text-center mt-5">

<a href="https://goo.gl/maps/GVjLg9Jsgd17MEtf6" target="_blank"  rel="noreferrer" >
    <img src={house} height="50px" width="50px" alt="img"

/></a>
<h3 className="font-weight-bold mt-3">Our Address</h3>

<p>2650 32B Street NW</p>
<p>Edmonton, AB T6T 1P8</p>
<p>Email: bethesdahcs@gmail.com</p>
<h6><img src={call} height="20px" width="20px" alt="call" className="me-2"/><a href="tel: +1 8254392487" rel="noreferrer"> +1 8254392487</a>, <a href="tel:+17809063789" rel="noreferrer">
+1 780-906-3789</a></h6>

</div>
</div>

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  mt-4 mb-4">


    <div className="col mt-4 mb-4 social text-center">
    <button className="mail" onClick={() => window.location = 'mailto:bethesdahcs@gmail.com'}
     style={{backgroundColor: 'white', border: '1px solid white'}}>
    <img src={gmail} alt="gmail" height="50px" width="50px" className="mt-4" /></button>
    <h6>Email Us</h6></div>


    
    <div className="col mt-4 mb-4 social  text-center">
    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Bethesda-Home-Care-Services-105984358814462/">
    <img src={facebook} alt="facebook" height="50px" width="50px" className="mt-4" /></a>
    <h6>Connect to Our Facebook</h6>
   

    </div>

    <div className="col mt-4 mb-4 social  text-center">
    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/bethesdahcs/">
    <img src={insta} alt="insta" height="50px" width="50px" className="mt-4" /></a>
    <h6>Connect to Our Instagram</h6>

    </div>
    <div className="col mt-4 mb-4 social  text-center">
    <a href="tel:+1 8254392487" rel="noreferrer">
    <img src={phone} alt="phone" height="50px" width="50px" className="mt-4" /></a>
   <h6>Call us</h6>

    </div>
    </div>
    
</div>

</div>
    
  )
}

export default Contact