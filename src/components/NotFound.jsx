// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <img src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" alt="Imagen de error" className="mt-4 w-full" />
      <Link to="/">
        <button className="mt-4 px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-700">
          Volver a la página de inicio
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
