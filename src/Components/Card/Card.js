import React from 'react';
import './Card.css';

const Card = props => {
  const {
    image,
    title,
    description,
    url,
    techStack,
    gitHub,
    liveLink
  } = props.data;

  if (gitHub) {
    return (
      <div className="Card">
        <img
          className="project-image"
          src={require(`../../images/${image}.jpg`)}
          alt={image}
        />
        <span className="title">{title}</span>
        <div className="content-container">
          <div className="description-box">
            <span className="description-header">Description</span>
            <span className="description">{description}</span>
          </div>
          <div className="tech-stack-box">
            <span className="tech-stack-header">Tech Stack</span>
            <span className="tech-stack">{techStack}</span>
          </div>
          <span className="button-wrapper">
            {liveLink && (
              <a href={liveLink} target="_blank" className="button">
                Launch
              </a>
            )}
            <a href={gitHub} target="_blank" className="button">
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
          <img
            className="project-image"
            src={require(`../../images/${image}.jpg`)}
            alt={image}
          />
          <span className="title">{title}</span>
          <span className="description">{description}</span>
        </a>
      </div>
    );
  }
};

export default Card;
