import React from 'react'
import NavigationBar from '../nav/NavigationBar'
import care from '../../assets/images/care.jpg'
import daily from '../../assets/images/daily.jpg'
import res from '../../assets/images/oxygen.png'
import fall from '../../assets/images/falling.png'
import com from '../../assets/images/1.gif'
import house from '../../assets/images/house.webp'
import meal from '../../assets/images/meal.webp'
import pills from '../../assets/images/pills.webp'
import grocery from '../../assets/images/grocery.webp'
import transportation from '../../assets/images/trans.jpg'
import caretaker from '../../assets/images/caretaker.png'
import overnight from '../../assets/images/overnight.webp'
import hour from '../../assets/images/24.jpg'
import post from '../../assets/images/post.webp'
import reha from '../../assets/images/reha.jpg'
import dem from '../../assets/images/dem.jpg'
import mass from '../../assets/images/mass.webp'
import cou from '../../assets/images/cou.jpg'
import Footer from '../footer/Footer'
import dis from '../../assets/images/disabled.png'
import './styles.css'

function ServicesPage() {
  return (
    <>
      <NavigationBar />
      <section className="py-5 text-center container-fluid service-bg">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto blur">
        <h1 className="fw-light mt-5">Our Services</h1>
        <p className="lead ">Our services includes personal care assistance like dressing, toileting, bathing,skin care, foot care, oral hygiene, medication administration, personal grooming, exercise activities,
         meal preparation, grocery shopping, transportation and accompanying for outings & appointments, fall prevention, home safety care, assisting all daily activities, companionship, respite care, live in caregiver,  overnight care,  24 hours care</p>
        <p className="lead ">We’re available to give services on everyday 24 hours including holidays and weekends</p>
        <p className="lead ">Many seniors preferred to stay at their own home. Bethesda provides in home care.</p>
        <p className="lead ">We allow seniors to live in their own homes with family on their comfort zone by ensuring quality of life and independence</p>
        <p className="lead ">We have a dedicated care manager to design a customized care plan for each individual.</p>
</div>
</div>
</section>
<div className="container pt-5 my-5 z-depth-1">
<section className="p-md-3 mx-md-5 text-lg-left">
  <div className="row">
    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
      <div className="row d-flex align-items-center">
        <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
          <img src={care} className="img-fluid  z-depth-1" alt="care"/>
          </div>
          <div className="col-7">
            <h6 className="font-weight-bold pt-2 ms-3 text-center">Personal care(Oral hygiene, Bathing & Dressing,Toileting, Skin care, Foot
care)</h6>
          </div>
      </div>
    </div>

    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={pills} className="img-fluid  z-depth-1" alt="medicine" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Medication administration</h6>
    </div>
    </div>

    </div>
    

    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={res} className="img-fluid  z-depth-1" alt="medicine" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Respite care</h6>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={fall} className="img-fluid  z-depth-1" alt="fall" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Fall prevention (Home safety)</h6>
    </div>
    </div>

    </div>



    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={com} className="img-fluid  z-depth-1" alt="com" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Companionship</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={house} className="img-fluid  z-depth-1" alt="house" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center"> Light housekeeping & Laundry</h6>
    </div>
    </div>

    </div>

    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={meal} className="img-fluid  z-depth-1" alt="house" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Meal preparation and nutrition</h6>
    </div>
    </div>

    </div>


  


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={grocery} className="img-fluid  z-depth-1" alt="house" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Grocery shopping</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={dis} className="img-fluid  z-depth-1" alt="dis" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Disability support and care</h6>
    </div>
    </div>

    </div>

    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={daily} className="img-fluid  z-depth-1" alt="images" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Assisting daily activities</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={transportation} className="img-fluid  z-depth-1" alt="homecare" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Transportation and accompanying for outings & appointments</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={caretaker} className="img-fluid  z-depth-1"  alt="homecare" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-3 text-center">Live in caretaker</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={overnight} className="img-fluid  z-depth-1"   alt="homecare" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 text-center">Overnight care</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={hour} className="img-fluid  z-depth-1"  alt="homecare"  />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-2 text-center">24 hours care</h6>
    </div>
    </div>

    </div>

    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={post} className="img-fluid  z-depth-1"  alt="homecare" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-2 text-center">Postnatal care</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={reha} className="img-fluid  z-depth-1"  alt="homecare"  />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-2 text-center">Rehabilitation services to achieve maximum independence</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={dem} className="img-fluid  z-depth-1"  alt="homecare" />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-2 text-center">Dementia care</h6>
    </div>
    </div>

    </div>



    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={mass} className="img-fluid  z-depth-1"  alt="homecare"  />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-2 text-center">Massage</h6>
    </div>
    </div>

    </div>


    <div className="col-lg-3 col-sm-6 col-md-4 mb-5">
    <div className="row d-flex align-items-center">
    <div className="col-5 avatar w-100 white d-flex justify-content-center align-items-center">
    <img src={cou} className="img-fluid  z-depth-1"  alt="homecare"  />
    </div>
    <div className="col-7">
      <h6 className="font-weight-bold pt-2 ms-2 text-center">Counseling services</h6>
    </div>
    </div>

    </div>
  
  </div>
</section>



</div>
      <Footer />
    </>
  )
}

export default ServicesPage