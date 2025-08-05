import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    library: [
      { name: 'Browse Books', path: '/books' },
      { name: 'New Arrivals', path: '/books?sort=year' },
      { name: 'Popular Books', path: '/books?category=Bestseller' },
      { name: 'Categories', path: '/books' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Mission', path: '/about#mission' },
      { name: 'Team', path: '/about#team' },
      { name: 'Careers', path: '#' }
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Contact Us', path: '/about#contact' },
      { name: 'Reading Guide', path: '#' },
      { name: 'Technical Support', path: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Copyright', path: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'Discord', icon: '🎮', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <motion.div 
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link to="/">
                  <span className="logo-icon">📚</span>
                  <span className="logo-text">Virtual Library</span>
                </Link>
              </motion.div>
              <p className="footer-description">
                Your digital sanctuary for literature. Discover, explore, and fall in love 
                with books from around the world. Reading made accessible for everyone, everywhere.
              </p>
              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-link"
                      title={social.name}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="footer-links">
              <div className="footer-section">
                <h4>Library</h4>
                <ul>
                  {footerLinks.library.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Company</h4>
                <ul>
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Support</h4>
                <ul>
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Get the latest book recommendations and library updates delivered to your inbox.</p>
              <form className="newsletter-form">
                <div className="newsletter-input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-email"
                  />
                  <motion.button
                    type="submit"
                    className="newsletter-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
              <p className="newsletter-disclaimer">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Virtual Library. All rights reserved. Made with ❤️ for book lovers worldwide.
              </p>
            </div>
            <div className="footer-bottom-links">
              <Link to="#" className="footer-bottom-link">Privacy</Link>
              <Link to="#" className="footer-bottom-link">Terms</Link>
              <Link to="#" className="footer-bottom-link">Cookies</Link>
              <Link to="#" className="footer-bottom-link">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;