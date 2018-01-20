import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

class Blogs extends Component {
  render() {
    
    return (
      <div className="Blogs">
        <Link className="nav-link nav-link-right" to="/">
          Home
        </Link>
      </div>
    );
  }
}

export default Blogs;
