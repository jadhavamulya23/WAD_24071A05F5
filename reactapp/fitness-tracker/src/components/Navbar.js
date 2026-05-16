import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav>
      <Link to={user ? '/dashboard' : '/'} className="logo">FitTrack</Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      <ul className={menuOpen ? 'open' : ''}>
        {user ? (
          <>
            <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/workouts" onClick={() => setMenuOpen(false)}>Workouts</NavLink></li>
            <li><NavLink to="/progress" onClick={() => setMenuOpen(false)}>Progress</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
            <li>
              <span style={{ color: '#aaa', fontSize: '0.85rem' }}>Hi, {user.name} &nbsp;</span>
              <button className="btn-logout" onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
            <li><NavLink to="/register" onClick={() => setMenuOpen(false)}>Register</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
