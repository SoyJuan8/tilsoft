import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaServer, 
  FaChartLine, 
  FaPalette, 
  FaShieldAlt,
  FaArrowRight,
  FaRegLightbulb,
  FaCode,
  FaMobile,
  FaServer as FaServerAlt,
  FaChartBar,
  FaPencilRuler,
  FaLock
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { darkMode } = useTheme();

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, rápidos y optimizados para motores de búsqueda que se adaptan perfectamente a todos los dispositivos.',
      features: ['Diseño Responsivo', 'Optimización SEO', 'Tiendas en Línea', 'Landing Pages'],
      color: '#4E8CAE',
      gradient: 'linear-gradient(135deg, #4E8CAE 0%, #6c9bc5 100%)',
      iconComponent: FaCode
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android que ofrecen una experiencia de usuario excepcional.',
      features: ['iOS y Android', 'Aplicaciones Híbridas', 'UI/UX Móvil', 'Publicación en Tiendas'],
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
      iconComponent: FaMobile
    },
    {
      id: 3,
      icon: <FaServer />,
      title: 'Backend y APIs',
      description: 'Construimos APIs robustas y escalables utilizando las últimas tecnologías para garantizar el mejor rendimiento de tus aplicaciones.',
      features: ['APIs RESTful', 'Bases de Datos', 'Autenticación', 'Microservicios'],
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #6EE7E7 100%)',
      iconComponent: FaServerAlt
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: 'Marketing Digital',
      description: 'Estrategias de marketing digital personalizadas para aumentar la visibilidad de tu marca y atraer más clientes potenciales.',
      features: ['SEO', 'Publicidad Digital', 'Redes Sociales', 'Analítica Web'],
      color: '#FF9F43',
      gradient: 'linear-gradient(135deg, #FF9F43 0%, #FFC078 100%)',
      iconComponent: FaChartBar
    },
    {
      id: 5,
      icon: <FaPalette />,
      title: 'Diseño UI/UX',
      description: 'Diseños intuitivos y atractivos centrados en la experiencia del usuario para maximizar la conversión y la satisfacción.',
      features: ['Diseño de Interfaz', 'Experiencia de Usuario', 'Prototipado', 'Pruebas de Usabilidad'],
      color: '#9C27B0',
      gradient: 'linear-gradient(135deg, #9C27B0 0%, #E040FB 100%)',
      iconComponent: FaPencilRuler
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: 'Seguridad Informática',
      description: 'Protegemos tus sistemas y datos con las mejores prácticas de seguridad informática y soluciones personalizadas.',
      features: ['Auditorías', 'Pentesting', 'Ciberseguridad', 'Cumplimiento'],
      color: '#2ECC71',
      gradient: 'linear-gradient(135deg, #2ECC71 0%, #58D68D 100%)',
      iconComponent: FaLock
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="servicios" className={`services ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <motion.div 
          className="services-section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="services-section-subtitle">Lo que ofrecemos</span>
          <h2>Nuestros Servicios</h2>
          <p className="services-section-description">Soluciones tecnológicas integrales diseñadas para impulsar tu negocio al siguiente nivel</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                '--card-color': service.color,
                '--card-gradient': service.gradient
              }}
            >
              <div className="service-card-inner">
                <div className="service-icon-container">
                  <div className="service-icon-bg" style={{ background: service.gradient }}>
                    <service.iconComponent className="service-icon" />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="service-cta">
                  <span>Más información</span>
                  <FaArrowRight className="cta-arrow" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="cta-content">
            <div className="cta-icon">
              <FaRegLightbulb />
            </div>
            <div>
              <h3>¿Tienes un proyecto en mente?</h3>
              <p>Hablemos sobre cómo podemos ayudarte a hacerlo realidad con nuestras soluciones personalizadas.</p>
            </div>
            <a 
              href="#contacto" 
              className="cta-button"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Iniciar Proyecto</span>
              <FaArrowRight className="button-arrow" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
