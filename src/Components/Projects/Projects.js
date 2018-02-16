import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import projectsData from '../../data/projectsData';
import './Projects.css';

class Projects extends Component {
  render() {
    const projects = projectsData.map((project, index) => (
      <Card key={index} data={project} />
    ));

    return (
      <div className="Projects">
      <div className="wrapper">
      <span className="header-wordmark" />
      <span className="nav-bar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact" disabled>
          Projects
        </Link>
        <Link className="nav-link" to="/blogs">
          Blogs
        </Link>
      </span>
    </div>
        <div className="card-container">{projects}</div>
      </div>
    );
  }
}

export default Projects;
