import React from 'react';
import './index.css'; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Designed By :  <b><i>Jamshaid Jamil</i></b></p>
        <ul className="footer-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
