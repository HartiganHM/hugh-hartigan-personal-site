import React from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
import classNames from 'classnames';

import useMenuState from '../../hooks/useMenuState';
import './App.scss';

const App = () => {
  const currentPage = 'home';
  const [isMenuShown] = useMenuState();

  const appClasses = classNames({
    App: currentPage === 'home',
    'App away': currentPage !== 'home',
    'no-scroll': isMenuShown
  });

  const componentProps = {
    // onRedirect: this.handleRedirect
  };

  return (
    <div className={appClasses}>
      <Route
        to="/"
        render={({ location, history }) => (
          <Routes {...componentProps} location={location} history={history} />
        )}
      />
    </div>
  );
};

export default App;
