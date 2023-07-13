import React, { useState, useEffect } from 'react';
import './links.css';

const Links = () => {
  const [dataBack, setDataBack] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/links")
      .then(response => response.json())
      .then(data => setDataBack(data['hydra:member']))
      .catch(error => console.log('error', error));
  }, []);

  if (dataBack.length === 0) {
    return <div>Loading...</div>;
  }

  const addreses = [
    'https://github.com/EvaBustamante7',
    'https://www.linkedin.com/in/eva-bustamante-fullstack-developer/',
    'https://github.com/EvaBustamante7/HTML-CSS-JS-Gallery',
    'https://github.com/EvaBustamante7/proyecto-react',
    'https://github.com/EvaBustamante7/API-Pokemon-Javascript-Bootstrap'
  ];

  return (
    <div className="card2">
      <h1>My Projects</h1>
      <ul className="links-list">
        {dataBack.map((item, index) => (
          <li key={index} className="link-item">
            <a href={addreses[index]}>{item.nombre_links}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
