import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import PropTypes from 'prop-types';
import './Projects.scss';

class Projects extends Component {
  render() {
    const {
      toggleMenu,
      toggleDetails,
      onRedirect,
      isMenuShown,
      history
    } = this.props;
    const navProps = { toggleMenu, onRedirect, isMenuShown, history };

    const projects = copyContent.projects.map((project, index) => (
      <Card key={index} cardData={project} toggleDetails={toggleDetails} />
    ));

    return (
      <div className="Projects">
        <Nav currentPage="Projects" {...navProps} />
        <div className="card-container">{projects}</div>
      </div>
    );
  }
}

export default Projects;

Projects.propTypes = {
  history: PropTypes.object,
  toggleDetails: PropTypes.func,
  toggleMenu: PropTypes.func,
  onRedirect: PropTypes.func,
  isMenuShown: PropTypes.bool
};
