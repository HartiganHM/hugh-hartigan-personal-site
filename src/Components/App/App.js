import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
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

  checkLocation(endpoint) {
    if (endpoint === '/') {
      return 'App';
    } else {
      return 'App away';
    }
  }

  render() {
    const { isMenuShown } = this.state;
    this.checkLocation(window.location.pathname);

    return (
      <div className={this.checkLocation(window.location.pathname)}>
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
