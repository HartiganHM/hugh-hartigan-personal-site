import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import blogsData from '../../data/blogsData';
import './Blogs.css';

class Blogs extends Component {
  render() {
    const blogPosts = blogsData.map(blog => <Card data={blog} toggleDetails={this.props.toggleDetails}/>);
    return (
      <div className="Blogs">
      <div className="wrapper">
      <span className="header-wordmark" />
      <span className="nav-bar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/projects">
        Projects
        </NavLink>
        <NavLink className="nav-link" to="/blogs">
          Blogs
        </NavLink>
      </span>
    </div>
        <div className="card-container">{blogPosts}</div>
      </div>
    );
  }
}

export default Blogs;
