import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Artists Against Taupe</h1>
      <nav className="headermain">
        <a href="#what">Beyond Beige</a>
        <a href="#credo">Credo</a>
        <a href="#revolutionaries">Revolutionaries</a>
        <a href="#partners">Partners</a>
        <a href="#contact">Join the Movement</a>
      </nav>
    </header>
  );
}

export default Header;