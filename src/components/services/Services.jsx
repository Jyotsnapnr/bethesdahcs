import React from 'react'
import { Link } from "react-router-dom";
import './services.css'

import { FcBusinesswoman} from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { FcEngineering} from "react-icons/fc";
import { GiFalling } from "react-icons/gi";
import { TbFriends } from "react-icons/tb";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FcShop} from "react-icons/fc";
import { MdWheelchairPickup } from "react-icons/md";
import { FcCalendar} from "react-icons/fc";
import {FcAutomotive} from "react-icons/fc";
import {FcPodiumWithSpeaker} from "react-icons/fc";
import {FcNightPortrait} from "react-icons/fc";
import {FcAlarmClock} from "react-icons/fc";
import {FcStackOfPhotos} from "react-icons/fc";
import {FcCollaboration} from "react-icons/fc";
import {FcSynchronize} from "react-icons/fc";
import { TbMassage} from "react-icons/tb";
import {FcVoicePresentation} from "react-icons/fc";

function Services() {

  return (
    <div className="container mt-5 mb-3 pt-5">
    <div className="service-page mt-1 ms-3 me-3">
<section className="py-5 text-center">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Our Services</h1>
        <p className="lead text-muted text-center">Many seniors preferred to stay at their own home. Bethesda provides in home care.</p>
        
          <Link to="/services" className="btn my-2 text-white" style={{backgroundColor: 'rgb(103, 4, 4)', color: 'white'}}>Read More</Link>
</div>
</div>
</section>
<div className="z-depth-1 my-5 ps-3 mt-1">
<section>
  
    <div className="row dark-grey-text ms-1">
        <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcBusinesswoman className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Personal care(Oral hygiene, Bathing & Dressing,Toileting, Skin care, Foot
care)
            </h6>
          </div>
        </div>
          </div>


          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <GiMedicines className="fs-2" style={{color: 'red'}}/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Medication administration
            </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcEngineering className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Respite care      </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <GiFalling className="fs-2" style={{color: '#1A6CE8'}}/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold ">
            Fall prevention (Home safety)    </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <TbFriends className="fs-2" style={{color: 'orange'}}/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Companionship    </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <MdOutlineLocalLaundryService className="fs-2" style={{color: 'gray'}}/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Light housekeeping & Laundry    </h6>
          </div>
        </div>
          </div>


          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <IoFastFoodOutline className="fs-2" style={{color: '#7C3E09'}}/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Meal preparation and nutrition      </h6>
          </div>
        </div>
          </div>


          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcShop className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Grocery shopping      </h6>
          </div>
        </div>
          </div>

          
          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <MdWheelchairPickup className="fs-2" style={{color: '#1A6CE8'}}/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Disability support and care     </h6>
          </div>
        </div>
          </div>


          
          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcCalendar className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Assisting daily activities    </h6>
          </div>
        </div>
          </div>


          
          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcAutomotive className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Transportation and accompanying for outings & appointments      </h6>
          </div>
        </div>
          </div>


          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcPodiumWithSpeaker className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Live in caretaker     </h6>
          </div>
        </div>
          </div>


          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcNightPortrait className="fs-2" />
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Overnight care     </h6>
          </div>
        </div>
          </div>


          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcAlarmClock className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            24 hours care      </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcStackOfPhotos className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Postnatal care     </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcCollaboration className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Rehabilitation services to achieve maximum independence    </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcSynchronize className="fs-2"/>
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Dementia care    </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <TbMassage className="fs-2" style={{color:"#830D6B"}} />
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Massage     </h6>
          </div>
        </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
        <div className="media">
          <div className="mr-4">
            <FcVoicePresentation className="fs-2" />
          </div>
          <div className="media-body">
            <h6 className="font-weight-bold">
            Counseling services    </h6>
          </div>
        </div>
          </div>

    </div>
  
</section>

</div>

</div>
      </div>
  )
}

export default Services