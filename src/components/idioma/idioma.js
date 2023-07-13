import React, { useState, useEffect } from 'react';
import './idioma.css';

const Idioma = () => {
  const [dataBack, setDataBack] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/idiomas")
      .then(response => response.json())
      .then(data => setDataBack(data['hydra:member']))
      .catch(error => console.log('error', error));
  }, []);

  if (dataBack.length === 0) {
    return <div>Cargando...</div>;
  }

  const idioma = dataBack[0]; // Solo hay un idioma en el arreglo

  return (
    <div className="card-container">
      <div className="card">
        <h2>{idioma.idioma}</h2>
        <h3>Nivel Hablado: {idioma.nivel_hablado}</h3>
        <h3>Nivel Escrito: {idioma.nivel_escrito}</h3>
      </div>
    </div>
  );
}

export default Idioma;
