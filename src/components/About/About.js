import React, { useContext } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './About.css';

const About = () => {
  const { darkMode } = useTheme();
  return (
    <section id="nosotros" className={`about ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h2>Sobre Nosotros</h2>
          <p>Conoce más sobre nuestra empresa y nuestro equipo de expertos</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Nuestra Historia</h3>
            <p>
              En Tilsoft, comenzamos con una visión clara: ofrecer soluciones tecnológicas innovadoras que impulsen el crecimiento de nuestros clientes. 
              Desde nuestra fundación, hemos trabajado incansablemente para convertirnos en un referente en el desarrollo de software a medida.
            </p>
            <p>
              Nuestro equipo está formado por profesionales apasionados por la tecnología y comprometidos con la excelencia en cada proyecto que emprendemos.
            </p>
            
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">1</div>
                <p>Clientes Satisfechos</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <p>Años de Experiencia</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img src={require("../../assets/images/homeimage.jpg")} alt="Equipo de Tilsoft" />
            </div>
          </div>
        </div>
        
        <div className="values">
          <h3>Nuestros Valores</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>Innovación</h4>
              <p>Buscamos constantemente nuevas formas de resolver problemas y mejorar nuestras soluciones.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Compromiso</h4>
              <p>Nos comprometemos con el éxito de nuestros clientes y la calidad de nuestro trabajo.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Trabajo en Equipo</h4>
              <p>Creemos en la colaboración y el trabajo en equipo para alcanzar los mejores resultados.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Excelencia</h4>
              <p>Buscamos la excelencia en cada detalle de nuestros proyectos y servicios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
