import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='header wrapper section_padding' id='home'>
    <div className="wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className='header-h1'>The Key To Fine Dining</h1>
      <p className="link_opensans" style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui modi, ratione mollitia amet quaerat, ipsum iusto pariatur facilis quod vel esse nesciunt unde atque ut culpa dolorum quasi laudantium voluptas?
      </p>
      <button type='button' className='custom_button' >Explore Menu</button>
    </div>
    <div className="wrapper_img">
      <img src={images.welcome} alt="welcome_img" srcset="" className='food_img'/>
    </div>
  </div>
);

export default Header;
