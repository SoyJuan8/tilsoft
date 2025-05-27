import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
      
      // Update active link based on scroll position
      const sections = ['inicio', 'nosotros', 'servicios', 'portafolio', 'contacto'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <nav className="nav">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="logo" onClick={() => scrollToSection('inicio')}>
              <span className="logo-text">Tilsoft</span>
              <motion.span 
                className="logo-dot" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              />
            </Link>
          </motion.div>
          
          <div className="nav-actions">
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  className={activeLink === link.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}
                  {activeLink === link.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="active-indicator"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </a>
              ))}
            </div>

            <motion.button 
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={darkMode ? 'Modo oscuro activado' : 'Modo claro activado'}
            >
              {darkMode ? (
                <FaSun className="theme-icon" />
              ) : (
                <FaMoon className="theme-icon" />
              )}
            </motion.button>

            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
