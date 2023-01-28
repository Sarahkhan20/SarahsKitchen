import React from 'react';
import { images,data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';

const AwardCard = ({ award
  : { imgUrl, title, subtitle } }) => (
  <div className="laurel_award_card">
    <img src={imgUrl} alt="" srcset="" />
   <br /> <br />
    <div className="laurel_award_content">
      <p className='laurels_title' style={{color:'goldenrod'}}>{ title}</p>
      <p>{ subtitle}</p>
    </div>
  </div>
)
const Laurels = () => (
  <div className="wrapper_laurels">
      <div className="awards_images">
    <div className="laurels_info">
      <SubHeading title="Awards & recognition" />
      <h1>
        Our Laurels
        <br /> <br />
      </h1>
    
      <div className="laurels_awards">
        {data.awards.map((awards) => <AwardCard award={awards}/>)}
      </div>
    </div>
    <div className="laurels_image">
<img src={images.laurels} alt="" srcset="" />
      </div>
      </div>
  </div>
);

export default Laurels;
