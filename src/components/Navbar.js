import React from 'react';
import './Navbar.css';
import logo from '../logo.png';  

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Company Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#launch-services">Launch Services</a></li>
        {/* <li><a href="#contact-us">About</a></li> */}
        
      </ul>
    </nav>
  );
};

export default Navbar;
