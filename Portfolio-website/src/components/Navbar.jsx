import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/">
      <div className="logo">CH</div>
      </a>
      <div className="links">
        <a href="/EasyChauffeur">EasyChauffeur</a>
        <a href="/IvyFashion">Ivy Fashion</a>
      </div>
      <div className="contact">
      <Link to="/#contact-section">
        <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;