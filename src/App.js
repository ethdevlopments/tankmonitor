import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Borewell from './components/Borewell';
import DirectCurrent from './components/DirectCurrent';
import OverheadTank from './components/OverheadTank';
import RSI from './components/RSI';
import Solar from './components/Solar';


function App() {
  return (
    <Router>
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/borewell" element={<Borewell />} />
          <Route path="/direct-current" element={<DirectCurrent />} />
          <Route path="/overhead-tank" element={<OverheadTank />} />
          <Route path="/rsi" element={<RSI />} />
          <Route path="/solar" element={<Solar />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
};

export default App;
