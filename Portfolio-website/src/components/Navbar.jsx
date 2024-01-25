import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/">
      <div className="logo">   <img src="/ch-high-resolution-logo.png" alt="logo" width="90px"/>
</div>
      </a>
      <div className="flex justify-end content-center p-3">
        <div className="links mt-2 mr-1">
          <a href="/EasyChauffeur">EasyChauffeur</a>
          <a href="/IvyFashion">Ivy Fashion</a>
          <a href="/Numbify">Numbify</a>
        </div>
        <div className="contact">
        <Link to="/#contact-section">
          <button onClick={() => {
    const element = document.getElementById('contact-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }}>Contact Me</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;