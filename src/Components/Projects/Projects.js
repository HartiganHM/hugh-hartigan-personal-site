import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import projectsData from '../../data/projectsData';
import './Projects.css';

class Projects extends Component {
  render() {
    const projects = projectsData.map((project, index) => (
      <Card key={index} data={project} toggleDetails={this.props.toggleDetails}/>
    ));

    return (
      <div className="Projects">
        <div className="wrapper">
          <span className="header-wordmark" />
          <span className="nav-bar">
            <Link className="nav-link" to="/">
              Home
            </Link>
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
