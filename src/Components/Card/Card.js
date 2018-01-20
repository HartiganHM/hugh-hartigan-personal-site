import React from 'react';
import './Card.css';

const Card = (props) => {
  const { title, description, url } = props.data;
  return (
    <div className='Card'>
      <span className='title'>{title}</span>
      <span className='description'>{description}</span>
    </div>
  )
}

export default Card