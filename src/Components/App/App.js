import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
import classNames from 'classnames';
import './App.scss';

class App extends Component {
  state = {
    isResumeShown: false,
    currentPage: 'home'
  };

  componentDidMount() {
    const currentPage = window.location.pathname.split('/')[1];

    if (currentPage) {
      this.setState({ currentPage });
    }
  }

  handleRedirect = (event, page, push) => {
    event.preventDefault();
    const path = page === 'home' ? '/' : `/${page.toLowerCase()}`;

    this.setState({ isMenuShown: false, currentPage: page });
    setTimeout(() => push(path), 300);
  };

  render() {
    const { isMenuShown, isResumeShown, currentPage } = this.state;

    const appClasses = classNames({
      App: currentPage === 'home',
      'App away': currentPage !== 'home',
      'no-scroll': isMenuShown || isResumeShown
    });

    const componentProps = {
      onRedirect: this.handleRedirect
    };

    return (
      <div className={appClasses}>
        <Route
          to="/"
          render={({ location, history }) => (
            <Routes
              {...componentProps}
              location={location}
              history={history}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
