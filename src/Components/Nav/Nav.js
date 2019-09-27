import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { useMenuState } from '../../hooks';
import './Nav.scss';

const Nav = ({
  currentPage,
  onRedirect,
  isResumeShown,
  history: { push }
}) => {
  const [isMenuShown, handleToggleMenu] = useMenuState();

  const pages = ['home', 'about', 'projects', 'blogs'];

  const navMenuClasses = classNames({
    'nav-menu': true,
    show: isMenuShown,
    hide: !isMenuShown
  });

  const navBar = pages.map((page, index) =>
    page === 'Home' ? (
      <Link
        key={`nav-link-${index}`}
        className="nav-link"
        to="/"
        onClick={event => onRedirect(event, page, push)}
      >
        {page}
      </Link>
    ) : (
      <NavLink
        key={`nav-link-${index}`}
        className={`nav-link ${page === currentPage ? 'active' : ''}`}
        onClick={event => onRedirect(event, page, push)}
        to={`/${page.toLocaleLowerCase()}`}
        disabled={page === currentPage}
      >
        {page}
      </NavLink>
    )
  );

  return (
    <Fragment>
      <div className="nav-wrapper">
        <span className="header-wordmark" />
        <div className="nav-desktop">
          {<span className="nav-bar">{navBar}</span>}
        </div>
      </div>

      {!isResumeShown && (
        <div
          className={`nav-icon ${isMenuShown ? 'close' : ''}`}
          onClick={() => handleToggleMenu(!isMenuShown)}
        >
          <span className={`burger-line ${isMenuShown ? 'close one' : ''}`} />
          <span className={`burger-line ${isMenuShown ? 'close two' : ''}`} />
          <span className={`burger-line ${isMenuShown ? 'remove' : ''}`} />
        </div>
      )}

      <div className="nav-mobile">
        <div className={navMenuClasses}>
          {<span className="nav-bar">{navBar}</span>}
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;

Nav.propTypes = {
  history: PropTypes.object,
  currentPage: PropTypes.string,
  onRedirect: PropTypes.func,
  isResumeShown: PropTypes.bool
};
