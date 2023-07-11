import React, { useState, useEffect } from 'react';
import './D_personales.css';

const D_PERSONALES = () => {
  const [Dpersonales, setDpersonales] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/d_personales")
      .then(response => response.json())
      .then(data => setDpersonales(data['hydra:member'][0]))
      .catch(error => console.log('error', error));
  }, []);

  if (!Dpersonales) {
    return <div>Loading...</div>;
  }

  return (
    <div className='personales'>
      <h2>{Dpersonales.nombre}</h2>
      <h2>{Dpersonales.apellidos}</h2>
      <h2>{Dpersonales.telefono}</h2>
      <h2>{Dpersonales.mail}</h2>
    </div>
  );
}

export default D_PERSONALES;
