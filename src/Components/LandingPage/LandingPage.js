import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Link className='nav-link' to="/about">About</Link>
      <Link className='nav-link' to="/projects">Projects</Link>
      <h1>HMH</h1>
      <Link className='nav-link' to="/links">Links</Link>
      <Link className='nav-link' to="/blogs">Blogs</Link>
    </div>
  );
};

export default LandingPage;
