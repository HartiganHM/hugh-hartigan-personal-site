import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
import classNames from 'classnames';
import './App.scss';

class App extends Component {
  state = {
    isMenuShown: false,
    isResumeShown: false,
    currentPage: 'home'
  };

  componentDidMount() {
    const currentPage = window.location.pathname.split('/')[1];

    this.setState({ currentPage });
  }

  toggleMenu = () => {
    this.setState({ isMenuShown: !this.state.isMenuShown });
  };

  toggleDetails = currentClass => {
    return currentClass === 'hidden' ? 'show' : 'hidden';
  };

  handleRedirect = (event, page, push) => {
    event.preventDefault();
    const path = page === 'home' ? '/' : `/${page.toLowerCase()}`;

    this.setState({ isMenuShown: false, currentPage: page });
    setTimeout(() => push(path), 300);
  };

  showResume = async () => {
    document.querySelector('.App').scrollTop = 0;
    await this.setState({ isResumeShown: true });
  };

  hideResume = () => {
    this.setState({ isResumeShown: false });
  };

  render() {
    const { isMenuShown, isResumeShown, currentPage } = this.state;

    const appClasses = classNames({
      App: currentPage === 'home',
      'App away': currentPage !== 'home',
      'no-scroll': isMenuShown || isResumeShown
    });

    const componentProps = {
      isMenuShown,
      isResumeShown,
      toggleDetails: this.toggleDetails,
      toggleMenu: this.toggleMenu,
      onRedirect: this.handleRedirect,
      showResume: this.showResume,
      hideResume: this.hideResume
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
