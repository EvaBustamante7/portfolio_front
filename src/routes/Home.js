import React from 'react';
import { Link } from 'react-router-dom';
import D_PERSONALES from '../components/d_personales/D_personales';
import Back from '../components/back/Back';
import Front from '../components/front/Front';

const Home = () => {
  return (

    <div>  
      <div className="home-link">
        <D_PERSONALES />
        <Back />
        <Front />
        <Link to='/'>AFRAME</Link>
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
        position="25 -15 40"
        scale="7 7 7"
        rotation="0 -10 0"
        gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/Bonsai.glb?v=1689181303572"
      ></a-entity>
      <a-entity
        position="3 6 -6"
        rotation="-20 -25 0"
        scale="7 7 7"
        gltf-model= "https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/japanes_furin_outdoor_decorative_with_animation.glb?v=1689237786678"             
      ></a-entity>
        <a-entity
        position="5 6 -4"
        scale="3 5 3"
        rotation="-90 500 0"
        gltf-model="https://cdn.glitch.global/b0453b45-002a-4e80-9b22-e40b45f5c9b9/old_colored_wooden_plank._low_poly.glb?v=1689241217040"
      ></a-entity>
      </a-scene>
    </div>

  );
}

export default Home;
