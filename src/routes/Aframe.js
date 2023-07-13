import 'aframe';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Basica3D = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    // Redirecciona a la ruta especificada utilizando navigate
    navigate(route);
  };

  return (
    <div>
      <div className='route'>
        <button
          onClick={() => handleClick('/home')}
        >
          About Me
        </button>
        <button 
          onClick={() => handleClick('/projects')}
        >
          My Projects
        </button>
      </div>
      <a-scene>
        <a-assets>
          <img id="skyTexture" src="/assets/background1.jpg" alt="Sky" />
        </a-assets>
        <a-sky src="#skyTexture" />
        <a-camera position="-2 -2 6" rotation="-12.261 15.241 0.000" wasd-controls="fly: true"></a-camera>


        <a-entity position="3 -2 -8" rotation="0 120 0" scale="0.4 0.4 0.4" animation="property: rotation; to: 0 30 15; dir: alternate; dur: 3500; easing: linear; loop: true">
          <a-gltf-model src="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/carp_flag_koinobori.glb?v=1689181284151"></a-gltf-model>
        </a-entity>

        <a-entity
          position="-12 -10 -6"
          scale="0.03 0.03 0.03"
          gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/sakura_tree.glb?v=1689194080851"
        ></a-entity>
        <a-entity
          position="-14 -10 -5"
          scale="1 1 1"
          gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/stylized_cherry_blossom_flower.glb?v=1689195044056"
        ></a-entity>
        <a-entity
          position="-15 -10 -5"
          scale="1 1 1"
          gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/stylized_cherry_blossom_flower.glb?v=1689195044056"
        ></a-entity>
        <a-entity
          position="-15 -10 -4"
          scale="1 1 1"
          gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/stylized_cherry_blossom_flower.glb?v=1689195044056"
        ></a-entity>
        <a-entity
          position="-16 -10 -4"
          scale="1 1 1"
          gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/stylized_cherry_blossom_flower.glb?v=1689195044056"
        ></a-entity>
        <a-entity
          position="-16 -10 -3"
          scale="1 1 1"
          gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/stylized_cherry_blossom_flower.glb?v=1689195044056"
        ></a-entity>
         <a-entity
          position="-17 -10 -3"
          scale="1 1 1"
          gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/stylized_cherry_blossom_flower.glb?v=1689195044056"
        ></a-entity>

        <a-entity
          position="-10 -9 -6"
          scale="4 4 4 "
          gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/japanese_lamp.glb?v=1689169673741"
        ></a-entity>
      </a-scene>
    </div>
  );
};

export default Basica3D;
