import React from 'react';

const Footer = () => {
  return (
    <footer className="container d-flex justify-content-center">
      <div className="row d-flex justify-content-center">
        &copy;{new Date().getFullYear()} A.Lotfey, E.Ning, M.Kanczuzewski, and S.Lumsden
      </div> 
    </footer>
  );
};

export default Footer;
