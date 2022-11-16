import React from "react";
import { Link } from 'react-router-dom';
import banner from '/home/ickus/Development/code/alma/alma-app/src/images/banner.png';

function Header(){

  const image = <img alt="banner" src={banner} id='banner-logo'></img>

  return(
    <header>
      
      <div className="navbar">
        <div id="nav-links">
        
        <Link to="/ciders">Ciders</Link>
        <Link to="/services">Services</Link>
        <Link to="/retailers">Retailers</Link>
        <Link to="/about">About Us</Link>
        <Link to="/">{image}</Link>
        </div>

      </div>
    </header>
  )
}

export default Header;