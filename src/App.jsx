import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import VehicleModels from "../components/VehicleModels";
import Contact from "../components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
