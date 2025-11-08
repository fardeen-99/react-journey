export const Footer = () => {
  return (
    <>
      <div className="final">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-section">
                <div className="footer-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="#64CCC5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M11 9h4a2 2 0 0 0 2-2V3"></path>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="M7 21v-4a2 2 0 0 1 2-2h4"></path>
                    <circle cx="15" cy="15" r="2"></circle>
                  </svg>
                  <span>top Circuits</span>
                </div>
                <p className="footer-desc">
                  Providing high-quality PCB manufacturing solutions for
                  electronics innovators worldwide.
                </p>

                <div className="footer-socials">
                  <a href="#" target="_blank" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" target="_blank" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" target="_blank" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" target="_blank" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="footer-section">
                <h3>Services</h3>
                <ul>
                  <li><a href="#moto">Prototype PCB</a></li>
                  <li><a href="#moto">Production PCB</a></li>
                  <li><a href="#moto">Advanced PCB</a></li>
                  <li><a href="#moto">Custom Design</a></li>
                  <li><a href="#moto">PCB Assembly</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Company</h3>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#moto">Our Technology</a></li>
                  <li><a href="#main4">Why Choose Us</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Support</h3>
                <ul>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#faq">FAQs</a></li>
                  <li><a href="#terms">Terms & Conditions</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#shipping">Shipping Information</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2025 top Circuits. All rights reserved.</p>
              <div className="footer-links">
                <a href="#terms">Terms</a>
                <a href="#privacy">Privacy</a>
                <a href="#cookies">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
