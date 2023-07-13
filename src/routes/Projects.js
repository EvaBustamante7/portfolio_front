import React from 'react'
import { useNavigate } from 'react-router-dom';
import Idioma from '../components/idioma/idioma'
import Links from '../components/links/links'

const Projects = () => {
  const divStyle = {
    backgroundImage: 'url("https://www.xtrafondos.com/wallpapers/cerezo-en-castillo-japones-en-el-monte-fuji-9875.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', 
    width: '100%', 
  };
  const navigate = useNavigate();
  const handleClick = (route) => {
    // Redirecciona a la ruta especificada utilizando navigate
    navigate(route);
  };

  return (
    <div style={divStyle}>
      <Idioma/>
      <Links/>
      <div className='home_route'>
        <button
          onClick={() => handleClick('/')}
        >
          Home
        </button>
        <button 
          onClick={() => handleClick('/home')}
        >
          About Me
        </button>
      </div>
    </div>
  )
}

export default Projects