import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Navbar from './Components/Navbar.js';
import UserProfile from './Components/UserProfile.js';
import Dashboard from './Components/Dashboard.js';
import Settings from './Components/Settings.js';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userName" element={<UserProfile />} />
        <Route path="/dashboard/*" element={<Dashboard />} >
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
