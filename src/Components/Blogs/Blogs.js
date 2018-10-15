import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import blogsData from '../../data/blogsData';
import './Blogs.css';

class Blogs extends Component {
  render() {
    const blogPosts = blogsData.map((blog, index) => (
      <Card key={index} data={blog} toggleDetails={this.props.toggleDetails} />
    ));

    return (
      <div className="Blogs">
        <Nav currentPage="Blogs"/>
        <div className="card-container">{blogPosts}</div>
      </div>
    );
  }
}

export default Blogs;
