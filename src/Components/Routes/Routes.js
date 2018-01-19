import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Links from '../Links/Links';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route exact path="/links" render={() => <Links />} />
        <Route exact path="/blogs" render={() => <Blogs />} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default Routes;
