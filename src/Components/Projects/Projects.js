import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import PropTypes from 'prop-types';
import './Projects.css';

class Projects extends Component {
  render() {
    const { toggleMenu, onRedirect, isMenuShown, history } = this.props;

    const projects = copyContent.projects.map((project, index) => (
      <Card
        key={index}
        cardData={project}
        toggleDetails={this.props.toggleDetails}
      />
    ));

    return (
      <div className="Projects">
        <Nav
          currentPage="Projects"
          toggleMenu={toggleMenu}
          onRedirect={onRedirect}
          isMenuShown={isMenuShown}
          history={history}
        />
        <div className="card-container">{projects}</div>
      </div>
    );
  }
}

export default Projects;

Projects.propTypes = {
  toggleDetails: PropTypes.func
};
