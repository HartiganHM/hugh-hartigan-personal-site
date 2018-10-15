import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import blogsData from '../../data/blogsData';
import PropTypes from 'prop-types';
import './Blogs.css';

class Blogs extends Component {
  render() {
    const blogPosts = blogsData.map((blog, index) => (
      <Card key={index} cardData={blog} toggleDetails={this.props.toggleDetails} />
    ));

    return (
      <div className="Blogs">
        <Nav currentPage="Blogs" />
        <div className="card-container">{blogPosts}</div>
      </div>
    );
  }
}

export default Blogs;

Blogs.propTypes = {
  toggleDetails: PropTypes.func
};
