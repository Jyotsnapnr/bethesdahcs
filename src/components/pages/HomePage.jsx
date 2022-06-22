import React from 'react'

import Footer from '../footer/Footer'
import Home from '../home/Home'

import NavigationBar from '../nav/NavigationBar'
import Services from '../services/Services'
import Contact from '../contact/Contact'
import '../contact/contact.css'
function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Home />
      
      <Services />
      <Contact />
      
   <Footer />
   
    </div>
  )
}

export default HomePage