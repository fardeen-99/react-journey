import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-section">
            <div className="footer-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#64CCC5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M11 9h4a2 2 0 0 0 2-2V3"></path>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="M7 21v-4a2 2 0 0 1 2-2h4"></path>
                <circle cx="15" cy="15" r="2"></circle>
              </svg>
              <span>top Circuits</span>
            </div>
            <p className="footer-desc">
              Providing high-quality PCB manufacturing solutions for electronics innovators worldwide.
            </p>

            <div className="footer-socials">
              <a href="" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/feature">Prototype PCB</Link></li>
              <li><Link to="/feature">Production PCB</Link></li>
              <li><Link to="/feature">Advanced PCB</Link></li>
              <li><Link to="/feature">Custom Design</Link></li>
              <li><Link to="/feature">PCB Assembly</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="#moto">Our Technology</Link></li>
              <li><Link to="/whyus">Why Choose Us</Link></li>
              <li><Link to="#careers">Careers</Link></li>
              <li><Link to="#blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="#faq">FAQs</Link></li>
              <li><Link to="#terms">Terms & Conditions</Link></li>
              <li><Link to="#privacy">Privacy Policy</Link></li>
              <li><Link to="#shipping">Shipping Information</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 top Circuits. All rights reserved.</p>
          <div className="footer-links">
            <Link to="#terms">Terms</Link>
            <Link to="#privacy">Privacy</Link>
            <Link to="#cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
