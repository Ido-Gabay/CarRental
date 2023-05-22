import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
