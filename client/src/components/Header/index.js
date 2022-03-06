import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Coupon Magic $</h1>
        </Link>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/login">Login | Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;