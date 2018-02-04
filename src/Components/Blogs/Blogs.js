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
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div className="card-container">{blogPosts}</div>
      </div>
    );
  }
}

export default Blogs;
