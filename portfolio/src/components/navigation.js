// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/" className="nav-link" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/portfolio" className="nav-link" activeClassName="active">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link" activeClassName="active">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/resume" className="nav-link" activeClassName="active">
          Resume
        </Link>
      </li>
    </ul>

  );
}

export default Navigation;
