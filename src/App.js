// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StockGraph from './components/StockGraph';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock-graph" element={<StockGraph />} />
      </Routes>
    </Router>
  );
}

export default App;
