import React from 'react';
import { Route } from 'react-router';
import classNames from 'classnames';

import { useStateValue } from '../StateProvider/StateProvider';
import Routes from '../Routes/Routes';
import './App.scss';

const App = () => {
  const [{ currentPage, isMenuShown }] = useStateValue();

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
