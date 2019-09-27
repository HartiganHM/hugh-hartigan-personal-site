import React from 'react';
import { object, func, bool } from 'prop-types';

import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import './Blogs.scss';

const Blogs = ({
  onRedirect,
  isMenuShown,
  history
}) => {
  const navProps = { onRedirect, isMenuShown, history };

  const blogPosts = copyContent.blogs.map((blog, index) => (
    <Card key={index} cardData={blog} />
  ));

  return (
    <div className="Blogs">
      <Nav currentPage="Blogs" {...navProps} />
      <div className="card-container">{blogPosts}</div>
    </div>
  );
};

export default Blogs;

Blogs.propTypes = {
  history: object,
  onRedirect: func,
  isMenuShown: bool
};
