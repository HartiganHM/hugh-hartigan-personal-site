import React from 'react';
import './Card.css';

const Card = props => {
  const {
    image,
    title,
    description,
    description2,
    url,
    areaOfFocus,
    areaOfFocus2,
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

        <h2 className="title">{title}</h2>
        <span className="view-details" onClick={() => props.toggleDetails('hat')}>:D</span>

        <div className="content-container">
          <div className="description-box">
            <h3 className="description-header">Description</h3>
            <p className="description">{description}</p>
            {description2 && <p className="description">{description2}</p>}
          </div>

          <div className="area-of-focus-box">
            <h3 className="area-of-focus-header">My Area of Focus</h3>
            <p className="area-of-focus">{areaOfFocus}</p>
            {areaOfFocus2 && <p className="area-of-focus">{areaOfFocus2}</p>}
          </div>

          <div className="tech-stack-box">
            <h3 className="tech-stack-header">Tech Stack</h3>
            <p className="tech-stack">{techStack}</p>
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

        <h2 className="title">{title}</h2>
        <div className="content-container">
          <div className="description-box">
            <h3 className="description-header">Description</h3>

            <p className="description">{description}</p>
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
