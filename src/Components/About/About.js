import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="About">
    <div className="wrapper">
          <span className="header-wordmark" />
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
      <img className='profile-image' src={require('../../images/Hugh-Hartigan.jpg')} alt='Hugh-Hartigan-software-developer'/>
      <Link className='nav-link' to="/">Home</Link>
    </div>
  );
};

export default About;
