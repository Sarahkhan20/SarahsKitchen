import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter_heading">
      <SubHeading title="Newsletter" />
      <h1>Subscribe To Our Newsletter</h1>
      <p>And never miss our latest Updates!</p>
    </div>

    <div className="newletter_input">
      <input type="email" placeholder='Enter your Email Adress'/>
      <button className='custom_buttom'> Subscribe </button>
    </div>
 </div>
);

export default Newsletter;
