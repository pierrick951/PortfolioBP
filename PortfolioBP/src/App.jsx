import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Skill from './components/Skill'
import NotFound from './components/NotFound'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
       <Navbar>
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/skill" element={<Skill/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="*" element={<NotFound/>}/>
        </Routes>
       </Navbar>     
      </BrowserRouter>
    </>
  )
}

export default App
