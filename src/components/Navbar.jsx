import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg px-4 py-3" style={{ backgroundColor: theme === 'dark' ? '#121212' : '#ffffff' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand fw-bold text-danger fs-4" to="/">
           GFlix
        </NavLink>

        <div className="d-flex align-items-center gap-4">
          <button onClick={toggle} className="btn btn-outline-secondary">
            {theme === 'light' ? '🌙 Dark' : '🌞 Light'}
          </button>

          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
