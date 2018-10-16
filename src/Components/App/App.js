import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
import classNames from 'classnames';
import './App.css';

class App extends Component {
  state = {
    isMenuShown: false,
    currenPage: 'Home'
  };

  toggleMenu = () => {
    this.setState({ isMenuShown: !this.state.isMenuShown });
  };

  toggleDetails = currentClass => {
    return currentClass === 'hidden' ? 'show' : 'hidden';
  };

  handleRedirect = page => {
    this.setState({ isMenuShown: false, currenPage: page });
  };

  render() {
    const { isMenuShown } = this.state;
    const appClasses = classNames({
      App: window.location.pathname === '/',
      'App away': window.location.pathname !== '/',
      'no-scroll': isMenuShown
    });

    return (
      <div className={appClasses}>
        <Route
          to="/"
          render={({ location }) => (
            <Routes
              toggleDetails={this.toggleDetails}
              toggleMenu={this.toggleMenu}
              isMenuShown={isMenuShown}
              onRedirect={this.handleRedirect}
              location={location}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
