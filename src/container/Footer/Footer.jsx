import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import {  Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="footer">
 
    <Newsletter />
    <div className="footer_area">
    <div className="footer_links">
      <div className="footer_contact">
        <h1>Contact Us</h1>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
      </div>
      <div className="footer_logo">
        <img src={images.gericht} alt="" srcset="" />
          <p>&quot; The best way to find yourself is to lose yourself in the service of others. &quot; <br /> </p>
          
          <img src={images.spoon} alt="" srcset="" className='spoon_image' />
       
          <div className="footer_links_icon">
              
          <FiFacebook />
          <FiInstagram />
          <FiTwitter/>
        </div>
      </div>
      <div className="footer_link_works">
        <h1>Contact Us</h1>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
      </div>
      </div>
      </div>
  </div>
);

export default Footer;
