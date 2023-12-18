
import React from 'react';
import logo from '../assets/images/image1.png';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        NAVY COMMANDS
      </div>
      <div className="nav-right">
        <img className="logo" src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
