import 'aframe';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import D_personales from '../components/d_personales/D_personales';


class Basica3D extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/home" className="home-link">
          HOME
        </Link>
        <a-scene>
          <a-assets>
            <img id="skyTexture" src="/assets/background1.jpg" alt="Sky" />
          </a-assets>
          <a-sky src="#skyTexture" />
          <a-camera position="0 0 0" wasd-controls="fly: true"></a-camera>
          
          <a-entity position="0 0 -5">
            <a-text
              value="About Me"
              align="center"
              width="15"
              position="0 0.8 0"
              font="dejavu"
              color="blue"
              opacity="0.9"
              negate="false"
              side="double"
              anchor="center"
              baseline="center"
            />
            <a-text
              value="My Proyects"
              align="center"
              width="7"
              position="0 -0.8 0"
              font="dejavu"
              color="blue"
              opacity="0.9"
              negate="false"
              side="double"
              anchor="center"
              baseline="center"
            />
            <a-image
              src="/assets/arrow.png"
              position="0 -0.5 0"
              scale="5 5 5"
            />
          </a-entity>
        </a-scene>
      </div>
    );
  }
}

export default Basica3D;
