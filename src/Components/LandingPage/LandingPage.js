import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      I am an LandingPage
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/links">Links</Link>
      <Link to="/blogs">Blogs</Link>
    </div>
  );
};

export default LandingPage;
