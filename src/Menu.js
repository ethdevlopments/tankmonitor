import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <nav>
        <Link to="/borewell">Borewell</Link>
        <Link to="/direct-current">Direct Current</Link>
        <Link to="/overhead-tank">Overhead Tank</Link>
        <Link to="/rsi">RSI</Link>
        <Link to="/solar">Solar</Link>
      </nav>
    </div>
  );
};

export default Menu;