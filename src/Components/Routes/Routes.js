import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Links from '../Links/Links';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);

  return childrenArray[0] || null;
};

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/about"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <About {...rest} />}
            </TransitionGroup>
          )}
        />
        <Route
          exact
          path="/links"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Links {...rest} />}
            </TransitionGroup>
          )}
        />
        <Route
          exact
          path="/projects"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Projects {...rest} />}
            </TransitionGroup>
          )}
        />
        <Route
          exact
          path="/blogs"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Blogs {...rest} />}
            </TransitionGroup>
          )}
        />
        <Route
          exact
          path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <LandingPage {...rest} />}
            </TransitionGroup>
          )}
        />
      </Switch>
    </div>
  );
};

export default Routes;
