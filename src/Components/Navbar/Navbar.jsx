import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <span className="logo">Jmoversandshakers</span>
      <div className="navbar-links">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>Contacts</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
        </ul>
      </div>
      {!menuActive && (
        <span className="material-symbols-outlined menu" onClick={toggleMenu}>
          menu
        </span>
      )}
      <div className={`panel ${menuActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined close" onClick={toggleMenu}>
          close
        </span>
        <ul className="panel-list">
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>Contacts</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
