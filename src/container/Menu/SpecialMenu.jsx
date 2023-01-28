import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data,images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='menu_content '>
    <div className="menu_box">
    <div className="menu_continer">
    <SubHeading title="Menu The fits you" />
      <h1>Today's Special</h1>
      </div>
      <br />
    <div className="special_menu">
      <div className="special_menu_left_item">
          <h3 className="menu_heading">Food and Beverages</h3>
          <div className="menu_items">
            {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title ={wine.title} price={wine.price} tags={wine.tags} />
           ) )}
          </div>
        </div>
        <div className="special_menu_img">
          <img src={images.menu} alt="" srcset="" />
        </div>
      <div className="special_menu_right_item">
          <h3 className="menu_heading">Food and Beverages</h3>
          <div className="menu_items">
            {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title ={wine.title} price={wine.price} tags={wine.tags} />
           ) )}
          </div>
      </div>
      
      </div>
      <div className='button'>
        <br /><br />
        <button className='custome_button'>View More</button>
      </div>
    </div>
    </div>
 
);

export default SpecialMenu;
