import React from 'react';
import { func, object } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useCurrentPageState } from '../../hooks';
import './LandingPage.scss';

const pages = ['about', 'projects', 'blogs'];

const LandingPage = ({ history: { push } }) => {
  const [currentPage, handleChangeCurrentPage] = useCurrentPageState();

  return (
    <div className="LandingPage">
      <span className="wordmark" />

      <div className="nav-bar">
        {pages.map(page => (
          <NavLink
            key={page}
            className="nav-link-home"
            to={`/${page}`}
            onClick={() => {
              push(page);
              handleChangeCurrentPage(page);
            }}
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
