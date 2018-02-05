import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="About">
      <div className="wrapper">
        <span className="header-wordmark" />
        <span className="nav-bar">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/blogs">
            Blogs
          </Link>
        </span>
      </div>
      <div className="info-container">
        <img
          className="profile-image"
          src={require('../../images/Hugh-Hartigan.jpg')}
          alt="Hugh-Hartigan-software-developer"
        />
        <div className="profile-description-container">
          <p className="profile-description">
            I am a software developer with a passion for creative solutions to
            complex problems. I look forward to innovative challenges, relish in
            the opportunity to learn something new, and love seeing those around
            me grow.
          </p>

          <p className="profile-description">
            My road to development started with an itch to create. Whether it's
            painting, drawing, sewing a bow tie, or making a button pixel
            perfect, I get lost building anything and everything. Software
            development satisfies this need and more, providing me with an
            endless ocean of new puzzles to solve.
          </p>

          <p className="profile-description">
            Reach me through the contacts page of my site to collaborate, grab
            coffee, or ponder life's biggest (and smallest) mysteries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
