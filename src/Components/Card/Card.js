import React from 'react';
import './Card.css';

const Card = props => {
  const { title, description, url, techStack, gitHub, liveLink } = props.data;

  if (gitHub) {
    return (
      <div className="Card">
        <div className="wrapper">
          <span className="title">{title}</span>
          <span className="description">{description}</span>
          <span className="tech-stack">{techStack}</span>
          <span className="button-wrapper">
            <a href={liveLink} className="button">
              Launch
            </a>
            <a href={gitHub} className="button">
              GitHub
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Card">
        <a className="url" href={url}>
          <span className="title">{title}</span>
          <span className="description">{description}</span>
        </a>
      </div>
    );
  }
};

export default Card;
