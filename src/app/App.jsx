import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Project from '../pages/Project/Project.jsx';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<Project />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
