# Portafolio Tilsoft

Bienvenido al repositorio del sitio web del portafolio de Tilsoft, una empresa especializada en soluciones tecnológicas innovadoras.

## 🚀 Características

- **Diseño moderno y responsivo** que se adapta a cualquier dispositivo
- **Navegación suave** entre secciones
- **Portafolio interactivo** con filtrado por categorías
- **Formulario de contacto** funcional
- **Animaciones** para una mejor experiencia de usuario
- **Diseño limpio y profesional** con la paleta de colores corporativa

## 🎨 Paleta de Colores

- Color primario: `#4E8CAE`
- Color secundario: `#DCE5EA`
- Color de acento: `#A4CCD4`
- Blanco: `#FFFFFF`

## 🛠️ Tecnologías Utilizadas

- React.js
- React Router para la navegación
- CSS puro (sin frameworks)
- Framer Motion para animaciones
- React Icons para los íconos

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd tilsoft-portfolio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

4. Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000)

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes de React
│   ├── About/           # Sección "Sobre Nosotros"
│   ├── Contact/         # Formulario de contacto
│   ├── Header/          # Barra de navegación
│   ├── Home/            # Página de inicio
│   ├── Portfolio/       # Sección de portafolio
│   └── Services/        # Sección de servicios
├── assets/              # Recursos estáticos
│   └── images/          # Imágenes
├── styles/              # Estilos globales
├── App.js               # Componente principal
└── index.js             # Punto de entrada de la aplicación
```

## 🚀 Despliegue

Para desplegar el proyecto en producción, sigue estos pasos:

1. Crea una versión optimizada:
   ```bash
   npm run build
   ```

2. La carpeta `build` contendrá los archivos listos para producción que puedes desplegar en cualquier servicio de hosting estático como Netlify, Vercel o GitHub Pages.

## 📝 Personalización

### Cambiar el logo

1. Reemplaza el archivo `public/logo.png` con tu propio logo.
2. Asegúrate de que el logo tenga un fondo transparente para una mejor integración.

### Actualizar información de contacto

Abre el archivo `src/components/Contact/Contact.js` y actualiza la información de contacto en la sección correspondiente.

### Modificar proyectos del portafolio

Los proyectos se encuentran en el archivo `src/components/Portfolio/Portfolio.js`. Puedes agregar, eliminar o modificar los proyectos en el array `projects`.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de enviar un Pull Request.

## 📧 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarnos a través de:

- Email: info@tilsoft.com
- Teléfono: +57 123 456 7890
- Dirección: Bogotá, Colombia
