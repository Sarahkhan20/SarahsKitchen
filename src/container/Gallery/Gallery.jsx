import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

return (
  <div className='gallery_wrapper'>
    <div className="gallery_content">
    <SubHeading className="gallery_head" title={'Instagram'} />
    <h1>Photo Gallery</h1>
    <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit doloremque earum ipsum cupiditate! Cum, dignissimos eum nobis nam natus minus cupiditate omnis necessitatibus architecto suscipit assumenda, deleniti iusto est?</p>
    <br /> <br />
    <button className="custom_button">View More</button>
      <br /> <br />
      </div>
    <div className="gallery_images">
      <div className="image_container" ref={scrollRef}>
        {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
          <div className="gallery-images_card" key={`gallery_image-${index + 1}`
        
          }>
            <img src={image} alt="" srcset="" />
            <BsInstagram className='gallery_image_icon'/>
          </div>
        ))}
      </div>
 </div>
  <div className="image_arrows">
      <BsArrowLeftShort className='arrow_icon' onClick={() => scroll('left')}/>
      <BsArrowRightShort className='arrow_icon' onClick={() => scroll('right')}/>
    </div>
     </div>
);

};
export default Gallery;
