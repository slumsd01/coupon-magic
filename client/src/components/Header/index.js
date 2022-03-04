import React from 'react';


import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="">
      <div className="">
        
      </div>
    </header>
  );
};

export default Header;
