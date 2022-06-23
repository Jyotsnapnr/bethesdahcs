import React from 'react'
import homecare1 from '../../assets/images/senior1.jpg';
import homecare2 from '../../assets/images/senior2.jpg';
import homecare3 from '../../assets/images/senior3.jpg';
import './home.css';
   


function Home() {
  return (
    <div id="carousel1" className="carousel slide carousel-fade mt-5 pt-5 mb-5 pb-5" data-ride="carousel" style={{height:"80vh"}}>
      <ol className="carousel-indicators">
        <li data-target="#carousel1" data-slide-to="0" className="active"></li>
        <li data-target="#carousel1" data-slide-to="1"></li>
        <li data-target="#carousel1" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view">
            <img src={homecare1}
               alt="home care" />
            <div className="mask rgba-black-light"></div>
          </div>
          <div className="carousel-caption blur pb-5 mb-4 text-ligt">
            <h3 className="h3-responsive">Bethesda Home Care Services</h3>
            <p>Choosing what is best for a senior loved one is always difficult.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="view">
            <img src={homecare2} alt="edmonton care home"/>
            <div className="mask rgba-black-strong"></div>
          </div>
          <div className="carousel-caption blur pb-5 mb-4 text-light">
            <h3 className="h3-responsive">Bethesda Home Care Services</h3>
            <p>Bethesda offers a comprehensive level of home care services.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="view">
            <img src={homecare3} alt="disability care" />
            <div className="mask rgba-black-slight"></div>
          </div>
          <div className="carousel-caption blur pb-5 mb-4 text-light">
            <h3 className="h3-responsive">Bethesda Home Care Services</h3>
            <p>All caregivers are trained, professional, and compassionate.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>


</div>

  );
}

export default Home