import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  const [personData, setPersonData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/d_personales")
      .then(response => response.json())
      .then(data => setPersonData(data['hydra:member'][0]))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div>
      <h1>Hola</h1>
      {personData && (
        <div>
          <h2>{personData.nombre}</h2>
          <h2>{personData.apellidos}</h2>
        </div>
      )}
      <Link to='/aframe'>AFRAME</Link>
    </div>
  );
}

export default Home;
