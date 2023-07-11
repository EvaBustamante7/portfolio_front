import React, { useState, useEffect } from 'react';
import './Back.css';

const Back = () => {
  const [dataBack, setDataBack] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/backs")
      .then(response => response.json())
      .then(data => setDataBack(data['hydra:member']))
      .catch(error => console.log('error', error));
  }, []);

  if (dataBack.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {dataBack.map((item, index) => (
        <div className='dataBack' key={index}>
          <h2>{item.nombre}</h2>
          <h2>{item.logo}</h2>
        </div>
      ))}
    </div>
  );
}

export default Back;
