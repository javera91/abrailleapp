import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Methodology.css'; // Nuevo archivo CSS
import MethodologyDiagram from '../assets/methodology-diagram.png'; // Ruta al gráfico SVG

const Methodology: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">Metodología</h1>
      <p className="section-paragraph">
      Para el desarrollo de la presente investigación se utilizó la metodología de investigación aplicada, con un enfoque en la metodología de desarrollo Design Thinking, lo que permitió una comprensión centrada en el usuario y una optimización adecuada del dispositivo electrónico.
      </p>
      
      <h2 className="subsection-title">Fases de la Metodología</h2>
      <img src={MethodologyDiagram} alt="Diagrama de las fases de Design Thinking" className="methodology-diagram" />
      
      <table className="methodology-table">
        <thead>
          <tr>
            <th>Fase</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empatizar</td>
            <td>Realización de entrevistas y talleres con miembros de la Asociación de No Videntes de la Zona Sur del Cañar (ANVIZSUC) para comprender las dificultades en el aprendizaje del Braille.</td>
          </tr>
          <tr>
            <td>Definir</td>
            <td>Identificación de las necesidades clave de los usuarios y establecimiento de objetivos claros para el desarrollo de AlphaBraille.</td>
          </tr>
          <tr>
            <td>Idear</td>
            <td>Sesiones de brainstorming para generar ideas innovadoras que aborden los problemas definidos.</td>
          </tr>
          <tr>
            <td>Prototipar</td>
            <td>Desarrollo de prototipos de bajo costo del dispositivo AlphaBraille, permitiendo ajustes rápidos basados en la retroalimentación de los usuarios.</td>
          </tr>
          <tr>
            <td>Evaluar</td>
            <td>Pruebas con usuarios reales para evaluar la efectividad del dispositivo y recopilar datos sobre el rendimiento y la satisfacción del usuario.</td>
          </tr>
        </tbody>
      </table>

      <div className="button-container">
        <Link to="/research" className="back-button">⬅ Volver a Investigación</Link>
      </div>
    </div>
  );
};

export default Methodology;
