import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='wrapper'>
    <div className="wrapper_img">
      <img src={images.chef} alt="" srcset="" />
    </div>
    <div className="wrapper_chef_info">
      <SubHeading title="Chef's word" />
      <h1>What we believe in</h1>
    
      <div className="chef_content">
        <br />
      <div className="chef_content_quote">
          <img src={images.quote} alt="" srcset="" />
          <br /><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nulla doloremque inventore, reprehenderit vero, veniam, commodi quisquam voluptate quod vitae ipsam magni excepturi harum delectus? Ea delectus quaerat ex quasi?</p>
          <br />
      </div>
      </div>
      <div className="chef_sign">
        <p>Harry styles</p>
        <p>CHEF & FOUNDER</p>
        <br />
        <img src={images.sign} alt="" srcset="" />
      </div>
      </div>
  </div>
);

export default Chef;
