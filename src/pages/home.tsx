// src/pages/Home.tsx

import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header 
      className="hero" 
      style={{ 
        backgroundImage: "url('src/assets/portada.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white"
      }}
    >
      <div className="hero-content">
        <p>"Revolucionando el aprendizaje del Braille con tecnología e innovación"</p>
        <button 
          className="cta-button" 
          onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Descubre más sobre AlphaBraille"
        >
          Descubre AlphaBraille
        </button>
      </div>
      </header>

      {/* Impacto Social */}
      <section className="impact-section" id="impact">
        <h2>Justificación</h2>
        <p>Según datos de CONADIS, en la provincia de Cañar se registran 1.341 personas con 
          discapacidad visual, evidenciando la necesidad de fortalecer su acceso a la educación. 
          El aprendizaje del sistema Braille enfrenta diversas barreras, ya que los métodos 
          tradicionales pueden resultar poco estimulantes. En este contexto, el desarrollo de 
          dispositivos interactivos capaces de generar signos Braille de manera electrónica 
          representa una alternativa innovadora para optimizar el proceso de enseñanza, fomentando 
          la inclusión y la equidad en los entornos educativos.</p>
      </section>

      {/* Características */}
      <section className="features-section">
        <h2>Objetivos</h2>
        <p>Implementar las actualizaciones identificadas al dispositivo AlphaBraille para el aprendizaje de la escritura del alfabeto Braille en ANVIZSUC.</p>
        <ul>
          <li>Complementar el alfabeto Braille actual con signos diacríticos y de puntuación al usar el signo generador del dispositivo.</li>
          <li>Realizar la conectividad a la nube para registrar, visualizar errores y monitorear el progreso del usuario.</li>
          <li>Analizar los resultados obtenidos por el dispositivo AlphaBraille en su modo escritura, evaluando su facilidad de uso y utilidad pedagógica.</li>
        </ul>
      </section>

      {/* Galería de Pruebas */}
      <section className="gallery">
        <h2>Desarrollo del dispositivo</h2>
        <div className="gallery-grid">
          <figure>
            <img src="src/assets/p1.png" alt="Part1" className="gallery-img"/>
            {/*<figcaption>Sesión de prueba con estudiantes.</figcaption>*/}
          </figure>
          <figure>
            <img src="src/assets/p2.png" alt="Part2" className="gallery-img"/>
            {/*<figcaption>Interacción con el dispositivo en acción.</figcaption>*/}
          </figure>
          <figure>
            <img src="src/assets/p3.png" alt="Part3" className="gallery-img"/>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Home;
