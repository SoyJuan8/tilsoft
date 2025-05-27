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
  FaMapMarker,
  FaGlobe,
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
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({ 
      submitting: true, 
      submitted: false, 
      error: null,
      success: false
    });
    
    try {
      // Using EmailJS to handle form submission
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      if (result.status === 200) {
        setFormStatus({ 
          submitting: false, 
          submitted: true, 
          success: true,
          error: null
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({ 
        submitting: false, 
        submitted: true, 
        success: false,
        error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    }
      
      // Ocultar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    }
  };

  return (
    <section id="contacto" className={`contact ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h2>Contáctanos</h2>
          <p>Estamos listos para ayudarte a hacer realidad tus ideas</p>
        </div>
          
        <div className="contact-content">
          <div className="contact-info">
            <motion.div 
              className="info-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Ubicación</h3>
                <p>Bogotá, Colombia</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="info-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Correo Electrónico</h3>
                <p>info@tilsoft.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="info-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <h3>Teléfono</h3>
                <p>+57 123 456 7890</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
            </motion.div>
          </div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Tu nombre" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Tu correo electrónico" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Asunto" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Tu mensaje" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-submit"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <FaPaperPlane className="btn-icon" />
                  </>
                )}
              </button>
              
              {formStatus.submitted && (
                <div className="form-success">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                </div>
              )}
              
              {formStatus.error && (
                <div className="form-error">
                  {formStatus.error}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
