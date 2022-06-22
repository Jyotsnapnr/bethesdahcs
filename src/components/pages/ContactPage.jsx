import React from 'react'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import NavigationBar from '../nav/NavigationBar'
import contact from '../../assets/images/contactus.jpg'

function ContactPage() {
  return (
    <div>
      <NavigationBar />
      <div className="row">
        <div className="col-md-12 mt-3">
          <img src={contact} alt="" className="img-fluid" />
          </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage