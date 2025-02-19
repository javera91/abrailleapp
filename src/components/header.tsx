// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="src\assets\logo_white.png" alt="" />
        
      </div>

      <div 
        className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav>
        <ul className={menuOpen ? 'show' : ''}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active' : '')} 
              end
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/research" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Investigación
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/team" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Equipo
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
