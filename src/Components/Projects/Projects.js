import React from 'react';
import { object } from 'prop-types';

import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import './Projects.scss';

const Projects = ({
  history
}) => {
  const navProps = { history };

  const projects = copyContent.projects.map((project, index) => (
    <Card key={index} cardData={project} />
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
  history: object
};
