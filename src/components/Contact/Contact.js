import React, { useState, useRef } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaUser,
  FaTag,
  FaCheck,
  FaExclamationTriangle,
  FaTelegram,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const { darkMode } = useTheme();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    success: false
  });

  // Animation hooks
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous errors when user starts typing
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Por favor ingresa tu nombre' }));
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Por favor ingresa tu correo electrónico' }));
      return false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus(prev => ({ ...prev, error: 'Por favor ingresa un correo electrónico válido' }));
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'Por favor ingresa tu mensaje' }));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus({ 
      submitting: true, 
      submitted: false, 
      error: null,
      success: false
    });
    
    console.log('Iniciando envío del formulario...');
    console.log('Datos del formulario:', formData);
    
    try {
      // Usando EmailJS para manejar el envío del formulario
      console.log('Enviando a EmailJS...');
      console.log('Service ID:', 'tilsoft2025');
      console.log('Template ID:', 'templateoriana12');
      
      const result = await emailjs.sendForm(
        'tilsoft2025',
        'templateoriana12',
        formRef.current,
        'bEuRr4ka1O-YB0nJy'
      );
      
      console.log('Respuesta de EmailJS:', result);
      
      if (result.status === 200) {
        console.log('Correo enviado exitosamente');
        setFormStatus({ 
          submitting: false, 
          submitted: true, 
          success: true,
          error: null
        });
        
        // Resetear formulario
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      } else {
        console.error('Error en la respuesta de EmailJS:', result);
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setFormStatus({ 
        submitting: false, 
        submitted: true, 
        success: false,
        error: `Error al enviar el mensaje: ${error.message || 'Por favor, inténtalo de nuevo más tarde.'}`
      });
    }
  };

  // Contact information
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Ubicación', value: 'Neiva, Colombia' },
    { icon: <FaEnvelope />, title: 'Email', value: 'tilsoft123@gmail.com' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, url: '#', label: 'GitHub' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  ];

  return (
    <section id="contacto" className={`contact ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">¿Tienes un proyecto en mente? Hablemos</p>
        </motion.div>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Información de Contacto</h3>
            <p className="contact-description">
              Estamos aquí para ayudarte y responder cualquier pregunta que puedas tener. 
              ¡Esperamos saber de ti!
            </p>
            
            <ul className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="social-links">
              <h4>Síguenos</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.6 + (index * 0.1),
                      type: 'spring',
                      stiffness: 200
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <AnimatePresence>
                {formStatus.error && (
                  <motion.div 
                    className="form-message error"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <FaExclamationTriangle className="message-icon" />
                    <span>{formStatus.error}</span>
                  </motion.div>
                )}
                {formStatus.submitted && formStatus.success && (
                  <motion.div 
                    className="form-message success"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <FaCheck className="message-icon" />
                    <span>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-icon"><FaUser /></span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className={formStatus.error && !formData.name ? 'error' : ''}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-icon"><FaEnvelope /></span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu correo electrónico"
                    className={formStatus.error && !formData.email ? 'error' : ''}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-icon"><FaTag /></span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto (opcional)"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-icon"><FaPaperPlane /></span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu mensaje"
                    rows="5"
                    className={formStatus.error && !formData.message ? 'error' : ''}
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={formStatus.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus.submitting ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
