// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="nav">
  
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu">

    <div class="navbar-start">

      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Portfolio
      </a>

      <a class="navbar-item">
        Contact
      </a>

      <a class="navbar-item">
        Resume
      </a>

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
