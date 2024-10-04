import React from 'react';
import { Link } from 'react-router-dom';
  
  const Navbar = () =>  {
	return (
	  <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/dashboard">Dashboard</Link>
        <br/>
        <Link to="/user/yusri nelson">User Profile</Link>
      </nav>
	);
  }
  
  export default Navbar;
  