import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx';
import EasyChauffeur from './pages/EasyChauffeur.jsx';
import IvyFashion from './pages/IvyFashion.jsx';
import Numbify from './pages/Numbify.jsx';
import NoctuqueFinance from './pages/NoctuqueFinance.jsx';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/EasyChauffeur" element={<EasyChauffeur />} />
      <Route path="/IvyFashion" element={<IvyFashion />} />
      <Route path="/Numbify" element={<Numbify />} />
      <Route path="/NoctuqueFinance" element={<NoctuqueFinance />} />
    </Routes>
  )
}

export default App
