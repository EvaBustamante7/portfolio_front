import React, { useState, useEffect } from 'react';
import './Front.css';

const Front = () => {
  const [dataBack, setDataBack] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/fronts")
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
      <div className='dataFront' key={index}>
        <h2>{item.nombre}</h2>
        <img id='logo' src={`http://127.0.0.1:8000/front/front/${item.logo}`} alt={item.nombre} />
      </div>
    ))}
  </div>
  );
}

export default Front;
