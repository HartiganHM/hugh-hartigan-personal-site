import React from 'react';
import { func, object } from 'prop-types';
import { NavLink } from 'react-router-dom';
import './LandingPage.scss';

const pages = ['about', 'projects', 'blogs'];

const LandingPage = ({ onRedirect, history: { push } }) => {
  return (
    <div className="LandingPage">
      <span className="wordmark" />

      <div className="nav-bar">
        {pages.map(page => (
          <NavLink
            key={page}
            className="nav-link-home"
            to={`/${page}`}
            onClick={event => onRedirect(event, page, push)}
          >
            {page}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  onRedirect: func.isRequired,
  history: object.isRequired
};
