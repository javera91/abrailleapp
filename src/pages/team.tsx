import React from "react";
import '../styles/team.css';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transition-transform hover:scale-105">
        Nuestro Equipo
      </h1>

      {/* Contenedor para evitar el colapso en pantallas pequeñas */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-3 gap-6 w-full">
          {/* Miembro 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-3">
            <img 
              src="src/assets/a1.png"
              alt="Gabriel Mateo Campo Guerrero"
              className="w-full h-48 object-cover rounded-t-xl transition-transform hover:scale-105"
            />
            <h2 className="font-semibold text-gray-800 mt-1">Gabriel Mateo Campo Guerrero</h2>
            <p className="text-gray-600">gmcampo@sudamericano.edu.ec</p>
            <p className="mt-2 text-gray-700">
              Gabriel es un desarrollador apasionado que se involucra en proyectos innovadores para mejorar la educación.
            </p>
          </div>
          {/* Miembro 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-3">
            <img 
              src="src/assets/a2.png"
              alt="José Antonio Vera Montes"
              className="w-full h-48 object-cover rounded-t-xl transition-transform hover:scale-105"
            />
            <h2 className="font-semibold text-gray-800 mt-1">José Antonio Vera Montes</h2>
            <p className="text-gray-600">javera@sudamericano.edu.ec</p>
            <p className=" text-gray-700">
              José es un experto en gestión de proyectos, siempre buscando la mejor manera de optimizar recursos.
            </p>
          </div>
          {/* Miembro 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-3">
            <img 
              src="src/assets/a3.png"
              alt="Manuel Rubén Villa Guillermo"
              className="w-full h-48 object-cover rounded-t-xl transition-transform hover:scale-105"
            />
            <h2 className="font-semibold text-gray-800 mt-1">Manuel Rubén Villa Guillermo</h2>
            <p className="text-gray-600">mrvilla.2@sudamericano.edu.ec</p>
            <p className="text-gray-700">
              Manuel aporta su experiencia en desarrollo de software, enfocándose en soluciones escalables.
            </p>
          </div>
        </div>
      </div>

      {/* Imagen Grande del Equipo */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Compromiso</h2>
        <img 
          src="src/assets/img_team.jpeg"
          alt="Equipo trabajando juntos"
          className="max-w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-105"
        />
        <p className="text-gray-600">
          Juntos, trabajamos para crear un futuro mejor a través de la innovación y la colaboración.
        </p>
      </div>
    </div>
  );
};

export default Team;
