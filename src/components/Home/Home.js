import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Home.css';

const Home = () => {
  const { darkMode } = useTheme();
  return (
    <section id="inicio" className={`home ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="home-content">
          <h1>Soluciones Digitales a Medida</h1>
          <p>En Tilsoft, transformamos tus ideas en soluciones tecnológicas innovadoras y de alto impacto para tu negocio.</p>
          <div className="cta-buttons">
            <a href="#contacto" className="btn" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}>Contáctanos</a>
            <a href="#servicios" className="btn btn-outline" onClick={(e) => {
              e.preventDefault();
              document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
            }}>Nuestros Servicios</a>
          </div>
        </div>
        <div className="home-image">
          <img src={require("../../assets/images/homeimage.jpg")} alt="Soluciones digitales" />
        </div>
      </div>
    </section>
  );
};

export default Home;
