import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='aboutus' id='about'>
    <div className="G_image">
      <img src={images.G} alt srcset="" />
    </div>
    <div className="content_about">
      <div className="left_content">
      <h1 className="headtext">About Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugiat. Aut consequuntur doloribus sunt dolores ex autem sint officiis perferendis voluptate ab, minus soluta veritatis quis maxime! Ad, quibusdam quaerat?</p>
        <br />
        <button>Know More</button>
      </div>
      <div className="mid_content">
        <img src={images.knife} alt="about_spoon" className='spoon_img' srcset="" />
        </div>
       <div className="right_content">
       <h1 className="headtext">Our History</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugiat. Aut consequuntur doloribus sunt dolores ex autem sint officiis perferendis voluptate ab, minus soluta veritatis quis maxime! Ad, quibusdam quaerat?</p>
        <br />
        <button>Know More</button>
      </div>
      
    </div>
  </div>
);

export default AboutUs;
