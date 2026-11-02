import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../pages/Home/Home.jsx';
import Project from '../pages/Project/Project.jsx';

function RouteTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isVersion1 = pathname === '/v1' || pathname.startsWith('/v1/') ||
      ['/projects', '/contact', '/experience'].includes(pathname);
    document.title = `Madhav Bondhare | Full Stack Developer · Version ${isVersion1 ? '1' : '2'}`;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <RouteTitle />
      <Routes>
       
        <Route path="/projects" element={<Project />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
