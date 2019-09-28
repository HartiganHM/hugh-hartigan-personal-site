import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { useStateValue } from '../StateProvider/StateProvider';
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import './Routes.scss';

const Routes = ({
  history,
  location
}) => {
  const [{ currentPage }, dispatch] = useStateValue();

  useEffect(() => {
    const page = location.pathname.split('/')[1];

    dispatch({
      type: 'CHANGE_CURRENT_PAGE',
      page: page === '' ? 'home' : page
    });
  }, []);

  const isOnLandingPage = currentPage === '' || currentPage === 'home';

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
        <div className={`switch-wrapper ${currentPage !== 'home' ? 'routes-away' : ''}`}>
          {!isOnLandingPage && (<Nav history={history} />)}

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
