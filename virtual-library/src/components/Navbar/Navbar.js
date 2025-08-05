import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/books', label: 'Books' },
    { path: '/about', label: 'About' }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <motion.div 
            className="logo-icon"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            📚
          </motion.div>
          <span className="logo-text">Virtual Library</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-active' : ''}`}>
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.path}
                className="navbar-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`navbar-link ${location.pathname === item.path ? 'navbar-link-active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="navbar-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>
          </div>
        </div>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'navbar-toggle-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;