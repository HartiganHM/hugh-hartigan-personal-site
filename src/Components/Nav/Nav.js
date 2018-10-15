import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ currentPage }) => {
  const pages = ['Home', 'About', 'Projects', 'Blogs'];

  return (
    <div className="nav-wrapper">
        <span className="header-wordmark" />
        <span className="nav-bar">
          {pages.map((page, index) => {
            const isActive = page === currentPage;

            if (page === 'Home') {
              return (
                <Link key={`nav-link-${index}`} className="nav-link" to="/">{page}</Link>
              )
            } else {
              return (
                <NavLink
                  key={`nav-link-${index}`}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  to={`/${page.toLocaleLowerCase()}`}
                  disabled={isActive}
                >
                  {page}
                </NavLink>
              )
            }
          })}
        </span>
    </div>
  )
};

export default Nav;