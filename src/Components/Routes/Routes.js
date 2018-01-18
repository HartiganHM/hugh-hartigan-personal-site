import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Links from '../Links/Links';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route path='/about' render={() => <About />} />
      <Route path='/links' render={() => <Links />} />
      <Route path='/projects' render={() => <Projects />} />
      <Route path='/blogs' render={() => <Blogs />} />
    </div>
  );
};

export default Routes;
