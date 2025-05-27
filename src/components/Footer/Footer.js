import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaRegClock } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="company-name">Tilsoft</h3>
            <p className="footer-description">
              Soluciones tecnológicas innovadoras para impulsar tu negocio en la era digital.
            </p>
            <div className="social-links">
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="social-icon" />
              </a>
              <a href="mailto:contacto@tilsoft.com" aria-label="Email">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-links-container">
            <div className="footer-links">
              <h4 className="footer-heading">Enlaces Rápidos</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection('inicio')}>
                    Inicio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('sobre-nosotros')}>
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('servicios')}>
                    Servicios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('portafolio')}>
                    Portafolio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacto')}>
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-heading">Contáctanos</h4>
              <ul>
                <li className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Bogotá, Colombia</span>
                </li>
                <li className="contact-item">
                  <FaPhone className="contact-icon" />
                  <a href="tel:+571234567890">+57 123 456 7890</a>
                </li>
                <li className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:contacto@tilsoft.com">contacto@tilsoft.com</a>
                </li>
                <li className="contact-item">
                  <FaRegClock className="contact-icon" />
                  <span>Lun - Vie: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tilsoft. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="/politica-privacidad">Política de Privacidad</a>
            <span className="divider">|</span>
            <a href="/terminos-servicio">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
