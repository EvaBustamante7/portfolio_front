import 'aframe'
import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Basica3D extends Component {
  render () {
    return (
      <a-scene>   
        <Link to="/">HOME</Link>
        <a-assets>
          <img id="skyTexture" src="/assets/background1.jpg" alt="Sky" />
        </a-assets>
        <a-sky src="#skyTexture" />
        <a-entity 
          geometry="primitive: box" 
          position="-1 0.5 -3" 
          rotation="0 45 0" 
          material="color: #4CC3D9" />
        <a-entity 
          geometry="primitive: sphere; radius: 1.25;" 
          position="0 1.25 -5" 
          material="color: #EF2D5E" />
        <a-entity 
          geometry="primitive: cylinder; radius: 0.5, height: 1.5" 
          position="1 0.75 -3" 
          material="color: #FFC65D" />
          
      </a-scene>


    );
  }
}

export default Basica3D;


