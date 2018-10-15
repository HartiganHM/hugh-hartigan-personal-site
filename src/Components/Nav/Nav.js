import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Nav.css';

class Nav extends Component {
  state = {
    isMenuShown: false,
    isRedirecting: false
  };

  handleToggleMenu = () => {
    this.setState({ isMenuShown: !this.state.isMenuShown });
  };

  handleRedirect = () => {
    console.log('Butt')
    this.setState({ isRedirecting: true });
  };

  render() {
    const { currentPage } = this.props;
    const { isMenuShown } = this.state;

    const pages = ['Home', 'About', 'Projects', 'Blogs'];
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
                onClick={this.handleRedirect}
              >
                {page}
              </Link>
            );
          } else {
            return (
              <NavLink
                key={`nav-link-${index}`}
                className={`nav-link ${isActive ? 'active' : ''}`}
                to={`/${page.toLocaleLowerCase()}`}
                disabled={isActive}
                onClick={this.handleRedirect}
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

        <div
          className={`nav-icon ${isMenuShown ? 'close' : ''}`}
          onClick={this.handleToggleMenu}
        >
          <span className={`burger-line ${isMenuShown ? 'close one' : ''}`} />
          <span className={`burger-line ${isMenuShown ? 'close two' : ''}`} />
          <span className={`burger-line ${isMenuShown ? 'remove' : ''}`} />
        </div>

        <div className="nav-mobile">
          <div className={`nav-menu ${isMenuShown ? 'show' : 'hide'}`}>
            {navBar}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Nav;

Nav.propTypes = {
  currentPage: PropTypes.string
};
