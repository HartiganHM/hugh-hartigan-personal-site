import React from 'react';
import { object, func, bool } from 'prop-types';

import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import './Projects.scss';

const Projects = ({
  toggleMenu,
  toggleDetails,
  onRedirect,
  isMenuShown,
  history
}) => {
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
};

export default Projects;

Projects.propTypes = {
  history: object,
  toggleDetails: func,
  toggleMenu: func,
  onRedirect: func,
  isMenuShown: bool
};
