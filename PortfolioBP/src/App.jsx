import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import Projects from './components/Projects/MyProjects';
import Contact from '../src/components/Contact/Contact'
import ContactPage from './components/ContactPage/ContactPage';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      <Routes>
         <Route path='/' element={<HeroSection/>}/>
         <Route path='/about' element={<AboutSection/>}/>
         <Route path='/project' element={<Projects/>}/>
         <Route path='/contact' element={<ContactPage/>}/>

      </Routes>

   


        <Contact />
      </BrowserRouter>

    </div>
  );
}

export default App;