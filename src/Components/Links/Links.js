import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import svgPaths from '../../data/svgPaths';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div className="Links">
        <div className="wrapper">
          <span className="header-wordmark" />
          <Link className="nav-link nav-link-top" to="/">
            Home
          </Link>
        </div>
        <div className="link-wrapper">
          <a href="https://github.com/HartiganHM" target="_blank">
            <svg className="icon" viewBox="0 0 436.5 426.8">
              <g>
                <path d={svgPaths.github} />
              </g>
            </svg>
          </a>
          <a href="mailto:hartigan.hm@gmail.com" target="_blank">
            <svg className="icon" viewBox="0 0 512 495.1">
              <g>
                <path d={svgPaths.email} />
              </g>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/hartiganhm/" target="_blank">
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

export default Links;
