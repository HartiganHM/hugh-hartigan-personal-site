import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="wrapper">
          <span className="header-wordmark" />
          <Link className="nav-link nav-link-left" to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Projects;
