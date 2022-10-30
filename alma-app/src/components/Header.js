import React from "react";
import { Link } from 'react-router-dom';

function Header(){

  return(
    <header>
      <div className="navbar">
        <h1>Alma Cider</h1>
        <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="">Ciders</Link>
        <Link to="/services">Services</Link>
        <Link to="">Retailers</Link>
        <Link to="/about">About Us</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;