import './App.css';
import React from 'react';


import {Routes, Route, BrowserRouter} from 'react-router-dom';
import About from './pages/About';
import Settings from './pages/Settings';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />    // Default Path For home 
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
