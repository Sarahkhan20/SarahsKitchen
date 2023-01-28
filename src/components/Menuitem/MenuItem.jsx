import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className="menu_item">
    <div className="menu_item_head">
      <p style={{color:"goldenrod"}}>{ title}</p>
    
       <div className="menuitem-dash"> </div>
      <div className="menuitem-price">
        <p>{ price}</p>
        </div>
       
    </div>
    <div className="menuitem-sub">
      <p>{ tags}</p>
    </div>
  </div>
);

export default MenuItem;
