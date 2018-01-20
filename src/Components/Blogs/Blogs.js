import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import blogsData from '../../data/blogsData';
import './Blogs.css';

class Blogs extends Component {
  render() {
    const blogPosts = blogsData.map(blog => <Card data={blog}/>)
    return (
      <div className="Blogs">
        <div className='card-container'>
          {blogPosts}
        </div>
        <Link className="nav-link nav-link-right" to="/">
          Home
        </Link>
      </div>
    );
  }
}

export default Blogs;
