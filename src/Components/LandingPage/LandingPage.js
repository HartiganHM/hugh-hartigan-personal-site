import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <span className="wordmark" />
      <div className="nav-bar">
        <NavLink className="nav-link-home" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link-home" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-link-home" to="/blogs">
          Blogs
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
