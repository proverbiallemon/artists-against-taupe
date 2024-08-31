import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
       <div className="container">
      <h1>Artists Against Taupe</h1>
      <nav>
        <a href="#what">What</a>
        <a href="#credo">Credo</a>
        <a href="#revolutionaries">Revolutionaries</a>
        <a href="#resources">Resources</a>
        <a href="#contact">Join the Movement</a>
      </nav>
      </div>
    </header>
  );
}

export default Header;