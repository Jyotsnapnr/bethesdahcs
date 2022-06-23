import React from 'react'
import logo from '../../assets/images/logo.png'
import {FcPhone } from "react-icons/fc";
import { Outlet, Link } from "react-router-dom";
import './nav.css';

function Navbar() {
  return (
    <header className="mb-5"> 
  <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light toggle-nav">
  <div className=" container-fluid">
  <Link className="navbar-brand ms-3 logo" to="/"><img src={logo} alt="Logo"/></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" 
      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
      
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link className="nav-link text-white align-items-center text-center" to="/">Home</Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link text-white align-items-center text-center" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white align-items-center text-center " to="/services">Our Services</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white align-items-center text-center" to="/covid">Covid-19 Safety</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white align-items-center text-center" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white align-items-center text-center" to="/careers">Careers</Link>
          </li>
      <li className="nav-item"><a href="tel:+18254392487" className="nav-link text-white align-items-center text-center ">
      <FcPhone className="fs-2 align-middle"/>+1 8254392487</a></li>
      </ul>
      </div>
      </div>
      </nav>
 
    <Outlet />
</header>
 
  )
}

export default Navbar