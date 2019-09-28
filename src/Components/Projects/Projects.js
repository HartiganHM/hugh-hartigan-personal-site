import React from 'react';

import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import './Projects.scss';

const Projects = () => {
  const projects = copyContent.projects.map((project, index) => (
    <Card key={index} cardData={project} />
  ));

  return (
    <div className="Projects">
      <div className="card-container">{projects}</div>
    </div>
  );
};

export default Projects;
