import React from 'react'
import error from '../../assets/images/notfound.jpg'

function NotFound() {
  return (
    <div>
    <h2 className="text-center mt-3">404 Error!! Page not found</h2>
      <img src={error} className="img-fluid  z-depth-1" alt="error"/>
    </div>
  )
}

export default NotFound