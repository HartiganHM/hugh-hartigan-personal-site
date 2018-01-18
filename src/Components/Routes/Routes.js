import React from 'react';
import { Route } from 'react-router-dom';
import App from '../App/App';
import About from '../About/About';
import Links from '../Links/Links';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';

const Routes = () => {
  return (
    <div className="Routes">
      <Route exact to='/' component={App} />
      <Route to='/about' componet={About} />
      <Route to='/links' componet={Links} />
      <Route to='/projects' componet={Projects} />
      <Route to='/blogs' componet={Blogs} />
    </div>
  );
};

export default Routes;
