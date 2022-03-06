import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        &copy;{new Date().getFullYear()} by Coupon Magic
      </div>
    </footer>
  );
};

export default Footer;
