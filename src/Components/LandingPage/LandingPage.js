import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <span className="wordmark" />
      <div className="nav-bar">
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/blogs">
          Blogs
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
