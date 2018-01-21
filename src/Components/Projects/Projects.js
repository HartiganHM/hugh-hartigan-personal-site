import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import projectsData from '../../data/projectsData';
import './Projects.css';

class Projects extends Component {
  render() {
    const projects = projectsData.map(project => <Card data={project} />);
    return (
      <div className="Projects">
        <div className="wrapper">
          <span className="header-wordmark" />
          <Link className="nav-link nav-link-left" to="/">
            Home
          </Link>
        </div>
        <div className="card-container">{projects}</div>
      </div>
    );
  }
}

export default Projects;
