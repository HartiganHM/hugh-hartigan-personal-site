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
      <Route path='/about' componet={About} />
      <Route path='/links' componet={Links} />
      <Route path='/projects' componet={Projects} />
      <Route path='/blogs' componet={Blogs} />
    </div>
  );
};

export default Routes;
