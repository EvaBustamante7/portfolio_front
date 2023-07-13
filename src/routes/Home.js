import React from 'react';
import { useNavigate } from 'react-router-dom';
import D_PERSONALES from '../components/d_personales/D_personales';
import Back from '../components/back/Back';
import Front from '../components/front/Front';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    // Redirecciona a la ruta especificada utilizando navigate
    navigate(route);
  };
  return (
    <div>  
      <div className="home-link">
        <D_PERSONALES />
        <Back />
        <Front />
      </div>
      <div className='home_route'>
        <button
          onClick={() => handleClick('/')}
        >
          Home
        </button>
        <button 
          onClick={() => handleClick('/projects')}
        >
          My Projects
        </button>
      </div>
      <a-scene>
        <a-assets>
          <img id="bg_two" src="/assets/background2.jpg" alt="fondo" />
        </a-assets>
        <a-sky src="#bg_two" />
        <a-camera position="0 0 0" wasd-controls="fly: true"></a-camera>
        <a-entity
        position="-11 -6 -8"
        scale="0.05 0.05 0.05"
        gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/japanese_ceramic_brasero.glb?v=1689170102618"
      ></a-entity>
       <a-entity
        position="-6 -6 -11"
        scale="15 15 15"
        gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/3d_ramen.glb?v=1689257922919"
      ></a-entity>
      <a-entity
        position="25 -15 40"
        scale="7 7 7"
        rotation="0 -10 0"
        gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/Bonsai.glb?v=1689181303572"
      ></a-entity>
      <a-entity
        position="4.8 7.3 -7"
        rotation="-20 -25 0"
        scale="7 7 7"
        animation="property: rotation; to: 0 0 10; dir: alternate; dur: 2000; easing: linear; loop: true"
        gltf-model= "https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/japanes_furin_outdoor_decorative_with_animation.glb?v=1689237786678"             
      ></a-entity>
        <a-entity
        position="4.962 6 -5.423"
        scale="2.5 5 3"
        rotation="-89.5 488.870 0"
        gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/old_colored_wooden_plank._low_poly.glb?v=1689241217040"
      ></a-entity>
      </a-scene>
    </div>

  );
}

export default Home;
