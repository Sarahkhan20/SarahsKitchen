import React from 'react';
import { images } from '../../constants';
const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}} >
    <p className="link_cormorant">{ title}</p>
    <img src={images.spoon} alt="spoon_image" className='spoon_img' srcset="" />
  </div>
);

export default SubHeading;
