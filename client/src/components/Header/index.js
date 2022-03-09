import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="container background-color color">
      <div className="d-flex bd-highlight mb-3">
        <Link to="/" className= "me-auto p-2 bd-highlight bg-secondary-color" style={{ textDecoration: 'none' }}>
          <h1>Coupon Magic $</h1>
        </Link>
        <nav className="p-2 bd-highlight">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile" className="px-3" style={{ textDecoration: 'none' }}>Profile</Link>
              <a href="/" onClick={logout} className="px-3" style={{ textDecoration: 'none' }}>
                Logout
              </a>
            </>
          ) : (
            <>
            <div className="p-2 bd-highlight">
              <Link to="/" className="px-3" style={{ textDecoration: 'none' }}>Home</Link>
              <Link to="/login" className="px-3" style={{ textDecoration: 'none' }}>Login / Sign Up</Link>
            </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 