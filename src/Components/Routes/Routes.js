import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import './Routes.css';

class Routes extends Component {
  render() {
    return (
      <TransitionGroup className='transition-group'>
        <CSSTransition
          key={this.props.location.key}
          classNames="fade"
          timeout={300}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <div className="switch-wrapper">
            <Switch location={this.props.location}>
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/projects" render={() => <Projects />} />
              <Route exact path="/blogs" render={() => <Blogs />} />
              <Route exact path="/" render={() => <LandingPage />} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
};

export default Routes;