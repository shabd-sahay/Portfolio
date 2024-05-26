import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setShowHeader(true);
  };

  const handleMouseLeave = () => {
    setShowHeader(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'bg-primary' : 'bg-transparent'} ${showHeader ? 'show' : 'hide'} fixed-top`}>
        <div className="container-fluid">
          <a className="navbar-brand fa" href="#">Shabd Sahay</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
            <ul className='navbar-nav mb-2'>
              <li className="nav-item px-3">
                <a className="nav-link fa active" href="#" onClick={() => scrollToSection('home')}>Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fa active" href="#" onClick={() => scrollToSection('skills')}>Skills</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fa active" href="#" onClick={() => scrollToSection('works')}>Projects</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fa active" href="https://twitter.com/SahayShabd">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fa active" href="https://www.instagram.com/sahay_shabd/?next=%2F">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fa active" href="https://github.com/shabd-sahay">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fa active" href="#" onClick={() => scrollToSection('contact')}>Let's Connect</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
