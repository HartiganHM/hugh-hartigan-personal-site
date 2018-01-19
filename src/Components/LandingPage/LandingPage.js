import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Link className='top nav-link nav-link-top' to="/about">About</Link>
      <div className='middle'>
        <Link className='nav-link nav-link-left' to="/blogs">Blogs</Link>
        <span className='wordmark'></span>
        <Link className='nav-link nav-link-right' to="/projects">Projects</Link>
      </div>
      <Link className='bottom nav-link nav-link-bottom' to="/links">Links</Link>
    </div>
  );
};

export default LandingPage;
