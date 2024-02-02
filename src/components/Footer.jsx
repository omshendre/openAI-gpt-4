// import React from 'react';
// import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      
        <div className="footer-text">© {new Date().getFullYear()} Om Shendre</div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/om-shendre-4560211ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/omshendre"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
     
    </footer>
  );
};

export default Footer;
