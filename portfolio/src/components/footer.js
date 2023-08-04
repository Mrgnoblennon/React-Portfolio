// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer">
      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
