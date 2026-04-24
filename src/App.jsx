import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
    </Router>
  )
}
