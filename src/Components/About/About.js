import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="About">
      I am an About
      <Link className='nav-link' to="/">Home</Link>
    </div>
  );
};

export default About;
