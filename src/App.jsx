import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Project from './Project';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
      </Routes>
    </Router>
  )
}
