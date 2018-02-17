import React from 'react';
import './Card.css';

const Card = props => {
  const {
    image,
    title,
    description,
    url,
    areaOfFocus,
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
          <div className="area-of-focus-box">
            <span className="area-of-focus-header">My Area of Focus</span>
            <span className="area-of-focus">{areaOfFocus}</span>
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
        <img
          className="blog-image"
          src={require(`../../images/${image}.jpg`)}
          alt={image}
        />
        <span className="title">{title}</span>
        <div className="content-container">
          <div className="description-box">
            <span className="description-header">Description</span>
            <span className="description">{description}</span>
          </div>
          <span className="button-wrapper">
            <a href={url} target="_blank" className="button">
              Read
            </a>
          </span>
        </div>
      </div>
    );
  }
};

export default Card;
