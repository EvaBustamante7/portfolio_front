import React from 'react';
import { Link } from 'react-router-dom';
import D_PERSONALES from '../components/d_personales/D_personales';
import Back from '../components/back/Back';

const Home = () => {
  return (
    <div>
      <div className="container">
        <a-scene>
          <div className="home-link"> 
            <h1>Hola</h1>
            <D_PERSONALES/>
            <Back/>
            <Link to='/'>AFRAME</Link>
          </div>
          <a-assets>
            <img id="bg_two" src="/assets/background2.jpg" alt="fondo" />
          </a-assets>
          <a-sky src="#bg_two" />
          <a-camera position="0 0 0" wasd-controls="fly: true"></a-camera>
        </a-scene>
      </div>
    </div>
  );
}

export default Home;
