import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
const FindUs = () => (
  <div>
      <div className='wrapper'>
   
    <div className="wrapper_chef_info">
      <SubHeading title="Contact" />
      <h1>Find Us</h1>
    
      <div className="chef_content">
        <br />
      <div className="chef_content_quote">
    
          <br />
            <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>

            
          <br />
      </div>
      </div>
      <div className="chef_sign">
        <p>Opening Hours</p>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
            <p>Mon - Fri: 10:00 am - 02:00 am</p>
 <br /><br />
        </div>
       
        <button className='custom_button' >View Us</button>
      </div>
       <div className="wrapper_img">
      <img src={images.findus} alt="" srcset="" />
    </div>
  </div>
  </div>
);

export default FindUs;
