import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink className="nav-link" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-link" to="/blogs">
          Blogs
        </NavLink>
      </span>
    </div>
        <div className="card-container">{projects}</div>
      </div>
    );
  }
}

export default Projects;
