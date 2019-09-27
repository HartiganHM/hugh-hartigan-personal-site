import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Nav.scss';

class Nav extends Component {
  render() {
    const {
      currentPage,
      toggleMenu,
      onRedirect,
      isMenuShown,
      isResumeShown,
      history: { push }
    } = this.props;

    const pages = ['home', 'about', 'projects', 'blogs'];

    const navMenuClasses = classNames({
      'nav-menu': true,
      show: isMenuShown,
      hide: !isMenuShown
    });

    const navBar = (
      <span className="nav-bar">
        {pages.map((page, index) => {
          const isActive = page === currentPage;

          if (page === 'Home') {
            return (
              <Link
                key={`nav-link-${index}`}
                className="nav-link"
                to="/"
                onClick={event => onRedirect(event, page, push)}
              >
                {page}
              </Link>
            );
          } else {
            return (
              <NavLink
                key={`nav-link-${index}`}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={event => onRedirect(event, page, push)}
                to={`/${page.toLocaleLowerCase()}`}
                disabled={isActive}
              >
                {page}
              </NavLink>
            );
          }
        })}
      </span>
    );

    return (
      <Fragment>
        <div className="nav-wrapper">
          <span className="header-wordmark" />
          <div className="nav-desktop">{navBar}</div>
        </div>

        {!isResumeShown && (
          <div
            className={`nav-icon ${isMenuShown ? 'close' : ''}`}
            onClick={toggleMenu}
          >
            <span className={`burger-line ${isMenuShown ? 'close one' : ''}`} />
            <span className={`burger-line ${isMenuShown ? 'close two' : ''}`} />
            <span className={`burger-line ${isMenuShown ? 'remove' : ''}`} />
          </div>
        )}

        <div className="nav-mobile">
          <div className={navMenuClasses}>{navBar}</div>
        </div>
      </Fragment>
    );
  }
}

export default Nav;

Nav.propTypes = {
  history: PropTypes.object,
  currentPage: PropTypes.string,
  toggleMenu: PropTypes.func,
  onRedirect: PropTypes.func,
  isMenuShown: PropTypes.bool,
  isResumeShown: PropTypes.bool
};
