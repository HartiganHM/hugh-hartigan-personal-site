import React from 'react';

import Card from '../Card/Card';
import copyContent from '../../copy/copyContent';
import './Blogs.scss';

const Blogs = () => {

  const blogPosts = copyContent.blogs.map((blog, index) => (
    <Card key={index} cardData={blog} />
  ));

  return (
    <div className="Blogs">
      <div className="card-container">{blogPosts}</div>
    </div>
  );
};

export default Blogs;
