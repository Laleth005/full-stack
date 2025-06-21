import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Welcome from './welcome';
import Skills from './Skills';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import State from './hooks/State';
import Form from './hooks/Form';
import Effect from './hooks/Effect'; // 🔹 Import here

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/form' element={<Form />} />
      </Routes>

      <Welcome name='Kiruthik' country='India' />
      <h1>HELLO WORLD</h1>

      <div id="skills-section">
        <Skills skill={['React', 'Node', 'Express', 'MangoDb']} />
      </div>

      <State />
      <Effect /> {/* 🔹 Added here */}
    </>
  );
}

export default App;
