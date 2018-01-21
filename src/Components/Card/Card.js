import React from 'react';
import './Card.css';

const Card = (props) => {
  const { title, description, url } = props.data;
  return (
    <div className='Card'>
      <a className='url' href={url}>
        <span className='title'>{title}</span>
        <span className='description'>{description}</span>
      </a>
    </div>
  )
}

export default Card