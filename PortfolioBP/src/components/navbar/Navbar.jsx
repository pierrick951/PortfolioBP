import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="NavContainer">
      <div className="logoBox">
        <h1>Pierrick Bernard</h1>
      </div>
      <ul className="listNav">
        <li className={activeLink === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => handleLinkClick('home')}>
            Home
          </a>
        </li>
        <li className={activeLink === 'projects' ? 'active' : ''}>
          <a href="#projects" onClick={() => handleLinkClick('projects')}>
            Projects
          </a>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleLinkClick('about')}>
            About
          </a>
        </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleLinkClick('contact')}>
            Contact
          </a>
        </li>
      </ul>


      {/* menu burger */}
      <div className="container__burger">
        <ul className="burgernav">
          <li >
            <a href="#home" >
              Home
            </a>
          </li>
          <li>
            <a href="#projects" >
              Projects
            </a>
          </li>
          <li >
            <a href="#about" >
              About
            </a>
          </li>
          <li>
            <a href="#contact" >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
