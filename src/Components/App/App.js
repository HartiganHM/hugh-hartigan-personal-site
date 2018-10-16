import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
import classNames from 'classnames';
import './App.css';

class App extends Component {
  state = {
    isMenuShown: false,
    isResumeShown: false,
    currenPage: 'Home'
  };

  toggleMenu = () => {
    this.setState({ isMenuShown: !this.state.isMenuShown });
  };

  toggleDetails = currentClass => {
    return currentClass === 'hidden' ? 'show' : 'hidden';
  };

  handleRedirect = (event, page, push) => {
    event.preventDefault();
    const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`;

    this.setState({ isMenuShown: false, currenPage: page });
    setTimeout(() => push(path), 300);
  };

  showResume = async () => {
    await this.setState({ isResumeShown: true });
    window.scrollTo(0, 0);
  };

  hideResume = () => {
    this.setState({ isResumeShown: false });
  };

  render() {
    const { isMenuShown, isResumeShown } = this.state;
    const appClasses = classNames({
      App: window.location.pathname === '/',
      'App away': window.location.pathname !== '/',
      'no-scroll': isMenuShown
    });

    const componentProps = {
      isMenuShown,
      isResumeShown,
      toggleDetails: this.toggleDetails,
      toggleMenu: this.toggleMenu,
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
