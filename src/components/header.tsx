import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';
import { signIn, signOut } from 'aws-amplify/auth';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
    } catch (error) {
      console.error('Error checking user:', error);
      setUser(null);
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = async () => {
    try {
      // This will redirect to the Amplify-hosted UI for sign-in
      await signIn();
      await checkUser(); // Check user state after sign in
    } catch (error) {
      console.error('Error signing in:', error);
      // You might want to show an error message to the user here
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <h1>Artists Against Taupe</h1>
      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        {location.pathname === '/' ? (
          <>
            <a onClick={() => scrollToSection('what')}>Beyond Beige</a>
            <a onClick={() => scrollToSection('credo')}>Credo</a>
            <a onClick={() => scrollToSection('revolutionaries')}>Revolutionaries</a>
            <a onClick={() => scrollToSection('partners')}>Partners</a>
            <a onClick={() => scrollToSection('contact')}>Join the Movement</a>
          </>
        ) : (
          <Link to="/">Home</Link>
        )}
        {user && <Link to="/admin">Admin Dashboard</Link>}
        {user ? (
          <button onClick={handleSignOut} className="login-button">Sign Out</button>
        ) : (
          <button onClick={handleLogin} className="login-button">Admin Login</button>
        )}
      </nav>
    </header>
  );
}

export default Header;