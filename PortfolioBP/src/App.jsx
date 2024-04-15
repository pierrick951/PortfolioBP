import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import Projects from './components/Projects/MyProjects';
import Contact from '../src/components/Contact/Contact'
import './App.css';
import MyProjects from './components/Projects/MyProjects';

function App() {
  return (
    <div>
      <Navbar/> 
      <HeroSection/>
      <AboutSection/>
      <MyProjects/>
      <Contact/>
      
    </div>
  );
}

export default App;