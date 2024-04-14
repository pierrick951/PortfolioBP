import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/> 
      <HeroSection/>
      <AboutSection/>
      
    </div>
  );
}

export default App;