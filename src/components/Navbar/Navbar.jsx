import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={images.gericht} alt="logo" srcset="" />
      </div>
      <ul className='navbar-links'>
        <li className='link-opensans'><a href="#home">Home</a></li>
        <li className='link-opensans'><a href="#about">About</a></li>
        <li className='link-opensans'><a href="#menu">Menu</a></li>
        <li className='link-opensans'><a href="#awards">Awards</a></li>
        <li className='link-opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className='link_opensans'>Log In/Register</a>
    
        <a href="/" className='link_opensans'>Book Table</a>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="white" fontSize={27} onClick={() => { setToggleMenu(true)}}></GiHamburgerMenu>
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay_menu" onClick={() => { setToggleMenu(false)}} />
            <ul className='navbar-smallscreen-links'>
              <li ><a href="#home" onClick={() => { setToggleMenu(false)}}>Home</a></li>
              <li><a href="#about" onClick={() => { setToggleMenu(false)}}>About</a></li>
              <li><a href="#menu" onClick={() => { setToggleMenu(false)}}>Menu</a></li>
              <li><a href="#awards" onClick={() => { setToggleMenu(false)}}>Awards</a></li>
              <li><a href="#contact" onClick={() => { setToggleMenu(false)}}>Contact</a></li>
            </ul>
          </div>
        )}
      
      </div>
    </nav>
  );
};

export default Navbar;
