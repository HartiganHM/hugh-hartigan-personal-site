import React from 'react';
import { Link } from 'react-router-dom';
import svgPaths from '../../data/svgPaths';
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
          <Link className="nav-link active" to="/about" disabled>
            About
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
        <div className="top-container">
          <img
            className="profile-image"
            src={require('../../images/Hugh-Hartigan.jpg')}
            alt="Hugh-Hartigan-software-developer"
          />
          <div className="profile-description-container">
            <span className="description-header">About Hugh</span>

            <p className="profile-description">
              I am a software developer with a passion for creative solutions to
              complex problems. I look forward to innovative challenges, relish
              in the opportunity to learn something new, and love seeing those
              around me grow.
            </p>

            <p className="profile-description">
              My road to development started with an itch to create. Whether
              it's painting, drawing, sewing a bow tie, or making a button pixel
              perfect, I get lost building anything and everything. Software
              development satisfies this need and more, providing me with an
              endless ocean of new puzzles to solve.
            </p>

            <p className="profile-description">
              Reach me through the contacts page of my site to collaborate, grab
              a coffee, or ponder life's biggest (and smallest) mysteries:
            </p>

            <ul className="questions">
              <li>Is Mario a really good hero or a very bad plumber?</li>
              <li>If aliens invaded, would they think dogs owned us?</li>
              <li>
                Is it possible to get the perfect temperature on a Hot Pocket?
              </li>
            </ul>
          </div>
        </div>

        <div className="link-wrapper">
          <a
            href="https://www.turing.io/sites/default/files/resumes/Hugh-Hartigan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <svg className="icon" viewBox="0 0 512 512">
              <g>
                <path d={svgPaths.resume} />
              </g>
            </svg>
            <span className="icon-text">Resume</span>
          </a>
          <a
            href="https://github.com/HartiganHM"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <svg className="icon" viewBox="0 0 436.5 426.8">
              <g>
                <path d={svgPaths.github} />
              </g>
            </svg>
            <span className="icon-text">GitHub</span>
          </a>
          <a
            href="mailto:hartigan.hm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <svg className="icon" viewBox="0 0 512 495.1">
              <g>
                <path d={svgPaths.email} />
              </g>
            </svg>
            <span className="icon-text">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hartiganhm/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <svg className="icon" viewBox="0 0 512 512">
              <g>
                <path d={svgPaths.linkedin} />
              </g>
            </svg>
            <span className="icon-text">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

// https://www.turing.io/sites/default/files/resumes/Hugh-Hartigan-Resume.pdf
