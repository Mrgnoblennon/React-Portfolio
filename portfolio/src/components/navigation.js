// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../logo.svg'

function Navigation() {
  return (
    
  <nav class="navbar" role="navigation" aria-label="main navigation" id="nav">
  
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="../logo192.png" alt="react logo"></img>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu">

    <div class="navbar-start">

      <Link to="/" class="navbar-item">
        Home
      </Link>

      <Link to="/about" class="navbar-item">
        About
      </Link>

      <Link to="/portfolio" class="navbar-item">
        Portfolio
      </Link>

      <Link to="/contact"class="navbar-item">
        Contact
      </Link>

      <Link to="/resume" class="navbar-item">
        Resume
      </Link>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>GitHub</strong>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</nav>



  );
}

export default Navigation;
