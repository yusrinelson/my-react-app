import React from 'react';
import { Link, Outlet } from 'react-router-dom';
  
  const Dashboard = () =>  {
	return (
	  <div>
        <h1>Welcome to the Dashboard</h1>
        <Link to="settings">Settings</Link>
        <br/>
        <Link to="profile">Profile</Link>
        <Outlet/>
	  </div>
	);
  }
  
  export default Dashboard;
  