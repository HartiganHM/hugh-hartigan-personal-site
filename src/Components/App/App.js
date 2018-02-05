import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
import './App.css';

class App extends Component {
  checkLocation (endpoint) {
    if (endpoint === '/') {
      return 'App'
    } else {
      return 'App away'
    }
  }

  render() {
    this.checkLocation(window.location.pathname);

    return (
      <div className={this.checkLocation(window.location.pathname)}>
        <Route to="/" component={Routes} />
      </div>
    );
  }
};

export default App;
