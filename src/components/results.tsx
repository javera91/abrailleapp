import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Results.css'; // Nuevo archivo CSS

const Results: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">Resultados</h1>
      <p className="section-paragraph">
      Para validar la efectividad de la versión optimizada de AlphaBraille, 
      se realizó una prueba en la Asociación ANVIZSUC con la participación de 
      dos docentes, del coordinador. Antes de la evaluación, se llevó a cabo 
      una inducción sobre el propósito, funcionamiento y mejoras del dispositivo. 
      Los participantes expresaron su consentimiento para la prueba y evaluaron 
      su desempeño en el aprendizaje de la escritura del alfabeto Braille.
      </p>
      {/*<table className="results-table">
        <thead>
          <tr>
            <th>Participante</th>
            <th>Edad</th>
            <th>Tiempo de uso (minutos)</th>
            <th>Progreso (letras logradas)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Participante 1</td>
            <td>19</td>
            <td>5</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Participante 2</td>
            <td>22</td>
            <td>3</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Participante 3</td>
            <td>32</td>
            <td>10</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>*/}
      <p className="section-paragraph">
      A continuación, se presenta una tabla comparativa con criterios clave para medir 
      la aceptación y funcionalidad del dispositivo, considerando aspectos como facilidad 
      de uso, utilidad pedagógica y retroalimentación auditiva. La evaluación se realizó 
      mediante una escala cualitativa con tres niveles: Alta, Media y Baja, reflejando 
      el grado de satisfacción y efectividad percibida en cada criterio.
      </p>
      <img src="/src/assets/graf_resultados.png" alt="Gráfica de radar de resultados" className="responsive-image" />

      <div className="button-container">
        <Link to="/research" className="back-button">⬅ Volver a Investigación</Link>
      </div>
    </div>
  );
};

export default Results;
