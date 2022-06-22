import React from 'react'
import career from '../assets/images/career.jpg';

function Career() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={career} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" />
      </div>
      <div className="col-lg-6">
        <h2 className="display-5 fw-bold lh-1 mb-3 mt-5 career-head">Join the Bethesda Team</h2>
        <p className="lead">We're hiring!! </p>
        <p className="lead">Are you a kind, caring individual who wants to make a difference?
         If you would like to become part of our caring team, we invite you to Email us at bethesdahcs@gmail.com</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-lg px-4 me-md-2" onClick={() => window.location = 'mailto:bethesdahcs@gmail.com'}
     style={{backgroundColor: 'rgb(103, 4, 4)', color: 'white'}}>Email Us</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Career