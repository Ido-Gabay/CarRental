import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { VehicleModels } from "./VehicleModels";
import { Contact } from "./Contact";
import { Login } from './Login'

import { Person } from "react-bootstrap-icons";

export default function NavBar() {
  return (
    <div className="navbar-sticky" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className='home_logo' src="https://cdn.pixabay.com/photo/2014/04/03/00/41/race-car-309123_1280.png" alt='' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav_items">
                <Link to="/" className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item nav_items">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item nav_items">
                <Link to="/vehicleModels" className="nav-link">Vehicle Models</Link>
              </li>
              <li className="nav-item nav_items">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <div className="nav_login">
              <Link to="/login" className="nav-link"><Person className="login_logo" /></Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicleModels" element={<VehicleModels />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
