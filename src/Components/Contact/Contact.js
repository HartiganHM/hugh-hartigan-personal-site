import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import svgPaths from '../../data/svgPaths';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <div className="wrapper">
      <span className="header-wordmark" />
      <span className="nav-bar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
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
        <div className="link-wrapper">
          <a href="https://github.com/HartiganHM" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 436.5 426.8">
              <g>
                <path d={svgPaths.github} />
              </g>
            </svg>
          </a>
          <a href="mailto:hartigan.hm@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 512 495.1">
              <g>
                <path d={svgPaths.email} />
              </g>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/hartiganhm/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 512 512">
              <g>
                <path d={svgPaths.linkedin} />
              </g>
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
