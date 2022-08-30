import React from "react";
import { Link } from 'react-router-dom';

function Header(){

  return(
    <header>
      <div className="navbar">
        <h1>Alma Cider</h1>
        <Link to="">Home</Link>
        <Link to="">Services</Link>
        <Link to="">Retailers</Link>
        <Link to="">Photo Gallery</Link>
        <Link to="">About Us</Link>


      </div>
    </header>
  )
}

export default Header;