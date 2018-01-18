import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/links'>Links</Link>
        <Link to='/blogs'>Blogs</Link>
      </div>
    );
  }
}

export default App;
