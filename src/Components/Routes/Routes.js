import React from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import './Routes.scss';

const Routes = ({
  history,
  location
}) => {
  const componentProps = {
    history
  };

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div className="switch-wrapper">
          <Switch location={location}>
            <Route
              exact
              path="/about"
              render={() => <About {...componentProps} />}
            />
            <Route
              exact
              path="/projects"
              render={() => <Projects {...componentProps} />}
            />
            <Route
              exact
              path="/blogs"
              render={() => <Blogs {...componentProps} />}
            />
            <Route
              exact
              path="/"
              render={() => (
                <LandingPage history={history} />
              )}
            />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;

Routes.propTypes = {
  location: object,
  history: object
};
