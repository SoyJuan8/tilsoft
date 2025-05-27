import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaLightbulb } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const { darkMode } = useTheme();

  return (
    <section id="portafolio" className={`portfolio ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="portfolio-section-title">
          <span className="portfolio-section-subtitle">Nuestro Trabajo</span>
          <h2>Portafolio</h2>
          <p className="portfolio-section-description">
            Descubre nuestros proyectos más recientes y cómo podemos ayudarte a hacer realidad tus ideas.
          </p>
        </div>

        <div className="coming-soon-container">
          <motion.div 
            className="coming-soon-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="decorative-dots top-right"></div>
            <div className="decorative-dots bottom-left"></div>
            
            <motion.div 
              className="coming-soon-icon"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <FaRocket />
            </motion.div>
            
            <h3 className="coming-soon-title">¡Próximamente!</h3>
            
            <p className="coming-soon-text">
              Estamos preparando algo increíble para ti. Nuestro portafolio está en construcción y pronto podrás ver nuestros trabajos más recientes. Mientras tanto, no dudes en contactarnos para más información.
            </p>
            
            <div className="coming-soon-features">
              <motion.div 
                className="feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="feature-icon">
                  <FaCode />
                </div>
                <p>Proyectos innovadores</p>
              </motion.div>
              
              <motion.div 
                className="feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="feature-icon">
                  <FaLightbulb />
                </div>
                <p>Soluciones creativas</p>
              </motion.div>
            </div>
            
            <motion.a 
              href="#contacto" 
              className="coming-soon-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctanos Ahora
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
