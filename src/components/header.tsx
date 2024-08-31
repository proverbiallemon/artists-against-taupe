import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
        <h1>Artists Against Taupe</h1>
        <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#what">Beyond Beige</a>
          <a href="#credo">Credo</a>
          <a href="#revolutionaries">Revolutionaries</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Join the Movement</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
