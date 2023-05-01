import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import Connect from './Connect'
import Skills from './Skills';
const Header = () => {
    const func = () => {
        <Connect />
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
            <a className="navbar-brand fa" href="#">Shabd Sahay</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
            <ul className='navbar-nav mb-2'>
                <li className="nav-item px-3">
                    <a className="nav-link fa active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item px-3">
                    <a className="nav-link fa active" onClick={<Skills/>}>Skills</a>
                </li>
                <li className="nav-item px-3 dropdown">
                    <a className="nav-link fa active" href="#">Projects</a>
                </li>
                <li className="nav-item px-3 dropdown">
                    <a className="nav-link fa active" href="https://twitter.com/SahayShabd"><i class="fa-brands fa-twitter" /></a>
                </li>
                <li className="nav-item px-3 dropdown">
                    <a className="nav-link fa active" href="https://www.instagram.com/sahay_shabd/?next=%2F"><i className="fa-brands fa-instagram" /></a>
                </li>
                <li className="nav-item px-3 dropdown">
                    <a className="nav-link fa active" href="https://github.com/shabd-sahay"><i className="fa-brands fa-github" /></a>
                </li>
                <li className="nav-item px-3 dropdown">
                    <button className="btn fa btn-outline-success" onClick={func}>Let's Connect</button>
                </li>
            </ul>
                
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Header
