// Header.js
import React from 'react';
import Navigation from './navigation';

function Header() {
  return (
    
    <div>
    <Navigation />
    <section className="hero is-link is-fullheight-with-navbar" id="header">
      <div className="hero-body">
        <p className="title">
          Fullheight hero with navbar
        </p>
      </div>
    </section>
  </div>
  );
}


export default Header;
