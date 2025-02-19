import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Conclusions.css'; // Nuevo archivo CSS

const Conclusions: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">Conclusiones</h1>
      <p className="section-paragraph">
      Las actualizaciones en AlphaBraille han optimizado su funcionalidad en ANVIZSUC, 
      evidenciando que es un dispositivo intuitivo y fácil de usar, además de ser una 
      herramienta pedagógica eficaz para docentes y personas con discapacidad visual.
      </p>
      <div className="button-container">
        <Link to="/research" className="back-button">⬅ Volver a Investigación</Link>
      </div>
    </div>
  );
};

export default Conclusions;
