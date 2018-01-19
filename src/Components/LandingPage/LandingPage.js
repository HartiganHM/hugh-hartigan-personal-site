import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Link className='top nav-link' to="/about">About</Link>
      <div className='middle'>
        <Link className='nav-link' to="/projects">Projects</Link>
        <span className='wordmark'>HMH</span>
        <Link className='nav-link' to="/blogs">Blogs</Link>
      </div>
      <Link className='bottom nav-link' to="/links">Links</Link>
    </div>
  );
};

export default LandingPage;
