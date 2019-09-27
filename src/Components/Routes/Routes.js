import Reactfrom 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import PropTypes from 'prop-types';
import './Routes.scss';

const Routes = ({
  isMenuShown,
  isResumeShown,
  onRedirect,
  toggleMenu,
  toggleDetails,
  showResume,
  hideResume,
  history,
  location
}) => {
  const componentProps = {
    isMenuShown,
    isResumeShown,
    onRedirect,
    toggleDetails,
    toggleMenu,
    showResume,
    hideResume,
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
                <LandingPage onRedirect={onRedirect} history={history} />
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
  location: PropTypes.object,
  history: PropTypes.object,
  isMenuShown: PropTypes.bool,
  isResumeShown: PropTypes.bool,
  onRedirect: PropTypes.func,
  toggleMenu: PropTypes.func,
  toggleDetails: PropTypes.func,
  showResume: PropTypes.func,
  hideResume: PropTypes.func
};
