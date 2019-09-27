import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import PropTypes from 'prop-types';
import './Blogs.scss';

class Blogs extends Component {
  render() {
    const {
      toggleMenu,
      toggleDetails,
      onRedirect,
      isMenuShown,
      history
    } = this.props;
    const navProps = { toggleMenu, onRedirect, isMenuShown, history };

    const blogPosts = copyContent.blogs.map((blog, index) => (
      <Card key={index} cardData={blog} toggleDetails={toggleDetails} />
    ));

    return (
      <div className="Blogs">
        <Nav currentPage="Blogs" {...navProps} />
        <div className="card-container">{blogPosts}</div>
      </div>
    );
  }
}

export default Blogs;

Blogs.propTypes = {
  history: PropTypes.object,
  toggleDetails: PropTypes.func,
  toggleMenu: PropTypes.func,
  onRedirect: PropTypes.func,
  isMenuShown: PropTypes.bool
};
