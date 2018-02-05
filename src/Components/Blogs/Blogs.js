import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import blogsData from '../../data/blogsData';
import './Blogs.css';

class Blogs extends Component {
  render() {
    const blogPosts = blogsData.map(blog => <Card data={blog} />);
    return (
      <div className="Blogs">
      <div className="wrapper">
      <span className="header-wordmark" />
      <span className="nav-bar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
      </span>
    </div>
        <div className="card-container">{blogPosts}</div>
      </div>
    );
  }
}

export default Blogs;
