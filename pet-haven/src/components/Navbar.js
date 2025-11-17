import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <nav className="nav-inner">
        <NavLink to="/" className="brand">
          Pet Heaven
        </NavLink>
        <ul className="links">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/adopt">Adopt</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help Us</NavLink>
          </li>
          <li>
            <NavLink to="/donate">Donate</NavLink>
          </li>
        </ul>
        <div className="auth">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register" className="btn">
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
