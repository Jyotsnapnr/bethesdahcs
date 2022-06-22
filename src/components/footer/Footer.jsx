import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import './footer.css';
function Footer() {
  return (
    <div className="container-fluid footer">
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-light mt-4'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/Bethesda-Home-Care-Services-105984358814462/' className='me-4 text-reset' 
          target="_blank" rel="noreferrer">
           <FaFacebookF className="text-light mt-4 soc-icon"/>
          </a>
          <a href='https://www.instagram.com/bethesdahcs/' className='me-4 text-reset' 
          target="_blank" rel="noreferrer">
            <FaInstagram  className="text-light mt-4 soc-icon"/>
          </a>
          <button  onClick={() => window.location = 'mailto:bethesdahcs@gmail.com'} 
          style={{backgroundColor: 'rgb(103, 4, 4)', border: '1px solid rgb(103, 4, 4)'}}>
            <SiGmail className="text-light mt-4 me-4 soc-icon"/></button>
          <a href="tel:+18254392487"  rel="noreferrer" className='me-4 text-reset'>
            <BsFillTelephoneFill className="text-light mt-4 soc-icon"/>
          </a>
        </div>
      </section>
<section className=''>
      <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-12 text-center'>
          
              <h6 className='text-uppercase mb-4 text-light'>© {new Date().getFullYear()} Bethesda Home Care Services INC.</h6>
              </div>
              </div>
              </div>

              </section>
   
    </div>
  )
}

export default Footer