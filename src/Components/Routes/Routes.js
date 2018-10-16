import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import PropTypes from 'prop-types';
import './Routes.css';

class Routes extends Component {
  render() {
    const { isMenuShown, onRedirect, toggleMenu, toggleDetails } = this.props;

    return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={this.props.location.key}
          classNames="fade"
          timeout={300}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <div className="switch-wrapper">
            <Switch location={this.props.location}>
              <Route
                exact
                path="/about"
                render={() => (
                  <About
                    onRedirect={onRedirect}
                    toggleMenu={toggleMenu}
                    isMenuShown={isMenuShown}
                  />
                )}
              />
              <Route
                exact
                path="/projects"
                render={() => (
                  <Projects
                    onRedirect={onRedirect}
                    toggleDetails={toggleDetails}
                    toggleMenu={toggleMenu}
                    isMenuShown={isMenuShown}
                  />
                )}
              />
              <Route
                exact
                path="/blogs"
                render={() => (
                  <Blogs
                    onRedirect={onRedirect}
                    toggleDetails={toggleDetails}
                    toggleMenu={toggleMenu}
                    isMenuShown={isMenuShown}
                  />
                )}
              />
              <Route exact path="/" render={() => <LandingPage />} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Routes;

Routes.propTypes = {
  location: PropTypes.object
};
