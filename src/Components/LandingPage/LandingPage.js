import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <span className="wordmark" />
      <div className="nav-bar">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-link" to="/blogs">
          Blogs
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
