import React from 'react';
import { object } from 'prop-types';

import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import './Blogs.scss';

const Blogs = ({
  history
}) => {
  const navProps = { history };

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
  history: object
};
