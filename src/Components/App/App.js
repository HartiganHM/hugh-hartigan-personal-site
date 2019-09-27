import React from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
import classNames from 'classnames';

import { useCurrentPageState, useMenuState } from '../../hooks';
import './App.scss';

const App = () => {
  const [currentPage] = useCurrentPageState();
  const [isMenuShown] = useMenuState();
  console.log({ currentPage, isMenuShown });

  const appClasses = classNames({
    App: currentPage === 'home',
    'App away': currentPage !== 'home',
    'no-scroll': isMenuShown
  });

  return (
    <div className={appClasses}>
      <Route
        to="/"
        render={({ location, history }) => (
          <Routes location={location} history={history} />
        )}
      />
    </div>
  );
};

export default App;
