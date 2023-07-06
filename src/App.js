import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Aframe from './routes/Aframe';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aframe' element={<Aframe />} />
     </Routes>

    </>
  );
}

export default App;
